// keyword 'this' is an implicit parameter, like how you would supply n to the function (n) => n * n
// when using 'this' inside an object it creates the 'this' context, and will refer to that object
// inside a regular function it will refer to the global object, unless using es6 arrow functions then it will bind this to the object it's being used in


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function userCreator(name: string, score: number) {
  // Object.create always returns an empty object
  // when using Object.create(userFunctionStore) we create  a reference to  userFunction store (in __proto__)
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("You're logged in");
  }
};

const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);

// when looking for user1.increment it will not be on user1, but inside __proto__ property, kind of similar to how closure remembers the scope around it
user1.increment();
console.log(user1, user2); // { name: 'Phil', score: 5 } { name: 'Julia', score: 5 }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// showing that functions are more than just functions but are also objects with prototype etc
const multiplyBy2 = num => {
  return num * 2;
};
multiplyBy2.stored = 5;
console.log(multiplyBy2.stored); // 5
console.log(multiplyBy2.prototype); // {}

console.log(multiplyBy2(3)); // 6


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Showing that functions have prototype, and that __proto__  'links' to prototype
// using a capital letter in the name means it needs the new keyword to work properly, (or it is a class, basically)
function UserCreator(name: string, score: number) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  this.score++;
};
UserCreator.prototype.login = function () {
  console.log("login");
};

// using new mutates the execution context when calling UserCreator()
// creates an empty object and assigns it to this ---- this: {}   <- 'this' is assigned to an empty object inside this __proto__ is created

// new automatically returns the new object into user3
/* 
user3 = {
  this: {
    name: "Eva",
    score: 9,
    __proto__: UserCreator.prototype.increment
  }
}
*/

const user3 = new UserCreator("Eva", 9);
// user3.increment looks for user3.increment, and doesn't find it on user3, so then it looks inside __proto__, which contains increment
// __proto__ links to UserCreator.prototype.increment and calls it
user3.increment();
console.log(user3); // UserCreator { name: 'Eva', score: 10 }
console.log(user3.__proto__); //  UserCreator { increment: [Function], login: [Function] }
