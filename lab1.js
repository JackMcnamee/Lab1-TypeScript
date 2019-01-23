function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
var isDone = false;
var decimal = 6;
var color = "blue";
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var list = [1, 2, 3];
console.log("isDone = " + isDone);
console.log("decimal = " + decimal);
console.log("color = " + color);
console.log("notSure = " + notSure);
console.log("Array list = ", list);
function strLen(value) {
    var num = value.length;
    return num;
}
console.log("String length with spaces is: " + strLen("test 1"));
function strLenNoSpaces(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
console.log("String length with no spaces included: " + strLenNoSpaces("test 1"));
function strLenBoth(value, spaces) {
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log("Function combined: String length with spaces is:" + strLenBoth("test 1", false));
console.log("Function combined: String length with no spaces included: " + strLenBoth("test 1", true));
console.log("Function combined: String length with spaces is, not setting spaces parameter so will default to false: " + strLenBoth("test 1"));
