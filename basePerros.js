const perros = []
perros.push(new Adopcion ('Sudan', 'labrador', 'grande', 'amarillo','macho',false, false));
perros.push(new Adopcion ('Berna', 'pitbull', 'mediano', 'blanco atigrado','hembra',false ,false));
perros.push(new Adopcion ('Pluto', 'bulldog', 'pequeño', 'gris','macho',true , false));
perros.push(new Adopcion ('Nala', 'gran danes', 'mediano', 'negro-blanco','hembra',true, false));
perros.push(new Adopcion ('Cachito', 'cruza', 'pequeño', 'marron','macho',false, false));

console.log(perros)


//busquedaPerros va a ser un filtro para elegir que perros buscamos
let busquedaPerros;

const tabla = document.getElementById("perros");
const buscar = document.querySelector("#buscar");
const eliminar = document.querySelector("#eliminar");
let tamaños = document.getElementById("selectTamanos");
let setBusquedaPerros


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

function listadoUpdate() {
    tabla.innerHTML = "";  
    
        setBusquedaPerros = JSON.parse(localStorage.getItem("setBusquedaPerros"));
        let selectorTamanos = localStorage.getItem("setSelectorTamanos");
        tamaños.value = selectorTamanos
        console.log(setBusquedaPerros)
        setBusquedaPerros.forEach((item) => {
            newRow(item);
        });    
        
};

//desarrollar el filtro por tamaños !
function seleccionDeTamanos(){
    tamañosElegido = tamaños.value;
    localStorage.setItem("setSelectorTamanos",tamañosElegido)
    console.log(tamañosElegido);
       
    if (tamañosElegido != "todos"){busquedaPerros = perros.filter(Adopcion => Adopcion.tamaño == tamañosElegido )} else{busquedaPerros= perros.slice()}
    console.log(busquedaPerros) ;
    
}

if(localStorage.getItem("setBusquedaPerros")!=null){
    listadoUpdate();
}

buscar.addEventListener("click",(e)=>{
    e.preventDefault();
    seleccionDeTamanos();
    localStorage.setItem("setBusquedaPerros",JSON.stringify(busquedaPerros))
    listadoUpdate();
});

eliminar.onclick = () => {  
    tabla.innerHTML= ""
};