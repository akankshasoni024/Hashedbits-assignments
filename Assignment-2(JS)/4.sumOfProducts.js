function sumOfProducts(n1, n2) {
    let s1 = n1.toString().split('').reverse();
    let s2 = n2.toString().split('').reverse();
    let sum = 0;
  
    for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
      let d1 = Number(s1[i] || 0);
      let d2 = Number(s2[i] || 0);
      sum += d1 * d2;
    }
  
    return sum;
  }
  
  console.log(sumOfProducts(6, 34)); 
  