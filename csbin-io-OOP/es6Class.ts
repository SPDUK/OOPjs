/****************************************************************
 USING ES6 CLASSES
 ****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {

  constructor() {
    // add code here


  }

  // add code here
  greet() {
    console.log("hello");
  }
}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
george.greet(); // -> Logs 'hello'


/*** CHALLENGE 2 of 3 ***/
class DeveloperClass {
  // only used for typescript
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello World, my name is ${this.name}`);
  }
}


// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass("Thai", 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'



