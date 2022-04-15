import { IServiceCollection, ServiceKind } from "./service-collection.interface";

export class ServiceCollection implements IServiceCollection {
    services: { [key: string]: { [key: string]: any } } = {
        singleton: { },
        scopes: { }
    };

    getUniqueTypeName<T>(type: new() => T): string {
        return type.name;
    }

    getService(type: any, serviceKind?: ServiceKind): any | null {
        const kinds = serviceKind ? [serviceKind] : Object.values(ServiceKind);
        const typeName = this.getUniqueTypeName(type);
        for (const kind of kinds) {
            const service = this.services[kind][typeName];
            if(!service)
                continue;

            if(kind === ServiceKind.Singleton) {
                return service;
            }
            throw "scope is currently not supported";
        }

        return null;
    }
    getRequiredService(type: any, serviceKind?: ServiceKind): any {
        const service = this.getService(type, serviceKind);
        if(!service) throw `the service: ${this.getUniqueTypeName(type)} is required`;
        return service;
    }
    addService<T>(type: new () => T, serviceKind: ServiceKind): void {
        throw new Error("Method not implemented.");
    }
    removeService<T>(type: new () => T, serviceKind?: ServiceKind): void {
        throw new Error("Method not implemented.");
    }
    exists<T>(type: new () => T, serviceKind?: ServiceKind): void {
    }
}