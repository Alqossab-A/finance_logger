let greet: Function;

greet = () => {
  console.log("hello");
};

// this will throw an error for c not being used
/*function add = (a: number, b: number, c?: number | string) {
  console.log(a + b)
}*/

const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
};

add(5, 10);

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);

