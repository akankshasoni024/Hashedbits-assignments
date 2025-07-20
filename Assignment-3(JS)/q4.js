const str = "This is an amazing JavaScript challenge!";
const vowels = str.match(/[aeiou]/gi)?.length || 0;
const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
console.log("Vowels:", vowels, "Consonants:", consonants);
