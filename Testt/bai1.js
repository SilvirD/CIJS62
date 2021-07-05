const words = ["MADAM", "SOMETHING", "ABCCBA"];

function isItBalance(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] === word[word.length - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
}

for (let i = 0; i < words.length; i++) {
  console.log(isItBalance(words[i]));
}
