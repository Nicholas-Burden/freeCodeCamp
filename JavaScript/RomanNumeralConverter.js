function convertToRoman(num) {
let countdown = num;
let result = [];
let ticker = 1;
const I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000;
while (countdown > 0) {
    if (countdown >= M  && ticker <= 3) {
      result.push("M");
      countdown -= M;
    } else if (countdown >= D ) {
      result.push("D")
      countdown -= D;
    } else if (countdown >= C && ticker <= 3) {
      result.push("C");
      countdown -= C;
      ticker++;
      if (countdown < C) {
        ticker = 1;
      }
    } else if (countdown >= C && ticker > 3 && result.indexOf("D") == -1) {
      for (let i = 0; i < 3; i++){
      result.pop()
      }
      result.push("C","D")
      countdown -= C;
      ticker = 1;
    } else if (countdown >= C && ticker > 3) {
      for (let i = 0; i < 4; i++){
      result.pop()
      }
      result.push("C","M")
      countdown -= C;
      ticker = 1;
    } else if (countdown >= L) {
      result.push("L")
      countdown -= L;
    } else if (countdown >= X && ticker <= 3) {
      result.push("X");
      countdown -= X;
      ticker++;
      if (countdown < X) {
        ticker = 1;
      }
    } else if (countdown >= X && ticker > 3 && result.indexOf("L") == -1) {
      for (let i = 0; i < 3; i++){
      result.pop()
      }
      result.push("X","L")
      countdown -= X;
      ticker = 1;
    } else if (countdown >= X && ticker > 3) {
      for (let i = 0; i < 4; i++){
      result.pop()
      }
      result.push("X","C")
      countdown -= X;
      ticker = 1;
    } else if (countdown >= V) {
      result.push("V")
      countdown -= V;
    } else if (countdown >= I && ticker <= 3) {
      result.push("I");
      countdown -= I;
      ticker++;
    } else if (countdown >= I && ticker > 3 && result.indexOf("V") == -1) {
      for (let i = 0; i < 3; i++){
      result.pop()
      }
      result.push("I","V")
      countdown = 0;
      ticker = 1;
    } else {
      for (let i = 0; i < 4; i++){
      result.pop()
      }
      result.push("I","X")
      countdown = 0;
      ticker = 1;
    }  
  }
  return result.join("");
}
console.log(convertToRoman(3999));
