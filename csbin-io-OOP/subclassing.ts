/****************************************************************
 EXTENSION: SUBCLASSING
 ****************************************************************/


const userFunctionStore = {
  sayType: function () {
    console.log("I am a " + this.type);
  }
};

function userFactory(name, score) {
  // using Object.create puts anything passed in into the __proto__ of whatever it is used on, so here we are storing a __proto__ inside the PaidUserCreator.prototype,
// making it a subclass of UserCreator, and it will have access to everything UserCreator does down the prototype chain
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

const adminFunctionStore = Object.create(userFactory);

function adminFactory(name, score) {
  // Object.assign combines one or more objects and turns them into one object, so we use the userFactory, then add the admin functions and finally add type:admin
  return Object.assign(
    userFactory(name, score),
    adminFunctionStore,
    {type: "Admin"}
  );

}

/* Put code here for a method called sharePublicMessage*/
adminFunctionStore.sharePublicMessage = function () {
  console.log("Welcome Users!");
};
var adminFromFactory = adminFactory("Eva", 5);
// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType(); // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"
