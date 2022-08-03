"use strict";
// let url: string = "dadas";
// let randomNum: number = 30;
// let bool: boolean = false;
// let randomObject: any = {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
exports.Person = Person;
