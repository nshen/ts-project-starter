import { ClassA, FuncB } from './ModuleA';

let a = new ClassA('World');
console.log(a.toString());
// FuncA should be shaked
FuncB();
