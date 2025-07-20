function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
  }
  
  console.log(countWords("This is a simple paragraph to count words."));
  