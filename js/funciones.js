//IMC = peso / (altura * altura)

//si imc < 18.5 indica bajo peso
//si imc  > 18.5 y < 25 peso saludable
//si imc > 25 tiene sobrepeso

//variables para los colores
let verde = 'rgb(82, 190, 65)';
let rojo = 'rgb(228, 75, 75)';
let naranja = 'rgb(231, 130, 72)';

//evento para el button
document.getElementById("calcular").addEventListener('click', calcularIMC);

function calcularIMC(){
    //lee los datos de los inputs
    let nombre = document.getElementById("nombre").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    
    //TODO: validar los datos de entrada

    //convierto la altura a metros
    altura = altura / 100;

    //calculo el IMC
    let imc = peso / (altura * altura);

    //redondeo el imc a dos decimales
    imc = imc.toFixed(2);

    //creo el mensaje de salida
    let mensajeTxt = `El paciente ${nombre} tiene un IMC de ${imc}. `;

    //añado el resultado del análisis al mensaje
    if(imc < 18.5){
        mensajeTxt += "<p>Esto indica un peso por debajo del ideal</p>";
    }else if(imc >= 18.5 && imc < 25){
        mensajeTxt += "<p>Enhorabuena!! estás en tu peso ideal</p>"
    }else{
        mensajeTxt += "<p>Tienes sobrepeso</p>";
    }
    document.getElementById("resultadoEstudio").innerHTML = mensajeTxt;
}