
//FALTA PONER ASINCRONISMO


let busquedaPerros;
let busquedaprueba = [];
let busquedaRaza = [];
const tabla = document.getElementById("perrosTBody");
const buscar = document.querySelector("#buscar");
const eliminar = document.querySelector("#eliminar");
let color = document.getElementById("selectColor")
let tamaños = document.getElementById("selectTamanos");
let selRAZA = document.getElementById("selRAZA");
let setBusquedaPerros;
let setB ; // para la tabla y para la lista de nombres de perros encontrados

//***      CREAR TABLA     ****
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

//PROBANDO HACER UN SELECT CON DOM

function buscarRaza(){
    const razaPerros=[];
    perros.forEach(a => {razaPerros.push(a.raza)})
    let filtroRaza  = razaPerros.filter(function (ele,pos){        
    return razaPerros.indexOf(ele) == pos;
    })
    //console.log(filtroRaza) 
    filtroRaza.forEach((e) => {
        if(e != undefined){
            let optionRaza = document.createElement("option");
            optionRaza.innerText = e;           
            selRAZA.appendChild(optionRaza);
        }
        }
    );    
};


function listadoUpdate() {
    tabla.innerHTML = "";      
    setB = JSON.parse(localStorage.getItem("setBusquedaPerros"));
    let a = localStorage.getItem("setSelectorTamanos");
    let b = localStorage.getItem("setSelectorColor");
    let c = localStorage.getItem("setSelectorRaza")
    tamaños.value = a;
    color.value = b;
    selRAZA.value = c;
    console.log(setB);
    setB.forEach((item) => {
            newRow(item);
    });        
};

function seleccionDeBusqueda(){
    
    buscarRaza()

    let tamañosElegido = tamaños.value;
    localStorage.setItem("setSelectorTamanos",tamañosElegido)
       
    if (tamañosElegido != "todos"){busquedaPerros = perros.filter(e => e.tamaño == tamañosElegido )} 
    else{busquedaPerros= perros.slice()} 
    

    let colorElegido = color.value;
    localStorage.setItem("setSelectorColor",colorElegido)
           
    if (colorElegido != "todos"){busquedaprueba = busquedaPerros.filter(e => e.color == colorElegido )} else{busquedaprueba = busquedaPerros.slice()} 
    //console.log(busquedaprueba)
     
    let razaElegido = selRAZA.value
    //console.log(razaElegido)
    localStorage.setItem("setSelectorRaza",razaElegido)
    if (razaElegido != "todos"){busquedaRaza = busquedaprueba.filter(e => e.raza == razaElegido )} else{busquedaRaza = busquedaprueba.slice()} 
    //console.log(busquedaRaza)

};


function listaPerros (){
    let nombres = []
    setB.forEach(a => {        
        nombres.push(a.nombre)          
    })   
    console.log("Los perros disponibles son:", ...nombres) // asi tenemos la lista de los perros encontrados    
};

//cuando esta el local storage vacio y se actualiza la pagina:
if(localStorage.getItem("setBusquedaPerros") != null){
    listadoUpdate();
}; 

buscar.addEventListener("click",(e)=>{
    e.preventDefault();
    //newSelectRaza(); ESTA SE BORRA ENTONCES
    animejsRotate();
    seleccionDeBusqueda();
    localStorage.setItem("setBusquedaPerros",JSON.stringify(busquedaRaza));
    //console.log(localStorage.getItem("setBusquedaPerros"));    
    listadoUpdate()
    
    listaPerros();     
});

eliminar.onclick = () => {  
    tabla.innerHTML= "";
    animejsVaciar();
    localStorage.clear();
};