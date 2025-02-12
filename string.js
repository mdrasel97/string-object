// let num = 'rasel';
// let number = `50`;
// let thana = "chandina";
// let country = new String('bangladesh');
// console.log(num, number, thana, country)


// const friend = 'Khalil';
// const fri = 'abdul';
// const dry = "khalil"


// // if(friend.toLowerCase === dry.toLowerCase){
// //     console.log('amar sonar bangla ami tomay valobashi');
// // }
// // else{
// //     console.log('colo colo amar deshe colo')
// // }
// if(friend.trim === dry.trim){
//     console.log('amar sonar bangla ami tomay valobashi');
// }
// else{
//     console.log('colo colo amar deshe colo')
// }


// // slice 
// let sallu = 'bangladesh';
// let i = sallu.slice(0, 6);
// console.log(i);


// let desh = 'amar sonar bangla ami tomay valobashi';
// let y = desh.split(' ');
// console.log(y);

// let friends = ['alom', 'jalom', 'molom', 'pelam', 'helam'];
// console.log(friends.join('|'))


// let frouits = ['apple', 'banana', 'orange', 'kola'];
// let friedRice = ['rice', 'gosto', 'alo'];
// console.log(frouits.concat(friedRice));
// console.log(frouits.includes('apple'));


// let frouits = ['apple', 'banana', 'orange', 'kola'];
// for(let frouit of frouits){
//     console.log(frouit);
// }


// let nam = 'amar sonar bangla ami tomay valo bashi';
// count = [];
// for(let i = 0; i <nam.length; i++){
//     if(nam[i] === 'v'){
//         count.push(nam[i])
//     }

// }

// console.log(count.length)

let l = "Amar sonar bangla ami tomaY vaLo bakcjK ekdO";
console.log(l)



let dolar = '$249';
let taka = dolar.split("");

for(let i = 0; i < taka.length; i++ ){
    let eliment = taka[i];
    if(!isNaN(eliment) && eliment){
        console.log(eliment)
    }
}