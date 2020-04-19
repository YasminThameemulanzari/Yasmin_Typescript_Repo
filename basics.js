// Data Types
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("------ Basic Data types------");
var n1 = 10;
var n2 = 20;
function add(x1, x2) {
    return x1 + x2;
}
var r = add(n1, n2);
console.log("Result is" + r);
//Objects
console.log("------ Objects ------");
var obj = {
    name: "Yasmin",
    Age: 30
};
console.log(obj);
console.log(obj.name);
console.log(obj.Age);
//Arrays
console.log("------ Arrays  ------");
var array1 = ["Safa", "Sana", "Hana"];
//console.log(array1.entries);
array1.forEach(function (element) {
    console.log(element);
});
//Typle Types  - a data structure consisting of multiple parts.
//
//Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
//
console.log("------ Tuples  ------");
var role; // tuple is similar to array , but with fixed size, either number or string is part of this. 
role = [10, "Admin"];
console.log(role);
//Enum Data type:
//
console.log("------ Enum data types  ------");
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // prints 0
console.log(Color.Green); // prints 1
console.log(Color.Blue);
//Enum example 2
var roles;
(function (roles) {
    roles[roles["admin"] = 10] = "admin";
    roles[roles["dev"] = 11] = "dev";
    roles[roles["user"] = 20] = "user";
})(roles || (roles = {}));
console.log(roles.admin); // prints 10
console.log(roles.dev); // prints 11
console.log(roles.user); // prints 20
// Nested Objects
console.log("------ Nested Objects  ------");
var emp = {
    empname: "Employee 1",
    empAge: 20,
    empaddress: {
        empstreet: "Stree1",
        empdoorno: 3,
        emphouse: ["House1", "House2"]
    }
};
console.log(emp);
//Union Types  - input1: number | string
/*
In TypeScript, you can define a variable which can have multiple types of values (i.e. number, string etc). This is called union type. A union type allows us to define a variable with multiple types. This is achieved by using the pipe ( '|' ) symbol between the types.
*/
console.log("------ Union Types - Data types  ------");
function combine(input1, input2) {
    var result;
    if (typeof input2 === 'number' && typeof input2 === 'number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var out = combine(10, 20);
console.log(out);
var out1 = combine("Yasmin", "Thameem");
console.log(out1);
// Literal Types
//
// A literal type is a type that represents exactly one value, e.g. one specific string or number. You can combine literal types with union types to model a finite set of valid values for a variable.
//
console.log("------ Literal Types ------");
function add1(i1, i2, i3) {
    var r;
    if (i3 === 'as-number') {
        r = +i1 + +i2;
    }
    else {
        r = i1.toString() + i2.toString();
    }
    return r;
}
var r1 = add1(10, 20, 'as-number');
console.log(r1);
var r2 = add1("Yasmin", "Thameem", "as-text");
console.log(r2);
//Custom Types
//
console.log("------ Custom Types - Simple ------");
var age;
age = 10;
console.log(age);
console.log("------ Custom Types - All primitive types ------");
var name1 = "Yasmin";
console.log(name1);
// All non-primitive types
console.log("------ Custom Types - All Non primitive types ------");
var object1 = { address1: "sdfsdf" };
console.log(object1);
// Watch mode - Compile as tsc basics.ts --watch
// Automatically compiles whenever changed and saved
// Initiate the Typescript Configuration
// tsc --init
// it creates tsconfig.json file
// Funciton Return Types and Void
console.log("------ Function return type - Auto detected by Ts ------");
function dis(msg1, msg2) {
    return msg1 + msg2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num3, num4) {
    return num3 * num4;
}
console.log(dis("Hii", "Welcome"));
console.log(sub(20, 10));
console.log(mul(10, 20));
console.log("------ Function return type - void ------");
// void returns nothing
function mul1(num3, num4) {
    console.log(num3 + num4);
}
mul1(10, 20);
;
console.log("------ Function return type - undefined ------");
// undefined returns nothing
function mul2(num3, num4) {
    console.log(num3 + num4);
    return; // default return statement is mandatory for undefined
}
mul2(100, 200);
;
console.log("------ Function return type - never ------");
// undefined returns nothing
/*function throwError(errorMsg: string): never {    // Explicility defined as never
    throw new Error(errorMsg);
}

throwError("This is an error message manually thrown"); */
// Array with push
console.log("------ Array with Push ------");
var hobby = ["Sports", "Cooking"];
var activehobby = ["Cricket"];
activehobby.push(hobby[0]); // Cannot push entire array into another array
activehobby.push(hobby[1]);
console.log(activehobby);
//  Spread Operator (...)
console.log("------ Spread Operator (...) ------");
var hobbies = ["Sports", "Cooking"];
var activehobbies = ["Cricket"];
activehobbies.push.apply(activehobbies, hobbies); // Push entire array into another array using ...
console.log(activehobbies);
// Clone the object
//
//
var obj1 = {
    name: "Hana",
    age: 29
};
var obj2 = obj1;
console.log("Using normal copy : Object 2 is :");
console.log(obj2);
var obj3 = __assign({}, obj1);
console.log(" Using ...   : Object 3 is :");
console.log(obj3);
