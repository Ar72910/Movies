//spread operator l-1

let arr= [1,2,3];
let arr2 = arr;
arr2.push(4);
console.log(arr)
console.log(arr2)

// solution using spread operator
let arr3 = [...arr];  //shallow copy
arr3.push(5);
console.log(arr)
console.log(arr3);


//object
let obj = {
    name: "ayush",
    add:{
        country:"India",
        state:{
        code:"DL",
        pin:"1111"
        }
    }
}

let obj2 = obj;
obj2.name = "fnjd";
console.log(obj);

let obj3 = {...obj}   //shallow copy
obj3.name = "anay";
console.log(obj3);
console.log(obj);

obj3.add.country = "pakistan"
console.log(obj);

obj4 = {...obj,add:{...obj.add}}  
obj4.add.country = "usa"
console.log(obj4);
console.log(obj);

//DEEP COPY every object gets new address
let obj5 = {...obj,add:{...obj.add,state:{...obj.add.state}}}
obj5.add.state.code = 1203
console.log(obj5);
console.log(obj);


// short cut of deep copy:
let obj7 = JSON.parse(JSON.stringify(obj));
obj7.add.state.code= "delhi"
console.log(obj7);
console.log(obj);

// node spread.js





