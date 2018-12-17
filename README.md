Just some basic notes for OOP stuff, testing out typescript a little bit plus it compiles to es5 code so you can see how things are handled in es5 JS

Read .ts files for ES6, .js files for ES5
___

folders:
- class: the keyword 'class' and what it does
- new: the keyword 'new' when used to create a class
- this: keyword 'this'
- prototypeChain: things to do with the prototype chain, explains why a method can be used on an object even if that object does not have that method directly 


___
TL;DR:
\_\_proto\_\_ goes onto an object returned from a class

prototype is on the class 

___
why does `typeof String` return "function"?:
(also the same with Object, Array etc)


Because String is a function object, not just a normal object. This is so it can hold all of the methods for use on only strings in javascript.  If you `console.log(String.prototype)` a list of all string methods will show up, but 
you can even add to this. 

Add something such as `String.protoype.log = console.log`
now you can call console.log as a method on any string. `"asdf".log("hello")` will log "hello" to the console.

And since String begins with a capital letter we can assume you can also use the keyword `new` on it, which you can. eg `const hw = new String("hello, world")` will return an object with 11 keys, from 0 to 11 and a length of 11. `{"Hello, world", length: 11}` you can then call `hw[0]` and see "h" or `hw.length` to return 11.

To you can safely assume any string in JS is just part of the String "class", it has access to all methods inside String, but in reality every time you look up a method on a string it will look for the method on that string and not find it, then look up the `__proto__` on that string, and find every method for String there. All of these methods actually belong in String.prototype.


