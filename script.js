

const calcIneresSimple = (capital, tasa, temp) =>{
    intereSimple = capital*(tasa/100)*temp;
    // interesTotal = capital + intereSimple;
    return intereSimple.toFixed(2);
}

const calcInteresCompuesto = (capital, tasa, temp) =>{
    intereCompuesto = capital*(Math.pow(1+tasa/100,temp))
    return intereCompuesto.toFixed(2);
}

console.log(`El interes simple a pagar es: ${calcIneresSimple(500,2,6)}`)
console.log(`La capitalización total es de: ${calcInteresCompuesto(500,2,6)}`)

//entrada input valor
let inverInput = document.querySelector('#inversion');
const cantidad = document.querySelector('#cantidad');
const capitalizacion = document.querySelector('#capitalizacion');
const totalPagar = document.querySelector('#totalPagar');
const typeInteres = document.querySelector('#typeInteres');
const coin = document.querySelector('#coin');


//seleccion de interes
let tipoInte = typeInteres.value;
typeInteres.onchange = ()=>{
    tipoInte = typeInteres.value;
    refrescarDatos();
}

// selecion de moneda
let moneda = coin.value;
coin.onchange = () =>{
    moneda = coin.value;
    refrescarDatos();
}

// entrada del rango años
let inputRange1 = document.querySelector('#temporalidad');
let etiqueta = document.querySelector('#etiqueta');

etiqueta.innerHTML = inputRange1.value;
etiqueta.style.left = inputRange1.value-4 + '%';

inputRange1.oninput = () =>{
    etiqueta.innerHTML = inputRange1.value;
    etiqueta.style.left = inputRange1.value-4 + '%';
    refrescarDatos();
}

//entrada del rango interes
let inputTasa = document.querySelector('#tasa');
let etiqueta2 = document.querySelector('#etiqueta2')

etiqueta2.innerHTML = inputTasa.value;
etiqueta2.style.left = (inputTasa.value*100)/20-3.5 + '%';

inputTasa.oninput = () =>{
    etiqueta2.innerHTML = inputTasa.value;
    etiqueta2.style.left = (inputTasa.value*100)/20-3.5+'%';
    refrescarDatos();
}

//evento para calcular interes
inverInput.oninput = ()=>{
    refrescarDatos();
}



function refrescarDatos(){
    let cantidadInversion = parseFloat(inverInput.value)
    let interesGene = 0;

    if (tipoInte == 1) {
        interesGene = parseFloat(calcIneresSimple(inverInput.value, inputTasa.value, inputRange1.value));
    }else{
        interesGene = parseFloat(calcInteresCompuesto(inverInput.value, inputTasa.value, inputRange1.value)) - cantidadInversion;
    }

    cantidad.innerHTML = moneda+'.'+cantidadInversion.toFixed(2);
    capitalizacion.innerHTML = moneda+'.'+interesGene.toFixed(2);
    totalPagar.innerHTML = moneda+'.'+(cantidadInversion+interesGene).toFixed(2);
    
    
}
