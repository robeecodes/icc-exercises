
function setup() {
  console.log(letterCapitalise("hello world"));
  console.log(letterCapitalise("HELLO WORLD"));
  console.log(letterCapitalise("hELLo woRlD"));
}

function letterCapitalise(str) {
  str = str.split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
  return str;
}