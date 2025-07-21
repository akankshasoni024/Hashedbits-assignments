function scopeTest() {
    var a = "I am var";     // function-scoped
    let b = "I am let";     // block-scoped
    const c = "I am const"; // block-scoped
  
    if (true) {
      var a = "var updated in block";
      let b = "let inside block";
      const c = "const inside block";
      console.log("Inside block:", a, b, c);
    }
  
    console.log("Outside block:", a, b, c);
  }
  
  scopeTest();
  