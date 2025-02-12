// let obj = {
//     name: 'realme',
//     model: 'c55',
//     camera: 'doul camera',
//     flash: 'yes'
// }
// console.log(obj)

// let cat = {
//     name: 'pucchi',
//     color: 'white',
//     food: 'Rice',
//     age: '2 month',
//     favoriteFood: 'chikken'
// }
// cat.age = '3 month'
// console.log(cat);
// console.log(cat.age);
// console.log(cat['food'])


// let computer = {
//     brand: 'hp',
//     model: '8 genareti',
//     price: 500000,
//     ssd: '128 gb',
//     hhd: '512 gb'
// }

// const key = Object.keys(computer);
// console.log(key)
// let computer = {
//     brand: 'hp',
//     model: '8 genareti',
//     price: 500000,
//     ssd: '128 gb',
//     hhd: '512 gb'
// }

// const velus = Object.values(computer);
// console.log(velus);

// let school = {
//     name: 'ful kuri',
//     location: 'batagaschi',
//     class: [1, 2, 3, 4, 5],
//     uniqe:{
//         color: 'blue',
//         marit: {
//             hill: 'balam'
//         }
//     }
// }

// console.log(school);
// console.log(school.name);
// console.log(school.class[1]);
// console.log(school.uniqe.marit)





// let mobile = {
//     name: 'realme',
//     model: 'c55',
//     camera: 'doul camera',
//     flash: 'yes',
//     screen: 'nurzo'
// }

// mobile.alo = 'lllll'
// console.log(mobile)
// for(let key in mobile){
//     console.log(key);
//     console.log(mobile[key])
// }

// let person = {
//     name: 'md rasel',
//     age: 25,
//     profession: 'developer'
// }
// console.log(person.name, person.profession);
// console.log(`name: ${person.name}, profession: ${person.profession}`);


// let person = {
//     name: 'md rasel',
//     age: 25,
//     profession: 'developer'
// }

// person.age = 26,
// person.city = 'dhaka',
// console.log(person);
// for(let key in person){
//     console.log(Object.values(person));
// }


// array loop problem solveing task 1

// let fruits = ['orange', 'banana', 'peyara', 'lebu', 'orange', 'banana'];
// let uniqeFruit = [];
// let i = 0;
// while(i < fruits.length){
//     let eliment = fruits[i];
//     console.log(eliment);
//     i++;
//     if(!uniqeFruit.includes(eliment)){
//         uniqeFruit.push(eliment);
//     }
// }
// console.log(uniqeFruit);

// for(let i = 0; i < fruits.length; i++){
//     let eliment = fruits[i];
//     if(!uniqeFruit.includes(eliment) ){
//         uniqeFruit.push(eliment);
//     }
// }
// console.log(uniqeFruit);


// let device = ['laptop', 'dasktop', 'tablet', 'laptop', 'mobile', 'watch'];

// let uniqueDevice = [];
// for(let i = 0; i < device.length; i++){
//     let allDevice = device[i];
//     if(!uniqueDevice.includes(allDevice)){
//         uniqueDevice.push(allDevice);
//     }

// }
// console.log(uniqueDevice);


// object loop prolem solving task 2
// let products = [
//     {name: 'laptop', category: 'electronics'}, 
//     {name: 'T-shirt', category: 'clothing'},
//     {name: 'mobile', category: 'electronics'}, 
//     {name: 'jacket', category: 'clothing'}
// ]
// let n = {
//     ele: [],
//     cloth: []
// }

// for(let i = 0; i < products.length; i++){
//     let allProduct = products[i];
//     if(allProduct.category === 'electronics'){
//         n.ele.push(allProduct.name);
//     }
//     else if(allProduct.category === 'clothing'){
//         n.cloth.push(allProduct.name);
//     }
// }
// console.log(n);





// task 4
// let stn = "amar sonar bangla ami tomay valobashi"
// console.log(stn.split(" "))

// একটা for...in loop ব্যবহার করে object-এর সব key-value console-এ print করো।
// let num ={
//     name: 'rasel',
//     age: 25,
//     profeson: 'developer'
// }
// for(let i in num){
//     let eliment = num[i];
//     console.log(eliment + " " + num[eliment])
// }
let number ={
    tata: 25,
    toyota: 20, 
    lemborgini: 80,
    obj: ['rasel', 'alo', 'valo']
}
let key = Object.keys(number);
let value = Object.values(number)
console.log(key, value)

let man = {
    name: 'rasel',
    age: 25, 
    profeson: 'developer'
}
for(let key in man){
    console.log(key + ':' + man[key])
}
