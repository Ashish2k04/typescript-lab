/**
 * string, number, boolean, array, tuple, void / never, type
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

function greetUser(data: USER){
    console.log("Hello " + data.name + " Your age is " + data.age);
}
greetUser(user);
//type is used to pre-define the value of any function or object
