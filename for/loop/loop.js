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

// 水仙花數 - ABC滿足 ABC = A^3 + b^3 + C^3
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

//韓信點兵 - x, y, z任意輸入三數，其中x < 3， y < 5， z < 7，這三數分別是從10到100中的任意某數分別除3除5除7後的餘數，求某數為何
// function hanxin(x, y, z) {
//   let ans;
//   if (x >= 3 && y >= 5 && z >= 7) {
//     return '無解答';
//   }

//   for (let i = 10; i < 101; i++) {
//     if ((i - x) % 3 === 0  && (i - y) % 5 === 0 && (i - z) % 7 === 0) {
//       ans = i;
//       break;  
//     } else {
//       ans = 'no answer';
//     }
//   }

//   return ans;
// }

// const first = hanxin(2, 1, 6);
// console.log(first);
// const second = hanxin(2, 1, 3);
// console.log(second);