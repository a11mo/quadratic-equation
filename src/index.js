module.exports = function solveEquation(equation) {
  // your implementation
  var split_array = equation.split(" ");
  var a = split_array[0];
  var b = split_array[3] + split_array[4];
  var c = split_array[7] + split_array[8];
  var korni = [];
  var x1, x2;
  var dcr = (b * b) - (4 * a * c);
    x1 = (-b + Math.sqrt(dcr)) / (2 * a);
    x2 = (-b - Math.sqrt(dcr)) / (2 * a);
    korni.push(Math.round(x1));
    korni.push(Math.round(x2));
  return korni.sort(function ordering(A, B) {
    if (A > B) return 1;
    else {
            return -1;
    }
  });

}
