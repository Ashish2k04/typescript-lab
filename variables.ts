// You can specify the type of a variable in TypeScript in two common ways.

/*
First... you can explicitly tell TypeScript the type of the variable,
such as number, string, or boolean.
*/

let user: string = "Ashish";
console.log(user);

/*
And in the second way... you can declare a variable just like you do in JavaScript.
TypeScript will automatically infer the type based on the value
you initially assign to the variable.
*/

let username = "Ashish";
console.log(username);

/*
So... what's the difference between TypeScript and JavaScript
when we do the same thing in both?

In TypeScript... once TypeScript knows the type of a variable,
it will not allow you to assign a value of an incompatible type.
*/

/*
For example... if a variable contains a string,
you can assign another string to it,
but you cannot assign a number, boolean, or another incompatible type.
*/

let user_2: string = "Ashish";

user_2 = "Mayank"; // ✅ Same type
// name = 20;    // ❌ Different type

/*
The same rule applies when TypeScript infers the type automatically.

Here, TypeScript sees "Ashish" and automatically infers that
the type of username is string.
*/

let username2 = "Ashish";

username2 = "Mayank"; // ✅ Same type
// username2 = 20;   // ❌ Different type

/*
So, there are two important concepts here:

1. Type Annotation → We explicitly tell TypeScript the type.
   Example: let user: string = "Ashish";

2. Type Inference → TypeScript automatically figures out the type.
   Example: let username = "Ashish";
*/
