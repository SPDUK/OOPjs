var video = {
    title: 'one',
    tags: [1, 2, 3],
    showTags: function () {
        var _this = this;
        this.tags.forEach(function (element) {
            console.log(_this.title + element); // one1, one2, one3
        });
    }
};
video.showTags();
console.log('____________________');
var videoTwo = {
    title: 'two',
    tags: [1, 2, 3],
    showTags: function () {
        this.tags.forEach(function (tag) {
            console.log(this.title + tag); //two1, two2, two3
        }, this); // passing this means we will be in the execution context of the showTavgs method, this is pointing to.  [Can't do this with all functions in JS]
    }
};
videoTwo.showTags();
console.log('____________________');
var videoThree = {
    title: 'three',
    tags: [1, 2, 3],
    showTags: function () {
        var _this = this;
        this.tags.forEach(function (tag) {
            console.log(_this.title + tag); // three1, three2, three3
        });
    }
};
videoThree.showTags();
console.log('____________________');
var videoFour = {
    title: 'four',
    tags: [1, 2, 3],
    showTags: function () {
        this.tags.forEach(function (tag) {
            function log() {
                console.log(this); // is targetting the window/global scope
                console.log(this.title + tag); // NaN, NaN, NaN, because it's trying to add 2 things that don't exist AKA undefined + undefined
            }
            log();
        });
    }
};
videoFour.showTags();
console.log('____________________');
// uses an arrow function to use the scope of "this" being passed into it,
// since the execution context of "this" is also an arrow function, the scope is the same as that of showTags
// basically, we skip over the arrow function "this" execution context and use that of showTags, which is inside videoFive, and therefore "this" is videoFive even 2 functions deep
var videoFive = {
    title: 'five',
    tags: [1, 2, 3],
    showTags: function () {
        var _this = this;
        this.tags.forEach(function (tag) {
            var log = function () {
                console.log(_this.title + tag); // five1, five2, five3,
            };
            log();
        });
    }
};
videoFive.showTags();
