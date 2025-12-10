const container = document.getElementById("container");

const campo = document.getElementById("campo");
const boton = document.getElementById("boton");

function multiplos_tres(numero) {
    let multiplos = [];
    let actual = 3;
    while(actual <= numero) {
        multiplos.push(parseInt(actual));
        actual += 3;
    }

    return multiplos;
}

function resultado(arreglo) {
    let suma = 0;
    arreglo.forEach(element => {
        suma += parseInt(element);
        
    });

    return suma;

}

console.log(multiplos_tres(21));

boton.addEventListener("click",()=>{
    if (campo.value.trim() === ""){
        console.log("Debe ingresar al menos un caracter")
        return
    }

    let valor = parseInt(campo.value);

    let arreglo = multiplos_tres(valor);
    let suma = resultado(arreglo);



    let p = document.createElement("p");
    p.innerHTML = "Los multiplos de tres son: "
    arreglo.forEach(numero => {
        p.innerHTML += ` ${numero}`
    })
    p.innerHTML += `<br/>El resultado es: ${resultado(arreglo)}`;

    container.innerHTML = ""

    container.appendChild(p)




})
