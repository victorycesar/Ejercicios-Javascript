
const container = document.getElementById("container");

function devolver_pares(arreglo) {
    let pares = [];
    arreglo.forEach(numero => {
        if (numero % 2 == 0) {
            pares.push(numero);
        } 
    });
    return pares;
}

function mostrar_resultado() {
    let parrafo_normal = document.createElement("p");
    let parrafo_pares = document.createElement("p");

    let arreglo_original = [1, 4, 6, 8, 9 , 0];
    let arreglo_pares = devolver_pares(arreglo_original);

    parrafo_normal.innerText = "Arreglo original: ";
    parrafo_pares.innerText = "Arreglo solo pares: ";

    arreglo_original.forEach(numero => {
        parrafo_normal.innerText += `${numero} `;
    });

    arreglo_pares.forEach(numero => {
        parrafo_pares.innerText += `${numero} `
    });

    container.appendChild(parrafo_normal);
    container.appendChild(parrafo_pares);
}

mostrar_resultado();
