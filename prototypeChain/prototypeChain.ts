// not everything in javascript is an object, but things like strings, functions etc are "JS-objects" that are a bit different and have hidden(?) methods such as __proto__,
// but aren't the same as actually being an object, eg a string is immutable and a string would be considered a "String object" not a normal object


// when starting the javascript runtime it automatically adds a function/object with the label Object
// every object in javascript has a __proto__ key, and some others, if you console.log({}) in chrome devtools you can look through them
// so no matter how deep you go or where an object is, you can always look for __proto__ or hasOwnProperty etc.

// because other things such as strings, arrays are also just objects and you can see their __proto__ inside the chrome devtools,
// eg  console.log([]) has a __proto__ that shows the methods available to all arrays, with another __proto__ inside that shows the __proto__ of an object.
// const str = "hi";  console.log(str.__proto__) will display all methods of a string, again it has another __proto__ inside it


// FUNCTIONS HAVE .prototype and __proto__, OBJECTS ONLY HAVE __proto__

// Function.prototype has things such as toString(), bind, length etc.
// (similar to how you would look for methods in a class, because a class is just a function after all)
// You would only see the prototype if you ever used the 'new' Keyword before a function.
// this prototype also has a __proto__ inside it, things like toString are inside

const obj = {
  num: 3
};

obj.num; // 3
// obj.hasOwnProperty will lookup obj in global memory. it will find obj, but not hasOwnProperty on the obj.
// after not finding it on obj it will look into __proto__ on to obj, then when called it will check that obj has the property num
obj.hasOwnProperty("num");
console.log(Object.prototype);


function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.toString();
// looks for multiplyBy2 in global memory, then because we are using dot notation it will be looking at the "object" part of the function,
// it will look inside the multiplyBy2.__proto__, which is linked to Function.prototype, inside Function.prototype there will be toString.

// Function.prototype is for ALL functions.

// lookup on multiplyBy2 using dot notation -> can't find it on the object -> look in __proto__ on multiplyBy2, which links to Function.prototype
// Function.prototype has the method, we use it.


multiplyBy2.hasOwnProperty("score");
//  lookup on multiplyBy2 using dot notation -> can't find it on the object -> look in __proto__ on multiplyBy2, which links to Function.prototype -> Function.prototype has a __proto__,
//  that __proto__ of Function.prototype links to Object.prototype, where we find anything that works on any object.


// multiplyBy2.increase();
// this would do the same as looking for hasOwnProperty, looking all the way up the chain until we reach the __proto__ of Object, which is null. and it fails because it does not exist.