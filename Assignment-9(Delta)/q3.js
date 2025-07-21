function modifyArray(arr) {
    arr.push("newElement");
    arr.pop();
    return arr;
  }
  
  console.log(modifyArray([1, 2, 3])); // Output: [1, 2, 3]
  