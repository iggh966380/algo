// 倒三角形，輸入正整數小於等於20。輸出一個n層的倒三角形
let n = 5, s = '';
for (let i = 0; i < n; i++) {
  for (let x = 0; x < i; x++) {
    s += ' ';
  }
  for (let j = (2 * (n - i)) - 1; j > 0; j--) {
    s += '*';
  }

  s += '\n';
}
console.log(s);
