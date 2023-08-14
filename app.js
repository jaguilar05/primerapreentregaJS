function validarPalabra(texto){
    const noEsNumero = isNaN(texto)
    return noEsNumero
}

function contarPalabra(){
    let palabra = prompt("Ingresa una palabra")
    let validar = validarPalabra(palabra)
    if(!validar){
        
        return alert("No escribiste una palabra")
    } else {
        
        return alert(`La palabra que escribiste tiene ${palabra.length} letras`)

    }
}

contarPalabra()

while(confirm("Quieres seguir jugando")){
    contarPalabra()
}