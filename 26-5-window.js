var name = "Kuddus";
function add(num1, num2) {
    // make result is a global variable. ati kora uchit na
    window.result = num1 + num2;
    console.log("name inside ",name);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
console.log("name outside", name);
var sum = add(13, 21);
console.log(sum);
console.log("result outside",result);