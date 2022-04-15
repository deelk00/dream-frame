import { ServiceCollection } from "./dependency-injection/service-collection";
import { ServiceKind } from "./dependency-injection/service-collection.interface";
import { A } from "./services/a";
import { B } from "./services/b";

const injector = new ServiceCollection();

injector.addService(A, ServiceKind.Singleton);
injector.addService(B, ServiceKind.Singleton);