export enum ServiceKind {
    // service shared through the entire application
    Singleton = "singleton",
    // service shared through the underlying tree of components
    Scoped = "scoped"
}

export interface IServiceCollection {
    getService<T>(type: new() => T, serviceKind?: ServiceKind): T | null;
    getRequiredService<T>(type: new() => T, serviceKind?: ServiceKind): T;

    addService<T>(type: new() => T, serviceKind: ServiceKind): void;
    removeService<T>(type: new() => T, serviceKind?: ServiceKind): void;
    exists<T>(type: new() => T, serviceKind?: ServiceKind): void;
}