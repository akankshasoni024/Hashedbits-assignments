const data = {
    student1: {
      subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37
    },
    student2: {
      subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37
    },
    student3: {
      subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37
    }
  };
  
  const result = Object.entries(data).map(([key, value]) => {
    const scores = Object.values(value);
    const avg = Math.floor(scores.reduce((a, b) => a + b, 0) / scores.length);
    return { [key]: { average: avg } };
  });
  
  console.log(result);
  