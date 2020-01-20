function makanTerusRekursif(waktu) {
    var counter = 0;
    
    if (waktu === 0) {
        return counter;
    } else if (waktu > 0 && waktu < 16) { //pass jika misalnya waktu = 9 - 15 !== 0,dan akan minus terus menerus jika ini tidak ada maka akan infinity
        return 1;
    } else { 
        counter += 1;
        return counter + makanTerusRekursif(waktu-15);
    }
}
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0