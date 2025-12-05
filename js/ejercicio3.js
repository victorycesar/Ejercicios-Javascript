const container = document.getElementById("container");

function mostrar_numeros() {
    let parrafo = document.createElement("p");

    for (let i = 100; i > 1; i--) {
        parrafo.innerHTML += `${i}<br>`;
    }

    container.appendChild(parrafo);
}

mostrar_numeros();
