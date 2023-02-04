//  All about arrays
// array literal
let a = [1, 2, 3, 4, 5];

let j = new Array();
console.log(`Empty array: ${j}`);
j.push(34);
console.log(`NOT AN EMPTY Array: ${j}`);

// Constructor with values
let k = new Array(10, 20, 30);
console.log(`3-value array: ${k}`);

//
let m = new Array(10);
console.log(`New array??? ${m}`);
m.push(88);
console.log(`New array now ${m}`);
m[0] = 20;
console.log(`Replaced element ${m}`);

// Friday
let p = new Array(10).fill('Friday!');
console.log(`Really happy it's ${p}`);

function square(x) {
    return x * x;
}

let r = new Array(1, 33, 22, 5);

let newR = r.map(function(value){
    // console.log(`value is ${value}`);
    return square(value);
});
console.log(`New array: ${newR}`);
