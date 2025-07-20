

//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(num1, num2, operator) {
    switch (operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
      default: return "Invalid operator";
    }
  }
  
  console.log(calculate(10, 5, '+')); 
  