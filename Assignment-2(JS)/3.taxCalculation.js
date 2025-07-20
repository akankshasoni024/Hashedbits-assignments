function findTax(salary) {
  let taxAmount;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxAmount = 0;
      break;

    case (salary > 500000 && salary <= 1000000):
      taxAmount = salary * 0.10;
      break;

    case (salary > 1000000 && salary <= 1500000):
      taxAmount = salary * 0.20;
      break;

    case (salary > 1500000):
      taxAmount = salary * 0.30;
      break;

    default:
      return "Invalid salary";
  }

  return `Tax on ₹${salary} is ₹${taxAmount}`;
}

console.log(findTax(400000));     
console.log(findTax(800000));    
console.log(findTax(1200000));    
console.log(findTax(1800000));   
console.log(findTax(-100));      
