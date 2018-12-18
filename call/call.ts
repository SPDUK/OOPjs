const objA = {
  num: 3,
  increment() {
    this.num++;
  }
};

const objB = {
  num: 10
};

objA.increment();
console.log(objA); // objA.num = 4

// when using call we want to pass this in, usually we would use new to automatically create this, but instead we supply it ourselves,
// so this refers to objB, not objA

// calls objA.increment function just the same as above, but the context of this is objB
objA.increment.call(objB);
// works the same using objA.increment.apply(objB) also

