function kaliTerusRekursif(angka) {
  if(angka.toString().length === 1) {
    return angka;
  }else{
    var clone = angka.toString();
    angka = kali(clone);
    return angka, kaliTerusRekursif(angka);
  }
}

function kali(arrNum){
  if(arrNum.length === 1){
    return arrNum;
  }else{
    var temp = Number(arrNum[0]);
    arrNum = arrNum.slice(1);
    return temp * kali(arrNum);
  }
}


// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
