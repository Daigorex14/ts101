let id: number = 5;
let myName: string = "Thanakit S.";
let isPublished: boolean = true;
let x:any = "Hi";

console.log("id: " + typeof(id)+ " " + id);
console.log("My Name: " + typeof(myName)+ " " + myName);
console.log("isPublished: " + typeof(isPublished)+ " " + isPublished);
console.log("X is :" + typeof(x)+" " +x);

//
let age: number = 20;
console.log(`My name is ${myName}. I am ${age} years old.`);

//Collection Types
let ids: number[]=[];
ids = [1,2,3,4,5];

let arr: any[];
arr = [1,"2",true,3.5];

let myFriends: string[];
myFriends = ["Jakrit", "Kongpop", "Wasok", "Fook"]

console.log(ids);
console.log(arr);
console.log(myFriends);

ids.forEach(i => {
    console.log (`ID : ${i}`)
});
console.log ("ฉันชื่อ Thanakit นี่คือเพื่อนของฉัน");
myFriends.forEach(i => {
    console.log (`- ${i}`)
});

let salary : number[] = [1000,2000,5000,10000];
let commission: number[]=[];
salary.forEach((s) => {
    commission.push(s*0.1);
});
console.log(commission);

let bonus: number[]=[];
salary.forEach((s) =>{
    if(s <= 1000){
        bonus.push(s*2);
    }
    else if(s <= 5000){
        bonus.push(s*1.5);
    }
    else if(s <= 10000){
        bonus.push(s*1.2);
    }
    else{
        bonus.push(s*1);
    }
});

console.log(bonus);

let prod1: [number, string, string, number];
prod1 = [1, "Chocolate", "Pack", 100];

// console.log(prod1);
prod1.forEach(p=>{
    console.log(p);
});

let products : [number, string, string, number] [];
products = [
    [1, "Strawberry", "pcs", 20],
    [2, "Apple", "pcs", 25],
    [3, "Banana", "pcs", 10],
    [4, "Kiwi", "pcs", 30],
    [5, "Orange", "pcs", 25],
];

console.log ("ฉันชื่อ Thanakit นี่คือเพื่อนของฉัน");
products.forEach(p => {
    p[3] +=5;
    console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]}`);
});

let students : [string, string, number, number, number][];

students = [
    ["1001", "Kongpop", 20,50,0],
    ["1002", "Jakrit", 18,50,0],
    ["1003", "Wasok", 21,49,0],
    ["1004", "Thanakit", 15,35,0],
    ["1005", "Chalermchai", 17,31,0],
];

students.forEach((s) =>{
    s[4] = s[2]+s[3];
    console.log(`${s[0]} : ${s[1]}, Total : ${s[4]}`);
});

enum Direction{
    Up=1,
    Down=3,
    Left=5,
    Right=7
}

enum Direction2{
    Up="UP",
    Down="Down",
    Left="Left",
    Right="Right"
}

console.log(Direction.Left);
console.log(Direction2.Right);


enum PaperSize{
    A4 = 1,
    A5 = 2,
    A6 = 3
}

enum Orientation{
    Portrait =1,
    Landscape =2
}

// setPapetSize(PaperSize.A4, Orientation.Landscape)

console.log(PaperSize)

type Student = {
    id : number,
    name: string,
    tel: string,
    line_id?: string
}

let wasok: Student = {
    id : 101,
    name : "Wasok",
    tel : "0999999999"
}

console.log(wasok.name);

let sid : number | string
sid = 101;
console.log(typeof(sid));

sid = "555";
console.log(typeof(sid));


function addNumber(x: number,y: number){
    return x + y;
}
console.log(addNumber(1,3));

function showLog(m: number | string): void{
    console.log(m);
}

showLog(123);
showLog("456");

// INTERFACE FUNC.

interface MathFunc{
    (x: number, y:number):number;
}

const addNum : MathFunc = (a,b): number => {return a+b};
const subNum : MathFunc = (x,y): number => x - y ;

console.log(addNum(5,7));
console.log(subNum(5,7));

// INTERFACE CLASSES

interface Human{
    id: number,
    name: string,
    age: number,
    tel?: string,
    move() : string,
    eat() : string
}

const student : Human = {
    id: 123,
    name: "Thanakit",
    age: 20,
    tel: "09999999999",
    move: function() : string{
        return "Running";
    },
    eat: function() : string{
        return ""
    }
}

const grandMon : Human = {
    id : 1,
    name : "Po",
    age : 20,
    tel : "09999999999",
    move: function() : string{
        return "Running";
    },
    eat: function() : string{
        return ""
    }
}

const boxer : Human = {
    id : 303,
    name : "Jojo",
    age : 18,
    move: function() :string{
        return "Return Punch"
    },
    eat: function(): string{
        return "Vegetable";
    }
}
//Thanakit S.
const pilot : Human = {
    id : 303,
    name : "JR",
    age : 18,
    move: function() :string{
        return "Return to Human"
    },
    eat: function(): string{
        return "You";
    }
}


// Class
class Driver implements Human{
    id: number;
    name: string;
    age: number;
    
    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    move(){
        return `${this.name} moves by driviing.`;
    }

    eat(){
        return `${this.name} eats rice.`;
    }
}

const d1 = new Driver(101,"Anurak",20);

console.log(d1.move());
console.log(d1.eat());


function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let n1 = [1,2,3,4]
let n2 = ["A","B","C","D"]

console.log(getArray([n1,n2]));

