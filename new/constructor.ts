class UserCreator {
  name: string;
  score: number;

  // constructor is the function part of the function/object combo where we would usually place things onto the object manually
  // we would previously create an object from the store which would contain sayName and increment inside the prototype using Object.create
  // then we would add in the name and score, and return that as one large object
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  // functions go to prototype
  sayName() {
    console.log(`I am ${this.name}`);
  }

  increment() {
    this.score++;
  }
}

// user1 gets the functions from the UserCreator.prototype placed into their __proto__, anything inside the constructor is actually in the object
const user1 = new UserCreator("Phil", 3);
const user2 = new UserCreator("Tim", 4);

user1.sayName();
user2.sayName();

// this object will be linked to any paidUser created by PaidUserCreator  (stored inside the paidUser's __proto__ )
class PaidUserCreator extends UserCreator {
  paidName: string;
  paidScore: number;
  accountBalance: number;


  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);

    this.paidName = paidName;
    this.paidScore = paidScore;
    this.accountBalance = accountBalance;
  }

  increaseBalance() {
    this.accountBalance++;
  }
}


const paidUser1 = new PaidUserCreator("Alyssa", 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();


// so typescript doesn't complain about global variables
export = {}