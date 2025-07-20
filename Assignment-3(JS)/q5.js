function correctfn(sentence, wrong, correct) {
    return sentence.replace(new RegExp(wrong, 'g'), correct);
  }
  console.log(correctfn("I love JvaaScript", "JvaaScript", "JavaScript"));
  