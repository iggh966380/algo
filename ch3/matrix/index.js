let n = 3;
let x = 0, y = n - 1;
let tot = 1;
let a = [];
for (let i = 0; i < n; i++) {
  let b = [];
  for (let j = 0; j < n; j++) {
    b.push(0);
  }
  a.push(b);
}
a[0][n - 1] = 1;
while (tot < (n * n)) {
  while (x + 1 < n && !a[x + 1][y]) {
    a[++x][y] = ++tot;
    console.log(tot);
  }
  while(y - 1 >= 0 && !a[x][y - 1]) {
    a[x][--y] = ++tot;
    console.log(2);
  }
  while(x - 1 >= 0 && !a[x - 1][y]) {
    a[--x][y] = ++tot;
    console.log(3);
  }
  while(y + 1 < n && !a[x][y + 1]) {
    a[x][++y] = ++tot;
    console.log(4);
  }
}
let ans = '';
for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    ans += `${a[x][y]} `;
  }
  ans += '\n'
}
console.log(ans);