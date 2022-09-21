function add(num1: number, num2: number): number {
  return num1 + num2;
}

function result(result: number): void {
  console.log(result);
}

result(add(21, 25));

// type Functions

let func: Function;
func = add;
func = result;

console.log(func(21, 25));

let func1: (n1: number, n2: number) => number;

func1 = add;
// func1 = result

console.log(func(21, 25));

// callbacks

function result1(result: number, fun: (num1: number) => void): void {
  console.log(result);
  const num = result;
  fun(result);
}

result1(25, (result) => {
  console.log(result);
});

export {};
