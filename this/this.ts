// just a few loops inside objects to show the context of "this"
// when using an arrow function "this" is the same as where it was defined,
// but you can have multiple nested arrow functions and "this" will still point to the object where the first arrow function was defined

const video = {
  title: 'one',
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach(element => {
      console.log(this.title + element); // one1, one2, one3
    });
  }
};

video.showTags();

/////////////////////////////////////////////////////////////////////////////////////

const videoTwo = {
  title: 'two',
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title + tag); //two1, two2, two3
    }, this); // passing this means we will be in the execution context of the showTags method, this is pointing to.  [Can't do this with all functions in JS, not preferred method]
  }
};

videoTwo.showTags();

/////////////////////////////////////////////////////////////////////////////////////

const videoThree = {
  title: 'three',
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title + tag); // three1, three2, three3
    });
  }
};

videoThree.showTags();

/////////////////////////////////////////////////////////////////////////////////////

const videoFour = {
  title: 'four',
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach(tag => {
      function log() {
        // console.log(this); // 'this' is targetting the window/global scope
        console.log(this.title + tag); // NaN, NaN, NaN, because it's trying to add 2 things that don't exist AKA undefined + undefined
      }
      log();
    });
  }
};

videoFour.showTags();

/////////////////////////////////////////////////////////////////////////////////////

// uses an arrow function to use the scope of "this" being passed into it,
// since the execution context of "this" is also an arrow function, the scope is the same as that of showTags
// basically, we skip over the arrow function "this" execution context and use that of showTags, which is inside videoFive, and therefore "this" is videoFive even 2 functions deep
const videoFive = {
  title: 'five',
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
