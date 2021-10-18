let addThreeNumbers = (x: number, y: number, z?: number): number => {
  if((z === undefined)) {
    return x + y;
  } else {
    return x + y + z;
  }
};

console.log(addThreeNumbers(10, 20))

let subtractThreeNumbers = (x: number, y: number, z: number = 100): number => x - y - z;

console.log(subtractThreeNumbers(100, 123, 23))
