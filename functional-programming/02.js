function repeat(operation, num) {
  // implementation with loop
  /*var i
    ;

  for (i = 0; i < num; i += 1) {
    operation()
  }*/

  // recursion implemetation
  console.log(num);
  if (num <= 0) return;
    operation();

  return repeat(operation, --num);
}

// Do not remove the line below
module.exports = repeat