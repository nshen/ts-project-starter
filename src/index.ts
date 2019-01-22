import { ClassA, FuncB } from './ModuleA';

export default function main(): string {
    let a = new ClassA('World');
    console.log(a.toString());
    console.log(FuncB());
    return a.toString();
}

export * from './ModuleA';