
/*clicar
function clicar(){
    //alert("Obrigado por clicar");
    document.getElementById("thanks").innerHTML="<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("thanks"));
}
*/

//link_nova_pagina
function link_nova_pagina(){
    window.open("https://www.dio.me/");
    }

//link_mesma_pagina
function link_mesma_pagina(){
    window.location.href="https://www.dio.me/";
}

//mouse_move
function mouse_move(elemento){
    //document.getElementById("mouse_1").innerHTML="Aqui";
    elemento.innerHTML="Aqui";
}

//mouse_out
function mouse_out(elemento){
    //document.getElementById("mouse_1").innerHTML="Click";
    elemento.innerHTML="Click";
}

//load
function load(){
    alert("Pagina carregada");
}

//change
function change(elemento){
    console.log(elemento.value);
}



/*Introducao JavaScript
    var nome="Victor_Alfa";
    var idade_1=34;
    var idade_2=10;
    var frase="Japão é o melhor time do mundo!";

    alert("Meu primeiro js");
    alert("Bem vindo " + nome);
    alert(idade_1 + " anos");
    alert(idade_1 + idade_2 + " anos");

    console.log(nome);
    console.log(idade_1);
    console.log(idade_1 + " anos");
    console.log(frase.replace("Japão","Brasil"));
    console.log(frase.toUpperCase());
*/

/*Array
    var lista=["maca","pera","laranja"];
    lista.push("uva");
    lista.pop();

    console.log(lista.length);
    console.log(lista);
    console.log(lista.reverse());
    console.log(lista.toString());
    console.log(lista.join("_"));
*/

/*Dicionario [objeto Jason]
    var frutas=[{nome:"maca",cor:"vermelha"},{nome:"uva",cor:"roxa"}];
    console.log(frutas);
    alert(frutas[0].nome);

    var fruta={nome:"maca",cor:"vermelha"};
    console.log(fruta);
    console.log(fruta.nome);
    console.log(fruta.cor);
    alert(fruta.nome + " " + fruta.cor);
*/

/*Condicional
    var idade=18;
    if(idade >=18){
        alert("maior de idade");
    }else{
        alert("menor de idade");
    }

    var idade=prompt("Qual a sua idade?");
    if(idade >=18){
        alert("maior de idade");
    }else{
        alert("menor de idade");
    }
*/

/*Lacos
    var count=1;
    while(count<=5){
            console.log(count);
            count++;
            alert(count);
    }

    var count;
    for(count=1; count<=5; count++){
        console.log(count);
        alert(count);
    }
*/

/*Date
    var d=new Date();
    console.log(d);
    console.log(d.getYear());
    console.log(d.getMonth()+1);
    console.log(d.getDay());
    console.log(d.getMinutes());
    //alert(d)
*/

/*Funcao
    function soma(n_1,n_2){
        return n_1 + n_2;
    }
    console.log(soma(5,10));
    alert(soma(5,10));
    
    var validar;
    function validaIdade(idade){
        //var validar;
        if(idade>=18){
            validar=true;
        } else{
            validar=false;
        }
        return validar;        
    }
    var idade=prompt("Qual a sua idade?");
    console.log(validaIdade(idade));
*/