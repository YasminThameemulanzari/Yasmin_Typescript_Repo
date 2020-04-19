// Data Types


console.log("------ Basic Data types------");

const n1:number = 10;
const n2:number = 20;

function add(x1:number, x2:number)
{
    
    return x1 +x2;
}

const r = add(n1,n2);

console.log("Result is" + r);


//Objects

console.log("------ Objects ------");
const obj = 
{

    name: "Yasmin",
     Age: 30
};

console.log(obj);
console.log(obj.name);
console.log(obj.Age);


//Arrays

console.log("------ Arrays  ------");

const array1 = ["Safa","Sana","Hana"];

//console.log(array1.entries);

array1.forEach(element => {
    
    console.log(element);
});



//Typle Types  - a data structure consisting of multiple parts.
//
//Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
//

console.log("------ Tuples  ------");


let role: [number,string];    // tuple is similar to array , but with fixed size, either number or string is part of this. 

role = [10,"Admin"];

console.log(role);

//Enum Data type:
//

console.log("------ Enum data types  ------");

enum Color {
    Red ,                //default placed in 0 position
    Green,               // increment by 1
    Blue,
  }

console.log(Color.Red);      // prints 0
console.log(Color.Green);     // prints 1
console.log(Color.Blue);


//Enum example 2

enum roles {
    admin  =10,                // placed in 10 position
    dev,               // increment by 1
    user =20,
  }

console.log(roles.admin);      // prints 10
console.log(roles.dev);     // prints 11
console.log(roles.user);    // prints 20



// Nested Objects

console.log("------ Nested Objects  ------");

const emp ={
    empname:"Employee 1",
    empAge:20,
    empaddress: {
        empstreet :"Stree1",
        empdoorno : 3,
        emphouse : ["House1","House2"]
    }
};

console.log(emp);


//Union Types  - input1: number | string
/*
In TypeScript, you can define a variable which can have multiple types of values (i.e. number, string etc). This is called union type. A union type allows us to define a variable with multiple types. This is achieved by using the pipe ( '|' ) symbol between the types.
*/

console.log("------ Union Types - Data types  ------");

function combine(input1: number | string, input2: number | string)
{
    let result;
    if (typeof input2 === 'number' && typeof input2 === 'number')
    {
        result  = +input1 + +input2;
    }
  else
  { 
          result = input1.toString() + input2.toString();
  }
  return result;

}


const out = combine(10,20);
console.log(out);

const out1 = combine("Yasmin","Thameem");
console.log(out1);


// Literal Types
//
// A literal type is a type that represents exactly one value, e.g. one specific string or number. You can combine literal types with union types to model a finite set of valid values for a variable.
//

console.log("------ Literal Types ------");

function add1(i1:number | string, i2 :number | string, i3 :'as-number' | 'as-text')  // just litersls
 
{
    let r;

    if( i3 === 'as-number')
    {
        r = +i1 + +i2;
    }
    else
    {
        r = i1.toString() + i2.toString();

    }
    return r;
}


const r1 = add1(10,20,'as-number');
console.log(r1);

const r2 = add1("Yasmin","Thameem","as-text");
console.log(r2);


//Custom Types
//

console.log("------ Custom Types - Simple ------");

type aliasName = number;

let age : aliasName;

age = 10
console.log(age);

console.log("------ Custom Types - All primitive types ------");

// All primitive types


type Primitive =
  | string
  | boolean
  | number
  | bigint
  | symbol
  | null
  | undefined;


let name1 :Primitive = "Yasmin";

console.log(name1);

// All non-primitive types
console.log("------ Custom Types - All Non primitive types ------");

type NonPrimitive = object;

let object1 : NonPrimitive = { address1 : "sdfsdf"};

console.log(object1);


// Watch mode - Compile as tsc basics.ts --watch
// Automatically compiles whenever changed and saved



// Initiate the Typescript Configuration
// tsc --init
// it creates tsconfig.json file



// Funciton Return Types and Void

console.log("------ Function return type - Auto detected by Ts ------");

function dis(msg1:string, msg2:string)  // return type is string  - Auto detected
{
    return msg1 + msg2;
}

function sub(num1:number, num2:number)  // return type is number - Auto detected
{
    return num1 - num2;
}

function mul(num3:number,num4:number) :number   // Explicility defined as number 
{
    return num3 * num4;
}

console.log(dis("Hii","Welcome"));
console.log(sub(20,10));
console.log(mul(10,20));

console.log("------ Function return type - void ------");

// void returns nothing
function mul1(num3:number,num4:number) :void   // Explicility defined as void 
{
    console.log(num3+num4);
}
mul1(10,20));

console.log("------ Function return type - undefined ------");

// undefined returns nothing
function mul2(num3:number,num4:number) :undefined   // Explicility defined as undefined 
{
    console.log(num3+num4);
    return;                      // default return statement is mandatory for undefined
}
mul2(100,200));

console.log("------ Function return type - never ------");

// undefined returns nothing
/*function throwError(errorMsg: string): never {    // Explicility defined as never 
    throw new Error(errorMsg); 
} 

throwError("This is an error message manually thrown"); */


// Array with push

console.log("------ Array with Push ------");

let hobby = ["Sports","Cooking"];

let activehobby = ["Cricket"];

activehobby.push(hobby[0]);          // Cannot push entire array into another array
activehobby.push(hobby[1]);

console.log(activehobby);


//  Spread Operator (...)

console.log("------ Spread Operator (...) ------");

let hobbies = ["Sports","Cooking"];

let activehobbies = ["Cricket"];

activehobbies.push(...hobbies]);          // Push entire array into another array using ...


console.log(activehobbies);

// Clone the object
//
//

const obj1 = {
    name : "Hana",
    age : 29

}

const obj2 = obj1;
console.log( "Using normal copy : Object 2 is :" );
console.log(obj2);

const obj3 = {...obj1};
console.log( " Using ...   : Object 3 is :" );
console.log(obj3);