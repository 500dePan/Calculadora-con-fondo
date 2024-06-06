function sumar(){

    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var mensaje = "Ingresa numeros aweonao"
    if(isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerHTML = mensaje; 
    }else{ 
        var suma = parseInt(n1)+ parseInt(n2);
        document.getElementById("resultado").innerHTML = suma;  
    }
}

function resta(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var mensaje = "Ingresa numeros aweonao"
    if(isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerHTML = mensaje; 
    }else{ 
        var resta = parseInt(n1)- parseInt(n2);
        document.getElementById("resultado").innerHTML = resta;  
    }
}


function multi(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var mensaje = "Ingresa numeros aweonao"
    if(isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerHTML = mensaje; 
    }else{ 
        var mul = parseInt(n1)* parseInt(n2);
        document.getElementById("resultado").innerHTML = mul;  
    }
}

function Div(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var mensaje1 = "no se puede dividir por 0 señor"
    var mensaje2 = "Ingresa numeros aweonao"
    if(n2>0){
    var Div = parseInt(n1)/ parseInt(n2);
    document.getElementById("resultado").innerHTML = Div; 
    }else if(isNaN(n1) || isNaN(n2)){
        document.getElementById("resultado").innerHTML = mensaje2;
    }else{
        document.getElementById("resultado").innerHTML = mensaje1;
    }
}