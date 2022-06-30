// Destructuring a convinient/easy way of extracting propreties from
// an array,object


let arr = ["Hi","I","am","ayush"];
// let a = arr[0];
// let b = arr[1];
// console.log(a);
// console.log(b);


// let [a,b,c,d] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// //to skip a value
// let [p,,q,r] = arr
// console.log(p);
// console.log(r);
// console.log(q);


// //extra mei undefined aae gaa
// let [a,b,c,d,extra] = arr
// console.log(a,b,c,d,extra)

// //when a  value is provided to extra vriable
// let [a,b,c,d,extra="popo"] = arr
// console.log(a,b,c,d,extra)



//// on objects
 let obj ={
    name:"Ayush",
    state:"Delhi",
    country:"India"
 } 
//  let name = obj.name;
//  let state = obj["state"];
//  console.log(state);
//  console.log(name);

//destructuring
//name of variable should be same as key
// let {name,state,country} = obj;

// console.log(name, state, country);


// // extra valu pass //undefined
// let {name,state,country,extra} = obj;

// console.log(name, state, country,extra);

//  // provid val to exta variable
// let {name,state,country,extra="ansy"} = obj;
// console.log(name, state, country,extra);



// if we want to chane the name of var from ket then
let {name:fn,state:st,country} = obj;

console.log(fn, st, country);


// node Destructuring.js