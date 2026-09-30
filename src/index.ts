/**
 * string, number, boolean, array, tuple, void / never, type, any / unknown
 */

const str: string = "Hello Devs!"
console.log(str);

const num: number = 123
console.log(num);

const bool: boolean = true
console.log(bool);

const arr: Array<number> = [1, 2, 3, 4, 5] //1st Method to make an array in typescript
console.log(arr);
//Array<number> means array of numbers only, you can change it whatever you want ex: Array<string>

const arr2: number[] = [6, 7, 8, 9, 10] //2nd Method to make an array in typescript
console.log(arr2);
//number[] means array of numbers only, you can change it whatever you want ex: string[]

const tuple: [number, string, number] = [1, "Hello", 3]
console.log(tuple);
//Tuple is basicaly a Array but with fixed length and type, you can assign multiple length and their type
//for example: [number, boolean, string, number] = [100, true, "Hello", 200]

function greet(name: string): void{
    console.log("Hello " + name)
}
greet("Ashish!");
//we use void when function isn't returning anything

function greetAgain(name: string): string{
    return "Hello " + name
}
console.log(greetAgain("Devs!"));
// we use :string, :number, :boolean etc, if function is guarnteed returning something

// function err(name: string): never{
//     throw new Error("Something went wrong!")
// }
// err("Ashish!");
//we use never when the function never stops, like it was run in loop.

type USER = {name: string, age: number, isMale: boolean};

const user: USER = {
    name: "Prince",
    age: 18,
    isMale: true
};

function greetUser(data: USER): void{
    console.log("Hello " + data.name + " Your age is " + data.age);
}
greetUser(user);
//type is used to pre-define the value of any function or object

let anything: any;
anything = "Hello Typescript"
console.log(anything.toUpperCase());
// using "any" you can store anything inside the variable 

// let anything2: any;
// anything2 = 55
// console.log(anything2.toUpperCase());
// but it can create bugs such as you can see on line number 66 we're using toUpperCase() method on number value

let unknownType: unknown;
unknownType = "Hello Typescript from unknown type";
if(typeof unknownType === "string")
    console.log(unknownType.toUpperCase());
// "unknown" solves the problem of "any" because it will ask for a verification before running the code, like we used 
// if statement on line number 71, if variable unknownType is only string then execute the console.log else nothing.



