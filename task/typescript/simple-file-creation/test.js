var value = "50";
var arr = ["10", "20", "30", "50"];
for (var i in arr) {
    if (arr[i] == "10") {
        arr[i] = value;
    }
}
console.log(arr);
