const test = lightSwitch(7, 3);
console.log(test);

function lightSwitch(n, k) {
  let newArr = [];
  let ans = '';
  for (let i = 0; i < n; i++) {
    newArr.push(!!0);
  }
  
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      if (j % i === 0) {
        newArr[j] = !newArr[j];
      }
      if (i === k) {
        if (newArr[j]) {
          ans += `${j} `;
        }
      }
    }
  } 
  return ans;
}