//interface and classes

interface Person{
    name:string;
    age:number;
    greet():string;//means it returns a string
}

//object
const personObject: Person = {
    name:"kamalesh",
    age:22,
    greet(){
        return `hello my name is ${this.name}`
    }
};


class PersonClass{
    //decalring properties
    public job:string; // can be accessed from anywhere
    protected age:number; // can be accessed from subclasses and within the classes
    //using constructor to receiving arguments passed as values
    constructor(job:string,age:number){
        this.job = job;//this keyword is used to differentiate the received variable and storing variable
        this.age = age;//this keyword is used to differentiate the received variable and storing variable
    }


    greet():string{
        return `im a ${this.job} and my age is ${this.age}`;
    }
}

const person1 = new PersonClass("software engineer",22);
console.log(personObject.greet());
console.log(person1.greet());


//inheritance and access modifiers

class Animal{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    speak():string{
        return `${this.name} speaks`
    }
}

class dog extends Animal
{
    breed:string;

    constructor(name:string,breed:string){
        super(name)// this super keyword will access the name in the parent class
        this.breed = breed;
    }

    speak(){//when called this method will override the method of the parent class since both has same name
        super.speak();
        return `${this.breed} ${this.name} barks`;
    }
}

const Dog = new dog("spark","great dane");

console.log(Dog.speak());


//generics in typescript


//function generics
function IdentityFunction <T>(value:T):T{
  return value;
}

let result1 = IdentityFunction(53);
let result2 = IdentityFunction("kamalesh");

console.log(result1);
console.log(result2);


//class generics 

class IdentityClass<T> {
    private value:T;
    constructor(value:T){
        this.value = value;
    }

    result():T{
        return this.value;
    }
}

const identityClass1 = new IdentityClass("string");
console.log(identityClass1);
const identityClass2 = new IdentityClass(69);
console.log(identityClass2);


//interface generics
interface IdentityInterface<T> {
    value :T;
}

let identityObject1 : IdentityInterface<number> = {value :42};
let identityObject2 : IdentityInterface<string> = {value :"kamalesh"}

console.log(identityObject1);

console.log(identityObject2);