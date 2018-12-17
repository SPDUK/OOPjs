// http://csbin.io/oop

/****************************************************************
 USING OBJECT.CREATE
 ****************************************************************/

/*** CHALLENGE 1 of 3 ***/

const personStore = {
  // add code here
  greet() {
    console.log("hello");
  },
  introduce() {
    console.log(`Hi my name is ${this.name}`);
  }
};

personStore.greet(); // -> Logs 'hello'


/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;

}

const sandra = personFromPersonStore("Sandra", 26);


console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'


/*** CHALLENGE 3 of 3 ***/
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

