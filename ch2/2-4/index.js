//輸入兩個正整數n<m<10^6,輸出1/n^2 + 1/ (n + 1)^2 + ... + 1 / m^2
//最多保留五位小數
let n = 65536, m = 655360;
let ans = 0;
for (let i = n; i <= m; i++) {
  if (n === 0 || m === 0) {
    return;
  }
  ans += 1 / Math.pow(i, 2);
}
const newAns = Math.floor(ans * 100000) / 100000;
console.log(newAns);