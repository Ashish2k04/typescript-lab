# TypeScript Setup Guide

This README explains how to set up and run a basic TypeScript project in
your code editor.

## 1. Initialize the Node.js project

Open your terminal in the project folder and run:

``` bash
npm init -y
```

## 2. Install TypeScript

Install TypeScript as a development dependency:

``` bash
npm i -D typescript
```

## 3. Create `tsconfig.json`

Run:

``` bash
npx tsc --init
```

This creates the `tsconfig.json` file, which contains TypeScript
compiler configuration.

## 4. Create the source folder

Create a `src` folder and inside it create an `index.ts` file:

``` text
typescript-lab/
├── src/
│   └── index.ts
├── package.json
└── tsconfig.json
```

You can name the TypeScript file whatever you want.

## 5. Configure `tsconfig.json`

Inside `tsconfig.json`, find `compilerOptions` and uncomment these two
options:

``` json
"rootDir": "./src",
"outDir": "./dist",
```

-   `rootDir` → tells TypeScript where your source `.ts` files are.
-   `outDir` → tells TypeScript where to put the compiled JavaScript
    files.

Your project will look like:

``` text
typescript-lab/
├── src/
│   └── index.ts
├── dist/
├── package.json
└── tsconfig.json
```

## 6. Write your TypeScript code

Inside `src/index.ts`:

``` ts
const msg: string = "Hello Devs!";

console.log(msg);
```

Here, `: string` tells TypeScript that `msg` must contain a string.

## 7. Compile and run the code

Run:

``` bash
npx tsc && node dist/index.js
```

`npx tsc` compiles the TypeScript code into JavaScript inside the `dist`
folder.

Then:

``` bash
node dist/index.js
```

runs the compiled JavaScript file.

You should see:

``` text
Hello Devs!
```

in your terminal.

## 8. Optional: Create an easier run command

Instead of typing:

``` bash
npx tsc && node dist/index.js
```

every time, add a script inside `package.json`.

Find:

``` json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

and add a `dev` script:

``` json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "npx tsc && node dist/index.js"
}
```

Now you only need to run:

``` bash
npm run dev
```

and your TypeScript code will be compiled and executed.

## Final Project Structure

After setup, your project can look like this:

``` text
typescript-lab/
├── node_modules/
├── dist/
│   └── index.js
├── src/
│   └── index.ts
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

### Quick Setup

``` bash
npm init -y
npm i -D typescript
npx tsc --init
```

Then create:

``` text
src/index.ts
```

Configure:

``` json
"rootDir": "./src",
"outDir": "./dist"
```

Write your TypeScript code and run:

``` bash
npx tsc && node dist/index.js
```

Or, after adding the `dev` script:

``` bash
npm run dev
```
