const perros = []
perros.push(new Adopcion ('Sudan', 'labrador', 'grande', 'amarillo','macho',false, false)),
perros.push(new Adopcion ('Berna', 'pitbull', 'mediano', 'blanco atigrado','hembra',false ,false)),
perros.push(new Adopcion ('Pluto', 'bulldog', 'pequeño', 'gris','macho',true , false)),
perros.push(new Adopcion ('Nala', 'gran danes', 'mediano', 'negro-blanco','hembra',true, false));
console.log(perros)


//busquedaPerros va a ser un filtro para elegir que perros buscamos
let busquedaPerros;

const tabla = document.getElementById("perros");
const buscar = document.querySelector("#buscar");
const eliminar = document.querySelector("#eliminar");
let tamaños = document.getElementById("selectTamanos");


function newRow (newPerro){
    const row = document.createElement("tr");    
    let aux= document.createElement("th");
    aux.innerText = newPerro.nombre;
    row.append(aux)
    
    aux= document.createElement("th");
    aux.innerText = newPerro.raza;
    row.append(aux)

    aux= document.createElement("th");
    aux.innerText = newPerro.tamaño;
    row.append(aux)

    aux= document.createElement("th");
    aux.innerText = newPerro.color;
    row.append(aux)
    
    tabla.append(row)
};



//desarrollar el filtro por tamaños !
function seleccionDeTamanos(){
    let tamañosElegido = selectTamanos.value;
    console.log(tamañosElegido)
       
    if (tamañosElegido != "todos"){busquedaPerros = perros.filter(Adopcion => Adopcion.tamaño == tamañosElegido )} else{busquedaPerros= perros.slice()}
    console.log(busquedaPerros) ;
    
}

buscar.addEventListener("click",(e)=>{
    e.preventDefault();
    seleccionDeTamanos()
    //busquedaPerros= perros.slice();
    listadoUpdate()
});

eliminar.onclick = () => {
    busquedaPerros=[];
    listadoUpdate();
};


/* tamaños.addEventListener("click",(e)=>{
    e.preventDefault();
    seleccionDeTamanos();
    listadoUpdate()
}); */

function listadoUpdate() {
    tabla.innerHTML = "";     
    busquedaPerros.forEach((item) => {
        newRow(item);
    });    
};



