// 1-masala 
// let str = "34567" ;
// function change(str) {
//     let res = str.split("")
//     res.reverse(",")

//     return res
// }
// console.log(change(str));


// 2-masala
//  == - bu biron bir element boshqasiga tenglash uchun olinadi va tenglikka tekshiradi ammo berilgan element 
// type ni tekshirmaydi   === - bu esa type ni ham tekshiradi
// bu == uchun misol
// if (1=="1") {
//     console.log("teng");
// }else{
//     console.log("tengemas");
// }


// === uchun misol
// if (1==="1") {
//     console.log("teng");
// }else{
//     console.log("teng emas");
// }


// 3-masala
// function toN(element) {
//     let res = [];
//     for (let i = 1; i <= element; i++) {
//        res.push(i)
//     }
//     return res
// }
// console.log(toN(10));



// 4-masala
// let arr = [3,6,8,9,3,4]
// function joinArr(arr) {
//     let toq =[];
//     let juft =[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 ==0) {
//             juft.push(arr[i])
//         }else{
//             toq.push(arr[i])
//         }
//     }
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < toq.length; i++) {
//         sum1+=toq[i]
//     }
//     for (let i = 0; i < juft.length; i++) {
//         sum2 +=juft[i]
//     }
//     let result =[];
//     result.push(sum1);
//     result.push(sum2)


//     return result
// }
// console.log(joinArr(arr));




// 5-masala
// let str = "s!alom!"
// function delet(str) {
//     let res = str.split('');
//     let result = []
//     for (let i = 0; i < res.length; i++) {
//         if (res[i] != "!") {
//             result.push(res[i])
//         } 
//     }
//     return result.join('')
// }
// console.log(delet(str));


// 6-masala
// let arr1 = [4,7,'salom',3,'45',9,3]
// let arr2 = [4,'hello',7,8,4]
// function addArr(arr1,arr2) {
//     let sum = 0;
//         for (let i = 0; i < arr1.length; i++) {
//             if(typeof arr1[i] != "string") {
//                 sum += arr1[i]
//             } 
//         }
//         for (let i = 0; i < arr2.length; i++) {
//             if(typeof arr2[i] != "string") {
//                 sum += arr2[i]
//             }  
//     }
//     return sum
// }
// console.log(addArr(arr1,arr2));




// 7-masala
let str = "salom";
function delet(str) {
    let res = str.split('')
    res.pop();
    res.shift()
    return res.join("")
}
console.log(delet(str));




// 8-masala
// let arr = [3,5,7,"salom",'hello'];
// function buildNew(arr) {
//     let res = []
//     arr.forEach(function (value) {
//         res.unshift(value)
//     } );
//     return res
// }
// console.log(buildNew(arr));


// 9-masala
// let str = "456580"
// function delet(str) {
//     let res = str.split("")
//     if ( res[res.length-1] == 0) {
//         res.pop()
//     }

//     return res.join('')
// }
// console.log(delet(str));


// 10-masala
// let arr = [8,5,6,7,3];
// function min(arr) {
//     let min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return min**4
// }
// console.log(min(arr));