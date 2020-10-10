function ordenar(num){

    for (var a = 0; a < num.length; a++) {
        for (var b = a; b < num.length; b++) {
            if (num[a] > num[b]) {
                auxilio = num[a];
                num[a]= num[b];
                num[b]= auxilio;
            }
        }
    }

    for (var a = 0; a < num.length; a++) {
        console.log(num[a]);
    }
}

console.log(ordenar([24,85,48,60,15,2,20,74,56]));