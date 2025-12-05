const container = document.getElementById("container");

function sumar_elementos(arreglo) {
    let resultado = 0;
    arreglo.forEach(numero => {
        resultado += numero;
    });

    return resultado;
}

function mostrar_resultado() {
    let parrafo_original = document.createElement("p");
    let parrafo_resultado = document.createElement("p");

    let arreglo_original = [1, 4, 23, 0, 34];
    let resultado = sumar_elementos(arreglo_original);

    parrafo_original.innerText = "Arreglo original: ";
    parrafo_resultado.innerText = "Resultado: ";

    arreglo_original.forEach(elemento => {
        parrafo_original.innerText += `${elemento} `;
    });

    parrafo_resultado.innerText += `${resultado}`;

    container.appendChild(parrafo_original);
    container.appendChild(parrafo_resultado);

}

mostrar_resultado();
