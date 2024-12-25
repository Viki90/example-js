// ways to create objects in JavaScript
// Object literal syntax
let object = {
  name: "Viki",
  age: 34,
};

console.log("object:", object);

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
console.log("car:", car);
// The car object appears empty when logged because the properties defined in carProps are non-enumerable by //default. This means they do not show up in a console.log or a for...in loop.
//To see the properties, you can access them directly or use Object.getOwnPropertyDescriptors to inspect them.
console.log(Object.getOwnPropertyDescriptors(car));

// Function constructor
function Person(name) {
  this.name = name;
  this.age = 21;
}
let object3 = new Person("Viki");
console.log("object3:", object3);

// Function constructor with prototype:
function Person1() {}
Person.prototype.name = "Viki";
let object4 = new Person1();
console.log("object4:", object4);

// Object's assign method
const orgObject = { company: "XYZ Corp" };
const carObject = { name: "Toyota" };
const staff = Object.assign({}, orgObject, carObject);
console.log("staff", staff);

// ES6 Class syntax
class Person2 {
  constructor(name) {
    this.name = name;
  }
}

let object5 = new Person2("Viki");
console.log("object5:", object5);

// Singleton pattern
let object6 = new (function () {
  this.name = "Viki";
})();
console.log("object6:", object6);
