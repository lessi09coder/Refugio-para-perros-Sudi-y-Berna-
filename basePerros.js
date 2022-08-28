const perros = []
perros.push(new Adopcion ('Sudan', 'labrador', 'grande', 'dorado','macho',false, false));
perros.push(new Adopcion ('Berna', 'pitbull', 'mediano', 'atigrado','hembra',false ,false));
perros.push(new Adopcion ('Pluto', 'yorkshire terrier', 'pequeño', 'gris','macho',true , false));
perros.push(new Adopcion ('Nala', 'gran danes', 'mediano','blanco','hembra',true, false));
perros.push(new Adopcion ('Cachito', 'boder terrier', 'pequeño', 'marron','macho',false, false));
perros.push(new Adopcion ('Simon', 'salchicha', 'pequeño', 'negro','macho',false, true));
perros.push(new Adopcion ('Sabandija', 'cruza', 'pequeño', 'blanco','macho',false, false));
perros.push(new Adopcion ('Batuke', 'labrador', 'grande', 'dorado','macho',false, false));
perros.push(new Adopcion ('Negro', 'border collie', 'mediano', 'negro blanco','macho',false, false));
perros.push(new Adopcion ('Violeta', 'galgo', 'mediano', 'gris','hembra',false, false));
perros.push(new Adopcion ('Billy', 'fox terrier', 'pequeño', 'gris','macho',false, false));
perros.push(new Adopcion ('Couti', 'doberman', 'grande', 'negro','macho',false, false));
perros.push(new Adopcion ('Pepo', 'galgo', 'grande', 'gris','macho',false, false));
perros.push(new Adopcion ('Yago', 'labrador', 'grande', 'marron','macho',false, false));
//console.log(perros)


//busquedaPerros va a ser un filtro para elegir que perros buscamos
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
const razaPerros=[];
perros.forEach(a => {
    razaPerros.push(a.raza)
})
let filtroRaza  = razaPerros.filter(function (ele,pos){
    return razaPerros.indexOf(ele) == pos;
})
console.log(filtroRaza) 
filtroRaza.forEach((item) => {
    newSelectRaza(item);    
});     

function newSelectRaza (e){           
        
    if(e != undefined){
        let optionRaza = document.createElement("option");
        optionRaza.innerText = e
        
        //optionRaza.setAttribute("value","value1"); // poner e.raza?
        //let optionRazaTEXT = document.createTextNode("razas ?");
        //optionRaza.appendChild(optionRazaTEXT)

        selRAZA.appendChild(optionRaza)        
    }       
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
    //console.log(setB);
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
     
    //a ver si sale raza
    let razaElegido = selRAZA.value
    console.log(razaElegido)
    localStorage.setItem("setSelectorRaza",razaElegido)
    if (razaElegido != "todos"){busquedaRaza = busquedaprueba.filter(e => e.raza == razaElegido )} else{busquedaRaza = busquedaprueba.slice()} 
    console.log(busquedaRaza)

};


function listaPerros (){
    let nombres = []
    setB.forEach(a => {        
        nombres.push(a.nombre)          
    })   
    console.log(...nombres) // asi tenemos la lista de los perros encontrados    
};

if(localStorage.getItem("setBusquedaPerros") != null){
    listadoUpdate();
};

buscar.addEventListener("click",(e)=>{
    e.preventDefault();
    newSelectRaza(); 
    animejsRotate();
    seleccionDeBusqueda();
    localStorage.setItem("setBusquedaPerros",JSON.stringify(busquedaRaza));
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


//****        animejs        ****
//libreria de animaciones 
const animejsRotate = () =>{
    anime({
        targets: buscar,
        rotate: 360,
        duration: 3000,          
    })
};
//buscar.addEventListener('click', animejsRotate)

const animejsVaciar = () => {
    anime({
        targets: eliminar,
        scale:5,
        rotate: 90,
        translateX:100,
        duration: 1500,        
    })
};

anime({
    targets: '.subiBaja',
    keyframes: [
      {translateY: -20},
      {translateY: 20},
      //{translateY: 20},
      //{translateX: 0},
      
    ],
    duration: 5000,
    easing: 'easeOutElastic(1.2, .3)',
    loop: true
});





//API DOG "https://dog.ceo/dog-api/"

//let imgprueba='';
const urlAPIDog = "https://dog.ceo/api/breeds/image/random" //metes la url de la API
fetch (urlAPIDog)
    .then(response => response.json())
    .then(data => imagePerro(data))
    .catch (err => console.log(err));
    
    let imagePerro = (data) => {    
        let imgprueba = `<img src="${data.message}" alt="">`; //Con fetch ponemos una imagen random de una galeria de perros
        console.log(imgprueba)
        document.querySelector('#imggg').innerHTML = imgprueba; 
    };
