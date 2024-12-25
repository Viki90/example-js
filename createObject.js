// Object literal syntax
let object = {
  name: "Viki",
  age: 34,
};

console.log(object);

// Object constructor
let object1 = new Object();

// Object's create method
let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

let car = Object.create(vehicle, carProps);
console.log(car);
// The car object appears empty when logged because the properties defined in carProps are non-enumerable by //default. This means they do not show up in a console.log or a for...in loop.
//To see the properties, you can access them directly or use Object.getOwnPropertyDescriptors to inspect them.
console.log(Object.getOwnPropertyDescriptors(car));
