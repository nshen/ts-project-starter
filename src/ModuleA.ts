export class ClassA {

    // protected _name: string;
    protected n: string = "";

    constructor(name: string = "World") {
        // this._name = name;
        this.n = name;
    };

    public toString(): string {
        return `Hello ${this.n}!`;
    }
}

export function FuncA() {
    console.log('FuncA...');
}

export function FuncB() {
    console.log('FuncB...');
}