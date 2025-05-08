function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper == undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
// console.log(formatString("Next Level Dev", true));

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItem = items.filter((item) => item?.rating >= 4);
  return filteredItem;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Marahaba!! javaSxcript E Maro Thaba", rating: 4.5 },
];

// console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const arr of arrays) {
    result.push(...arr);
  }
  return result;
}

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5, 6], [7, 8, 9]));

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model : ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2000, "corrolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value.length;
  }
}

const result1 = processValue('Next');
// console.log(result1);

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products) {
    let mostExpensiveProduct = products[0];
    for (const product of products) {
      if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
      }
    }
    return mostExpensiveProduct;
  }
  return null;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 15 },
  { name: "Bag", price: 50 },
  { name: "Mac Book", price: 100 },
];

// console.log(getMostExpensiveProduct(products));

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";

    default:
      return "Weekday";
  }
}

getDayType(Day.Sunday);
// console.log(getDayType(Day.Thursday));

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number is not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

// squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);
