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