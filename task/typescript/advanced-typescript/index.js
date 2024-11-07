//interface and classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//object
var personObject = {
    name: "kamalesh",
    age: 22,
    greet: function () {
        return "hello my name is ".concat(this.name);
    }
};
var PersonClass = /** @class */ (function () {
    //using constructor to receiving arguments passed as values
    function PersonClass(job, age) {
        this.job = job; //this keyword is used to differentiate the received variable and storing variable
        this.age = age; //this keyword is used to differentiate the received variable and storing variable
    }
    PersonClass.prototype.greet = function () {
        return "im a ".concat(this.job, " and my age is ").concat(this.age);
    };
    return PersonClass;
}());
var person1 = new PersonClass("software engineer", 22);
console.log(personObject.greet());
console.log(person1.greet());
//inheritance and access modifiers
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        return "".concat(this.name, " speaks");
    };
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name, breed) {
        var _this = _super.call(this, name) || this; // this super keyword will access the name in the parent class
        _this.breed = breed;
        return _this;
    }
    dog.prototype.speak = function () {
        _super.prototype.speak.call(this);
        return "".concat(this.breed, " ").concat(this.name, " barks");
    };
    return dog;
}(Animal));
var Dog = new dog("spark", "great dane");
console.log(Dog.speak());
