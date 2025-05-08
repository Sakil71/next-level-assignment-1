# Assignment-1

## Interview Questions - Blog Task

### 1. What are some differences between interfaces and types in TypeScript?

**## Interface**

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

**## Type**

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
