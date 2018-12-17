// when starting the javascript runtime it automatically adds a function/object with the label Object:
var obj = {
    num: 3
};
obj.num; // 3
obj.hasOwnProperty("num"); //?we find this on __proto__ on the obj, it is a function inside __proto__
console.log(Object.prototype);
