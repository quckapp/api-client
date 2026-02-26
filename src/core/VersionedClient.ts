import { OpenAPI } from './OpenAPI';

interface ServiceVersionInfo {
  activeVersion: string;
  releaseVersion: string;
  availableVersions: string[];
  sunsetDate: string | null;
}

interface VersionMapResponse {
  environment: string;
  defaultApiVersion: string;
  services: Record<string, ServiceVersionInfo>;
}

export class VersionedClient {
  private versionMap: VersionMapResponse | null = null;
  private configUrl: string;
  private environment: string;
  private cacheMs: number;
  private lastFetch = 0;

  constructor(options: {
    configUrl?: string;
    environment?: string;
    cacheDurationMs?: number;
  } = {}) {
    this.configUrl = options.configUrl || `${OpenAPI.BASE}/config/versions`;
    this.environment = options.environment || 'production';
    this.cacheMs = options.cacheDurationMs || 300_000; // 5 minutes
  }

  async init(): Promise<void> {
    await this.fetchConfig();
  }

  getServiceUrl(serviceKey: string, apiVersion?: string): string {
    if (!this.versionMap) {
      return `${OpenAPI.BASE}`;
    }

    const service = this.versionMap.services[serviceKey];
    if (!service) {
      return `${OpenAPI.BASE}`;
    }

    const version = apiVersion || service.activeVersion || this.versionMap.defaultApiVersion;
    return `${OpenAPI.BASE.replace(/\/v\d+(\.\d+)?$/, '')}/${version}`;
  }

  getActiveVersion(serviceKey: string): string | null {
    return this.versionMap?.services[serviceKey]?.activeVersion || null;
  }

  getAvailableVersions(serviceKey: string): string[] {
    return this.versionMap?.services[serviceKey]?.availableVersions || [];
  }

  getDefaultVersion(): string {
    return this.versionMap?.defaultApiVersion || 'v1';
  }

  isSunset(serviceKey: string): boolean {
    const sunsetDate = this.versionMap?.services[serviceKey]?.sunsetDate;
    if (!sunsetDate) return false;
    return new Date(sunsetDate) < new Date();
  }

  private async fetchConfig(): Promise<void> {
    const now = Date.now();
    if (this.versionMap && now - this.lastFetch < this.cacheMs) return;

    try {
      const response = await fetch(`${this.configUrl}?environment=${this.environment}`);
      if (response.ok) {
        const json = await response.json();
        this.versionMap = json.data;
        this.lastFetch = now;
      }
    } catch {
      // Silently fail — use cached or fallback
    }
  }
}
