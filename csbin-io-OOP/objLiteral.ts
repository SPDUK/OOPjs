// http://csbin.io/oop   Working with object literals: challenge 1

function makePerson(name, age) {
  // just return and object with the name and age
  return {name, age};
}

// doesn't use the keyword new so no empty object named this is created for us
const vicky = makePerson("Vicky", 24);


console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24