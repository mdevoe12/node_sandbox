var characters = new Object()

function countCharacters(string) {
  var arr = string.split("")
  arr.forEach(function (char) {
      if (char in characters) {
          characters[char] += 1;
      } else {
          characters[char] = 1;
      }
  });
}

countCharacters("I really want to work for wingspan")
console.log(characters);
