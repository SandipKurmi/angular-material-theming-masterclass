// this is a declaration file for the library
// it is a good practice to keep the declaration file in the same folder as the library
// # ambient declaration typescript
// Ambient declarations in TypeScript are used to provide type information for code that is not written in TypeScript. This can be useful for using third-party libraries that are written in JavaScript, or for providing type information for code that is generated at runtime.
// To create an ambient declaration, you use the declare keyword. For example, the following code declares a variable called myVariable and a function called myFunction:
declare module '*jslib' {
  export class JSlib {
    constructor();
    callMethod(): void;
  }
  export const JS_LIB_STRING: string;
}
