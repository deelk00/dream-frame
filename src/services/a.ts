import { B } from "./b";

export class A {
    constructor(private b: B) {
        console.log(b);
        
    }
}