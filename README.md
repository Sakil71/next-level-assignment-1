# Assignment-1

## Interview Questions - Blog Task

## 1. What are some differences between interfaces and types in TypeScript?

## Interface

An interface in TypeScript serves as a contract that defines the structure of an object. Specifying the methods they should have without providing implementations. It is a way to establish a set of behaviors that different classes can adopt promoting loose coupling and code reuse.

- Use for non-primitive data like - object, array
- Interface can extend interfaces & types
- Interface supports declaration merging
- Primitive aliasing not allowed
- Use interface when defining the shape of objects or classes.
- Make an interface use 'interface' keyword

Example :

```
interface User {
id : number;
name : string;
}

const student : User = {
id : 101,
name : 'Shakil Ahamed'
}
```

**Extends interface**

```
interface teacher extends User{
designition : string;
}
```

**Functional interface**

```
interface Sum {
(number1 : number, number2 : number) : number;
}
```

**Optional and readonly**

```
interface BankAccount {
readonly id : number;
age? : number;
protected balance : number;
private savingsBalance : number;
}
```

## Type

Types in TypeScript serve as a way to describe the shape and structure of data, ensuring type safety and providing enhanced tooling support. They act as labels that define the properties and methods that a value possesses.

- type can extend types & interfaces
- type cannot be merged
- primitive aliasing allowed
- Use type when defining the shape of primitive or non-primitive data.\
- Make an type use 'type' keyword
- type gives a powerful and flexible ways to define and compose custom types.

Example :

**Object Shapes**

```
type User = {
id : number;
name : string;
}
```

**Union type**

```
type Status = 'success' | 'error' | 'loading';
```

**Intersection type**

```
type Admin = {
role: string
}
type UserAdmin = User & Admin;
```

**Function tuype**

```
type Sum = (number1: number, number2 : number) => number;
```

**Tuple types**

```
type Area = [height, width];
```

## 2. How does TypeScript help in improving code quality and project maintainability?

TypeScript improves code quality and project maintainability in several powerful ways, especially for large and growing codebases.

**TypeScript prefers to**

- Static typing
- Enhanced readability
- Early error detection
- Refactoring and scalability
- Tooling support
- Code navigation and debugging
- Scalable codebases
- Enforcing best practices
- Consistent code and preventing inconsistent practices

#### Static typing

- Type safety :
  TypeScript enforces type checks at compile time ensuring that variables are used consistently according to their type, which helps catch errors early such as passing a string where a number is expected.

- Avoid common errors :
  Common mistakes like undefined or null errors can be avoided by explicitly specifying types and their structures.

- Type Inference :
  TypeScript can infer types when not explicitly declared, reducing verbosity while maintaining safety.

**Example :**

```
let age : number;
age = 'Hello Next Level Developer"; ---- not alllow
age = 5; ---- allow
```

### Enhanced readability

- Clearer Code:
  Types help describe what each part of the code is doing. This is particularly useful for team collaboration, where new developers can understand the expected data structures and behavior without having to dive deeply into the implementation.

  **Example**

  ```
  const calculateArea = (radius : number) : number =>{
  return Math.PI * radius * radius;
  }
  ```

  ### Early error detection

  - Compilation errors:
    TypeScript compiles to JavaScript but provides an additional layer of error checking. Instead of discovering bugs during runtime, they are caught early in the development cycle.

  - Tooling integration :
    IDEs provide real-time feedback (auto-completion, suggestions, and error highlighting) based on the types, reducing bugs significantly.

  ### Refactoring and scalability

  - Easy refactoring:
    TypeScript helps ensure that renaming variables, functions, or properties does not introduce errors throughout the codebase.

- Interfaces and Types:
  Defining interfaces or types allows developers to create well-structured APIs within the application, ensuring consistency across different parts of the app and improving communication between teams.

**Example**

```
interface Car {
make : string;
year : number;
}

const carDetails = (car : Car) : string =>{
    consol.log(`The car makeed by : ${make} in ${year} `);
}
```

### Enforcing Best Practices

- Strict Mode :
  TypeScript can be configured with a strict mode, enforcing rigorous checks, which encourages developers to follow best practices, write safer code, and avoid common pitfalls like implicit any types.

  ```
  let x : any;
  x = "Hello Developer"  ---- in strict mode, this will cause an error
  ```
