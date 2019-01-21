import { ClassA, FuncB } from '../src/ModuleA';

test('ClassA.toString()', () => {
    let a = new ClassA('World');
    expect(a.toString()).toBe('Hello World!');
})

test('FuncB should return FuncB...', () => {
    expect(FuncB()).toBe('FuncB....');
})

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3);
});