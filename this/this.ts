// just a few loops inside objects to show the context of "this"
// when using an arrow function "this" is the same as where it was defined,
// but you can have multiple nested arrow functions and "this" will still point to the object where the first arrow function was defined
// this inside of an arrow function refers to whatever the context was when it was being defined
// this is lexically scoped so wherever it is defined matters
const video = {
  title: "one",
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach(element => {
      console.log(this.title + element);
    });
  },
  showTags2: function () {
    this.tags.forEach(element => {
      console.log(this.title + element);
    });
  }
};

video.showTags(); // one1, one2, one3
video.showTags2(); // one1, one2, one3

/////////////////////////////////////////////////////////////////////////////////////
console.log("____________________");

const videoTwo = {
  title: "two",
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title + tag); //two1, two2, two3
    }, this); // passing this means we will be in the execution context of the showTags method, this is pointing to.  [Can't do this with all functions in JS, not preferred method]
  }
};

videoTwo.showTags();

/////////////////////////////////////////////////////////////////////////////////////
console.log("____________________");


const videoThree = {
  title: "three",
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title + tag); // three1, three2, three3
    });
  }
};

videoThree.showTags();

/////////////////////////////////////////////////////////////////////////////////////
console.log("____________________");

const videoFour = {
  title: "four",
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach(tag => {
      function log() {
        // console.log(this); // 'this' is targeting the window/global scope
        console.log(this.title + tag); // NaN, NaN, NaN, because it's trying to add 2 things that don't exist AKA undefined + undefined
      }

      log();
    });
  }
};

videoFour.showTags();

/////////////////////////////////////////////////////////////////////////////////////
console.log("____________________");

// uses an arrow function to use the scope of "this" being passed into it,
// since the execution context of "this" is also an arrow function, the scope is the same as that of showTags
// basically, we skip over the arrow function "this" execution context and use that of showTags, which is inside videoFive, and therefore "this" is videoFive even 2 functions deep
const videoFive = {
  title: "five",
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach(tag => {
      const log = () => {
        console.log(this.title + tag); // five1, five2, five3,
      };
      log();
    });
  }
};

videoFive.showTags();

/////////////////////////////////////////////////////////////////////////////////////
console.log("____________________");

// here we don't define the arrow function inside an object so it will just be running the function that is put under
// the key of showTags, so basically we are just running a function in the global scope that looks for this.tags, which doesn't exist

const videoSix = {
  title: "six",
  tags: [1, 2, 3],
  showTags: () => console.log(this.tags),
  showMoreTags() {
    return () => console.log(this.tags);
  }
};

videoSix.showTags(); // running console.log(this.tags) in global scope //  window object

// assigning an arrow function that is lexically scoped inside videoSix to the constant moreTags

const moreTags = videoSix.showMoreTags();

// calling the function that is lexically scoped to videoSix but is also an arrow function, because we
// assign the result of calling showMoreTags() to moreTags
moreTags(); // [1,2,3]