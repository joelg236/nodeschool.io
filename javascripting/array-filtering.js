var numbers = [];
for (var i = 1; i <= 10; i++) {
  numbers[i-1] = i;
}

var filtered =
  function (){
    function filter(number) {
      return number % 2 === 0;
    }
    return numbers.filter(filter);
  }();

console.log(filtered);
