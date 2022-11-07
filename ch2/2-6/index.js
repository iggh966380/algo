// 用 1, 2, 3, 4 ... 組成三個三位數 abc、def和ghi，每個數字都只可使用一次，要求abc: def: ghi = 1 : 2: 3;
// 按照abc def ghi的格式輸出解答
console.time();
for (let i = 100; i < 1000; i++) {
  let g = Math.floor(i / 100);
  let q = Math.floor(i / 10) - (g * 10);
  let p = Math.floor(i / 1) - (g * 100) - (q * 10);
  let a = Math.floor((i * 2) / 100);
  let b = Math.floor((i * 2) / 10) - (a * 10);
  let c = Math.floor((i * 2) / 1) - (a * 100) - (b * 10);
  let d = Math.floor((i * 3) / 100);
  let e = Math.floor((i * 3) / 10) - (d * 10);
  let f = Math.floor((i * 3) / 1) - (d * 100) - (e * 10);

  if (g !== q && g !== p && g !== a && g !== b && g !== c && g !== d && g !== e && g !== f) {
    if (q !== p && q !== a && q !== b && q !== c && q !== d && q !== e && q !== f) {
      if (p !== a && p !== b && p !== c && p !== d && p !== e && p !== f) {
        if (a !== b && a !== c && a !== d && a !== e && a !== f) {
          if (b !== c && b !== d && b !== e && b !== f) {
            if (c !== d && c !== e && c !== f) {
              if (d !== e && d !== f) {
                if (e !== f) {
                  if (g !== 0 && q !== 0 && p !== 0 && a !== 0 && b !== 0 && c !== 0 && d !== 0 && e !== 0 && f !== 0) {
                    if (d * 100 + e * 10 + f < 1000) {
                      console.log(g * 100 + q * 10 + p, a * 100 + b * 10 + c, d * 100 + e * 10 + f);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

console.timeEnd();