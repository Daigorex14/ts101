let id = 5;
let myName = "Thanakit S.";
let isPublished = true;
let x = "Hi";
console.log("id: " + typeof (id) + " " + id);
console.log("My Name: " + typeof (myName) + " " + myName);
console.log("isPublished: " + typeof (isPublished) + " " + isPublished);
console.log("X is :" + typeof (x) + " " + x);
//
let age = 20;
console.log(`My name is ${myName}. I am ${age} years old.`);
//Collection Types
let ids = [];
ids = [1, 2, 3, 4, 5];
let arr;
arr = [1, "2", true, 3.5];
let myFriends;
myFriends = ["Jakrit", "Kongpop", "Wasok", "Fook"];
console.log(ids);
console.log(arr);
console.log(myFriends);
ids.forEach(i => {
    console.log(`ID : ${i}`);
});
console.log("ฉันชื่อ Thanakit นี่คือเพื่อนของฉัน");
myFriends.forEach(i => {
    console.log(`- ${i}`);
});
let salary = [1000, 2000, 5000, 10000];
let commission = [];
salary.forEach((s) => {
    commission.push(s * 0.1);
});
console.log(commission);
let bonus = [];
salary.forEach((s) => {
    if (s <= 1000) {
        bonus.push(s * 2);
    }
    else if (s <= 5000) {
        bonus.push(s * 1.5);
    }
    else if (s <= 10000) {
        bonus.push(s * 1.2);
    }
    else {
        bonus.push(s * 1);
    }
});
console.log(bonus);
let prod1;
prod1 = [1, "Chocolate", "Pack", 100];
// console.log(prod1);
prod1.forEach(p => {
    console.log(p);
});
let products;
products = [
    [1, "Strawberry", "pcs", 20],
    [2, "Apple", "pcs", 25],
    [3, "Banana", "pcs", 10],
    [4, "Kiwi", "pcs", 30],
    [5, "Orange", "pcs", 25],
];
console.log("ฉันชื่อ Thanakit นี่คือเพื่อนของฉัน");
products.forEach(p => {
    p[3] += 5;
    console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]}`);
});
let students;
students = [
    ["1001", "Kongpop", 20, 50, 0],
    ["1002", "Jakrit", 18, 50, 0],
    ["1003", "Wasok", 21, 49, 0],
    ["1004", "Thanakit", 15, 35, 0],
    ["1005", "Chalermchai", 17, 31, 0],
];
students.forEach((s) => {
    s[4] = s[2] + s[3];
    console.log(`${s[0]} : ${s[1]}, Total : ${s[4]}`);
});
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Left"] = 5] = "Left";
    Direction[Direction["Right"] = 7] = "Right";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction.Left);
console.log(Direction2.Right);
var PaperSize;
(function (PaperSize) {
    PaperSize[PaperSize["A4"] = 1] = "A4";
    PaperSize[PaperSize["A5"] = 2] = "A5";
    PaperSize[PaperSize["A6"] = 3] = "A6";
})(PaperSize || (PaperSize = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Portrait"] = 1] = "Portrait";
    Orientation[Orientation["Landscape"] = 2] = "Landscape";
})(Orientation || (Orientation = {}));
// setPapetSize(PaperSize.A4, Orientation.Landscape)
console.log(PaperSize);
let wasok = {
    id: 101,
    name: "Wasok",
    tel: "0999999999"
};
console.log(wasok.name);
let sid;
sid = 101;
console.log(typeof (sid));
sid = "555";
console.log(typeof (sid));
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 3));
function showLog(m) {
    console.log(m);
}
showLog(123);
showLog("456");
const addNum = (a, b) => { return a + b; };
const subNum = (x, y) => x - y;
console.log(addNum(5, 7));
console.log(subNum(5, 7));
const student = {
    id: 123,
    name: "Thanakit",
    age: 20,
    tel: "09999999999",
    move: function () {
        return "Running";
    },
    eat: function () {
        return "";
    }
};
const grandMon = {
    id: 1,
    name: "Po",
    age: 20,
    tel: "09999999999",
    move: function () {
        return "Running";
    },
    eat: function () {
        return "";
    }
};
const boxer = {
    id: 303,
    name: "Jojo",
    age: 18,
    move: function () {
        return "Return Punch";
    },
    eat: function () {
        return "Vegetable";
    }
};
//Thanakit S.
const pilot = {
    id: 303,
    name: "JR",
    age: 18,
    move: function () {
        return "Return to Human";
    },
    eat: function () {
        return "You";
    }
};
// Class
class Driver {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move() {
        return `${this.name} moves by driviing.`;
    }
    eat() {
        return `${this.name} eats rice.`;
    }
}
const d1 = new Driver(101, "Anurak", 20);
console.log(d1.move());
console.log(d1.eat());
function getArray(items) {
    return new Array().concat(items);
}
let n1 = [1, 2, 3, 4];
let n2 = ["A", "B", "C", "D"];
console.log(getArray([n1, n2]));
