function sumAll(arr) {
  var x = Math.min.apply(null, arr);
  var y = Math.max.apply(null, arr);
  var sum = y;
  for (var i = x; i < y; i++) {
    sum = sum + i;
  }
  return sum;
}

sumAll([1, 4]);

