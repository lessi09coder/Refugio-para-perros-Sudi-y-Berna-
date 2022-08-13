const perros = []
perros.push(new Adopcion ('Sudan', 'labrador', 'grande', 'amarillo','macho',false, false)),
perros.push(new Adopcion ('Berna', 'pitbull', 'mediano', 'blanco atigrado','hembra',false ,false)),
perros.push(new Adopcion ('Pluto', 'bulldog', 'pequeño', 'gris','macho',true , false)),
perros.push(new Adopcion ('Nala', 'gran danes', 'mediano', 'negro-blanco','hembra',true, false)),
console.log(perros)

const busquedaPerros = []

function buscarPerro(a,b){
    let raza = a.filter (objeto => objeto.raza == b)
   
    if(raza.length === 0){ //con un .length revisamos que el array devuelto este vacio, osea no se encontro .raza con lo que buscamos
        let tamaño = a.filter (objeto => objeto.tamaño == b)
        if(tamaño.length === 0){
            let color = a.filter(objeto => objeto.color == b)
                if(color.length === 0){
                    let sexo = a.filter(objeto => objeto.sexo == b)
                        return sexo
                } else return color 
        } else return tamaño
    } else return raza
}

let busqueda=prompt("Bienvenido, ponga 1 para continuar o EXIT para salir.")
while(busqueda!="EXIT"){
    busqueda = buscarPerro(perros, prompt('Ingrese una raza, tamaño, color o sexo. \n(ejemplo: labrador | amararillo | macho).').toLowerCase());  //mas adelante poner adoptado y castrado         
    if (busqueda.length !== 0){
        alert("se han encontrado con esas caracteristicas " + busqueda.length + " perros.")
        for(i=0 ; i<busqueda.length; i++){
            busquedaPerros.push(busqueda[i])
            alert('Tenemos un perro que se llama '+busqueda[i].nombre +' y es de RAZA '+busqueda[i].raza +' y COLOR '+busqueda[i].color)   
        }
    }    
    busqueda= prompt("Ponga EXIT para salir o siga buscando.")
}

console.log(busquedaPerros)
alert("Saliste del buscador de perro, gracias!")




