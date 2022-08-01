// 水仙花數
// let list = [];
// for (let i = 100; i < 1000; i++) {
//     let hundred = Math.floor(i / 100);
//     let ten = Math.floor(i / 10 ) - hundred * 10;
//     let one = i - (hundred * 100 + ten * 10);
//     if (i === (hundred * hundred * hundred + ten * ten * ten + one * one * one)) {
//         console.log(i);
//         list.push(i);
//     }
// }

// console.log(list);

// function findSqrt(target) {
//     let i = 1;
//     while(i < target) {
//         if ((i * i) === target) {
//             if (i % 1 === 0) {
//                 return i;
//             }
//         } else {
//             i++;
//         }
//     }
// }

// let ans = [];
// for (let a = 1; a <= 9; a++) {
//     for (let b = 0; b <= 9; b++) {
//         let n = a * 1100 + b * 11;
//         console.log(n);
//         ans.push(findSqrt(n));
//     }
// }
// console.log(ans);
// function fact(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         let factorial = 1;
//         for (let j = 1; j <= i; j++) {
//             factorial = factorial * j;
//         }
//         sum += factorial;
//     }
//     return sum; 
// } 

// const ans = fact(10);
// console.log(ans);