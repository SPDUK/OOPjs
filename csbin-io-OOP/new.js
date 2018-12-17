//http://csbin.io/oop
/****************************************************************
 USING THE 'NEW' KEYWORD
 ****************************************************************/
/*** CHALLENGE 1 of 3 ***/
function PersonConstructor() {
    this.greet = function () {
        console.log("hello");
    };
    this.introduce = function () {
        console.log(`Hi, my name is ${this.name}`);
    };
}
const simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'
/*** CHALLENGE 2 of 3 ***/
function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
}
const mike = personFromConstructor("Mike", 30);
// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'
/*** CHALLENGE 3 of 3 ***/
mike.introduce(); // -> Logs 'Hi, my name is Mike'
