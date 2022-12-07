function Tabuada(){

    let num = window.document.getElementById("init");
    let end = document.getElementById("end");

    if(num.value.length == 0 || end.value.length == 0){

        window.alert("[ERRO] Insira valores válidos!!")

    } else{

        let n = Number(num.value);
        let e = Number(end.value);
        let x = 0;
        let r = "";
        let res = window.document.getElementById("resultado");
        
        res.innerHTML = `A tabuada do ${n} é: <br><br>`;
        do {
            r = n * x;
            res.innerHTML += `${n} x ${x} = ${r} <br>`;
            x++;
        } while(x <= e)
    }
}

function Multiplos(){

    let num = window.document.getElementById("dividendo");
    let end = document.getElementById("divisor");

    if(num.value.length == 0 || end.value.length == 0){

        window.alert("[ERRO] Insira valores válidos!!")

    } else{

        let n = Number(num.value);
        let e = Number(end.value);
        let cont = 1;
        let x = e;
        let r = "";
        let res = window.document.getElementById("resultado");
        
        res.innerHTML = `Os multiplos de ${n} são: <br><br>`;
        do {
            if(n % x == 0){
                res.innerHTML += `${cont}°  ->   ${x} <br>`;
                x--;
                cont++;
            }else{
                x--;
            }
        } while(x > 0)
    }
}

function Potencia(){

    let base = window.document.getElementById("base");
    let exp = window.document.getElementById("exp");

    if(base.value.length == 0 || exp.value.length == 0){

        window.alert("[ERRO] Insira valores válidos!!")

    }else{
        let n = Number(base.value);
        let e = Number(exp.value);
        let r = n ** e;
        let x = e;
        let res = window.document.getElementById("resultado");
        res.innerHTML = `O número ${n} elevado ao ${e} é: <br><br>`
        do{

            res.innerHTML += `${n} `
            x--;
            if(x > 0){
                res.innerHTML += `x `
            }
        }while(x > 0)
        res.innerHTML += ` = ${r}`
    }
}
