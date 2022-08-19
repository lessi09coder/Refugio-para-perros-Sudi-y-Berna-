const perros = []
perros.push(new Adopcion ('Sudan', 'labrador', 'grande', 'amarillo','macho',false, false));
perros.push(new Adopcion ('Berna', 'pitbull', 'mediano', 'blanco atigrado','hembra',false ,false));
perros.push(new Adopcion ('Pluto', 'bulldog', 'pequeño', 'gris','macho',true , false));
perros.push(new Adopcion ('Nala', 'gran danes', 'mediano', 'negro-blanco','hembra',true, false));
perros.push(new Adopcion ('Cachito', 'cruza', 'pequeño', 'marron','macho',false, false));

//console.log(perros)


//busquedaPerros va a ser un filtro para elegir que perros buscamos
let busquedaPerros;

const tabla = document.getElementById("perrosTBody");
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
    //console.log(setBusquedaPerros)
    setBusquedaPerros.forEach((item) => {
            newRow(item);
    });        
};

//desarrollar el filtro por tamaños !
function seleccionDeTamanos(){
    tamañosElegido = tamaños.value;
    localStorage.setItem("setSelectorTamanos",tamañosElegido)
    //console.log(tamañosElegido);
       
    if (tamañosElegido != "todos"){busquedaPerros = perros.filter(Adopcion => Adopcion.tamaño == tamañosElegido )} else{busquedaPerros= perros.slice()} //desafio complementario
    //console.log(busquedaPerros) ;
    
}

function listaPerros (){
    let nombres = []
    setBusquedaPerros.forEach(a => {        
        nombres.push(a.nombre)          
    })  
    console.log(...nombres) // asi tenemos la lista de los perros encontrados    
}

if(localStorage.getItem("setBusquedaPerros")!=null){
    listadoUpdate();
}

buscar.addEventListener("click",(e)=>{
    e.preventDefault();
    animejsRotate();
    seleccionDeTamanos();    
    localStorage.setItem("setBusquedaPerros",JSON.stringify(busquedaPerros))
    listadoUpdate();
    listaPerros();
});

eliminar.onclick = () => {  
    tabla.innerHTML= "";
    animejsVaciar();
    localStorage.clear();
};

//desafio complementario, para obtener los nombres de los perros encontrados y luego armar una lista



//****      animejs     ****
//libreria de animaciones 
const animejsRotate = () =>{
    anime({
        targets: buscar,
        rotate: 360,
        duration: 3000,          
    });
    }
//buscar.addEventListener('click', animejsRotate)

const animejsVaciar = () => {
    anime({
        targets: eliminar,
        scale:5,
        rotate: 90,
        translateX:100,
        duration: 1500,        
    })
}
