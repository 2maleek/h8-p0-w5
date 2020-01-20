/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/


function changeVocals (str) {
    str = str.split('');
    for(var i=0; i<str.length; i++) {
        if(str[i] === 'a') {
            str[i] = 'b';
        }else if(str[i] === 'i') {
            str[i] = 'j';
        }else if(str[i] === 'u') {
            str[i] = 'v';
        }else if(str[i] === 'e') {
            str[i] = 'f';
        }else if(str[i] === 'o') {
            str[i] = 'p';
        }else if(str[i] === 'A') {
            str[i] = 'B';
        }else if(str[i] === 'I') {
            str[i] = 'J';
        }else if(str[i] === 'U') {
            str[i] = 'V';
        }else if(str[i] === 'E') {
            str[i] = 'F';
        }else if(str[i] === 'O') {
            str[i] = 'P';
        }
    }
    str = str.join('');
    return str;
  }
  
  function reverseWord (str) {
    str = str.split('').reverse().join('');
    return str;
  }
  
  function setLowerUpperCase (str) {
    str = str.split('');
    for(var i=0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()) {
            str[i] = str[i].toUpperCase();
        }else if(str[i] === str[i].toUpperCase()) {
            str[i] = str[i].toLowerCase();
        }
    }
    return str.join('');
  }
  
  function removeSpaces (str) {
    str = str.split(' ');
    str = str.join('');
    return str;
  }
  
  function passwordGenerator (name) {
    var gantiVokal = changeVocals(name);
    var balikKata = reverseWord(gantiVokal);
    var balikUpLow = setLowerUpperCase(balikKata);
    var hapusSpace = removeSpaces(balikUpLow);

    return hapusSpace;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'