
function setup() {
  console.log(letterCapitalise("hello world, it's me"));
  console.log(letterCapitalise("HELLO WORLD, IT'S ME"));
  console.log(letterCapitalise("hELLo woRlD, it'S Me"));
}

function letterCapitalise(str) {
  return str.split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
}