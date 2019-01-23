function addition(value: string) {
    console.log("Value is: " + value);
}
let firstVal: number = 42;
let secondVal: number = 1;
let sumOfVals: string = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);

let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
let list: number[] = [1, 2, 3];
console.log("isDone = " + isDone);
console.log("decimal = " + decimal);
console.log("color = " + color);
console.log("notSure = " + notSure);
console.log("Array list = " ,list);

function strLen(value:string):number{
    let num:number = value.length;
    return num;
}
console.log("String length with spaces is: "+strLen("test 1"));

function strLenNoSpaces(value:string):number{
    let num:number = value.replace(/\s+/, "").length;
    return num;
}
console.log("String length with no spaces included: "+strLenNoSpaces("test 1"));

function strLenBoth(value: string, spaces?: boolean): number{
    let num: number;
    if(spaces)
    {
    num = value.replace(/\s+/, "").length;
    }
    else
    {
    num = value.length; 
    }
    return num;
}
console.log("Function combined: String length with spaces is:"+strLenBoth("test 1",false));
console.log("Function combined: String length with no spaces included: "+strLenBoth("test 1", true));
console.log("Function combined: String length with spaces is, not setting spaces parameter so will default to false: "+strLenBoth("test 1"));
