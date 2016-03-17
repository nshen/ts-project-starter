export class ModuleA {

    protected _name: string;
    constructor(name: string = "World") {
        // console.log(`Hello ${name}!`);
        this._name = name;
    };

    toString(): string {
        return `Hello ${this._name}!`;
    }
}