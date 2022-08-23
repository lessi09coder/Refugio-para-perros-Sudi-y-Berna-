const perros = []
perros.push(new Adopcion ('Sudan', 'labrador', 'grande', 'dorado','macho',false, false));
perros.push(new Adopcion ('Berna', 'pitbull', 'mediano', 'atigrado','hembra',false ,false));
perros.push(new Adopcion ('Pluto', 'bulldog', 'pequeño', 'gris','macho',true , false));
perros.push(new Adopcion ('Nala', 'gran danes', 'mediano','blanco','hembra',true, false));
perros.push(new Adopcion ('Cachito', 'cruza', 'pequeño', 'marron','macho',false, false));
perros.push(new Adopcion ('Simon', 'salchicha', 'pequeño', 'negro','macho',false, true));
perros.push(new Adopcion ('Sabandija', 'cruza', 'pequeño', 'blanco','macho',false, false));
perros.push(new Adopcion ('Batuke', 'labrador', 'grande', 'dorado','macho',false, false));
perros.push(new Adopcion ('Negro', 'border collie', 'mediano', 'negro blanco','macho',false, false));
perros.push(new Adopcion ('Violeta', 'galgo', 'mediano', 'gris','hembra',false, false));
perros.push(new Adopcion ('Billy', 'fox terrier', 'pequeño', 'gris','macho',false, false));
perros.push(new Adopcion ('Couti', 'doberman', 'grande', 'negro','macho',false, false));

//console.log(perros)


//busquedaPerros va a ser un filtro para elegir que perros buscamos
let busquedaPerros;
let busquedaprueba = []
const tabla = document.getElementById("perrosTBody");
const buscar = document.querySelector("#buscar");
const eliminar = document.querySelector("#eliminar");
let color = document.getElementById("selectColor")
let tamaños = document.getElementById("selectTamanos");
let setBusquedaPerros;
let setB ; // para la tabla y para la lista de nombres de perros encontrados


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

    aux= document.createElement("th");
    aux.innerText = newPerro.sexo;
    row.append(aux)
    
    tabla.append(row)
};

function listadoUpdate() {
    tabla.innerHTML = "";      
    setB = JSON.parse(localStorage.getItem("setBusquedaPerros"));
    let a = localStorage.getItem("setSelectorTamanos");
    let b = localStorage.getItem("setSelectorColor");
    tamaños.value = a;
    color.value = b;
    console.log(setB);
    setB.forEach((item) => {
            newRow(item);
    });        
};

function seleccionDeBusqueda(){
    let tamañosElegido = tamaños.value;
    localStorage.setItem("setSelectorTamanos",tamañosElegido)
       
    if (tamañosElegido != "todos"){busquedaPerros = perros.filter(e => e.tamaño == tamañosElegido )} 
    else{busquedaPerros= perros.slice()} 
    

    let colorElegido = color.value;
    localStorage.setItem("setSelectorColor",colorElegido)
           
    if (colorElegido != "todos"){busquedaprueba = busquedaPerros.filter(e => e.color == colorElegido )} else{busquedaprueba = busquedaPerros.slice()} 
    console.log(busquedaprueba)

}

/* function seleccionDeColor(){
    let colorElegido = color.value;
    localStorage.setItem("setSelectorColor",colorElegido)
           
    if (colorElegido != "todos"){busquedaPerros = perros.filter(Adopcion => Adopcion.color == colorElegido )} else{busquedaPerros= perros.slice()} 
    
} */

 function listaPerros (){
    let nombres = []
    setB.forEach(a => {        
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
    seleccionDeBusqueda();
    localStorage.setItem("setBusquedaPerros",JSON.stringify(busquedaprueba)); // aca probamos el multi buscador de color y tamaño
    console.log(localStorage.getItem("setBusquedaPerros"));
    listadoUpdate();
    listaPerros(); 
    //desafio complementario, para obtener los nombres de los perros encontrados y luego armar una lista

});

eliminar.onclick = () => {  
    tabla.innerHTML= "";
    animejsVaciar();
    localStorage.clear();
};








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



const urlAPI = "" //metes la url de la API
fetch (urlAPI)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch (err => console.log(err))