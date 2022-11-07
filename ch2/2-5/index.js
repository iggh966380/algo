// 輸入正整數a, b, c，輸出 a / b 的小數形式。精度到小數點後 c 位。 a, b <= 106 ， c <= 100
let a = 1, b = 6, c = 4;
let outcome = a / b; 
for(let i = 0; i < c; i++) {
  outcome *= 10;
}
let ans = Math.floor(outcome);
for (let i = 0; i < c; i++) {
  ans /= 10;
}
console.log(ans);