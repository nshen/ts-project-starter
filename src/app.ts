import { ModuleA } from './ModuleA';

console.log(new ModuleA().toString());
console.log(new ModuleA("Nshen").toString());
window.onload = () => {

    document.getElementById("hi").textContent += new ModuleA("Nshen").toString();
};