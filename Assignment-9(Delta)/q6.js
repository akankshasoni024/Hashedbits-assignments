const person = {
    name: "Akanksha",
    age: 21,
    occupation: "Developer"
  };
  
  function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old and I work as a ${obj.occupation}.`);
  }
  
  greetPerson(person);
  // Output: Hello, my name is Akanksha, I am 21 years old and I work as a Developer.
  