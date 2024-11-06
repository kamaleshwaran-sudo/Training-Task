let value: string = "50";

let arr :string[] = ["10","20","30","50"];

for(let i in arr){
 if(arr[i] == "10"){
   arr[i] = value;
 }
}

console.log(arr);