const container = document.getElementById("container");
const campo = document.getElementById("campo");
const btn = document.getElementById("boton");

function calcular_factorial(numero) {
    if (numero == 0) return 1;
    let resultado = numero;
    for (let i = 1; i < numero; i++) {
        resultado *= numero - i;  
    }

    return resultado;
}

btn.addEventListener("click", ()=>{
    
    let numero = campo.value;
    if (numero.trim() == "") return;
    let factorial = calcular_factorial(numero);

    let resultado = document.createElement("p")
    resultado.innerHTML = `${factorial}`;
    container.innerHTML = "";
    container.appendChild(resultado);
});
