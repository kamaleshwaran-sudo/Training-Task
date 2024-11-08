class animal {
    protected name :string;
    constructor(name:string){
        this.name = name;
    } 

    greet():string {
        return `${this.name} printed from the class`
    }
}

class dog extends animal {
    private value:string;
    constructor(value:string,name:string){
        super(name);
        this.value = value;
    }

    greet():string{
        return `${this.value}<- this is a -> ${this.name} from the parent`;
    }
}


const Dog = new dog("kalish","karthi");

console.log(animal);