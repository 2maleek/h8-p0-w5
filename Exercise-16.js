function totalDigitRekursif(angka) {
  var clone = angka.toString();
  if(clone.length === 1){
    return Number(clone);
  }else{
    var temp = Number(clone[0]);
    angka = Number(clone.slice(1));
    return temp + totalDigitRekursif(angka);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
