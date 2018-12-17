// a class is nothing but syntactic 'sugar' or a facade over a regular function, but using class and new together makes life a lot easier.
// a class is just a function/object combo (basically just a normal function), but javascript will take care of putting this information into the prototype object inside that function

//  the function that constructs the object is called the constructor, so instead of typing dog.prototype.name you just use the constructor instead.

// in here we put any functions that we want the returned object from calling UserCreator() to have access to
class UserCreator {
  //  this is only needed for typescript
  name: string;
  score: number;


  // when we called UserCreator("Eva", 9) below this is where that name and score are going to
  // this is basically the function part of a "function/object combo" where we initialized the class
  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }

  // these are just listed, instead of specifying SomeClass.prototype.increment we can just add them here
  // functions go into the prototype object of the class just as before
  increment() {
    this.score++;
  }

  login() {
    console.log("login");
  }
}


// when calling UserCreator we are running the constructor, not the UserCreator
const user1 = new UserCreator("Eva", 9);
// just the same as without a class, we look inside user1 and increment is not there, however it is on the prototype, so we find it there and use that
user1.increment();
console.log(user1); // { name: 'Eva', score: 10 }


// non class version of the same thing
// here we use the name and string as parameters using the function, instead of in the constructor
function UserCreatorTwo(name: string, score: number) {
  this.name = name;
  this.score = score;
}

UserCreatorTwo.prototype.increment = function () {
  this.score++;
};
UserCreatorTwo.prototype.login = function () {
  console.log("login");
};


