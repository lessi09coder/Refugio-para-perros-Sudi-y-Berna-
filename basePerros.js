//Variables Principales

let busquedaPerros;
let busquedaprueba = [];
let busquedaRaza = [];
const tabla = document.getElementById("perrosTBody");
const buscar = document.querySelector("#buscar");
const eliminar = document.querySelector("#eliminar");

//variables para los botones de select (Buscar perros por sus caracteristicas)
let selColor = document.getElementById("selectColor")
let selTamaño = document.getElementById("selectTamanos");
let selRAZA = document.getElementById("selectRAZA");

let setBusquedaPerros;
let setB ; // para la tabla y para la lista de nombres de perros encontrados




//FUNCIONES

//***      CREAR TABLA     ****
function newRow (newPerro){
    const row = document.createElement("tr");
    // podemos poner un animacion por cada fila de perro encontrado
    row.classList.add("dropTabla");
    
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
    row.append(aux);
    
    tabla.append(row);

    animaciontabla();
};


//FILTRO POR RAZAS
buscarRaza(); // se ejecuta cada vez para que aparesca en el select la opcion de razas cuando se inicia por primera vez a la web
function buscarRaza(){
    const razaPerros=[];
    perros.forEach(a => {razaPerros.push(a.raza)})

    let filtroRaza = [];
    filtroRaza  = razaPerros.filter(function (ele,pos){        
    return razaPerros.indexOf(ele) == pos;
    })
    console.log(filtroRaza) 
    filtroRaza.forEach((e) => {
            if(e != undefined){
                let optionRaza = document.createElement("option");
                optionRaza.innerText = e;           
                selRAZA.appendChild(optionRaza);
            }        
        }
    );    
};

//ACTUALIZACION DE PERROS ENCONTRADOS
function listadoUpdate() {
    tabla.innerHTML = "";      
    setB = JSON.parse(localStorage.getItem("setBusquedaPerros"));
   
    //Para que queden guardados los select que elegimos
    selTamaño.value = localStorage.getItem("setSelectorTamanos");
    selColor.value = localStorage.getItem("setSelectorColor");
    selRAZA.value = localStorage.getItem("setSelectorRaza") 
               
    setB.forEach((item) => {        
        newRow(item)            
    });            
};

function seleccionDeBusqueda(){
    
    let tamañosElegido = selTamaño.value;
    localStorage.setItem("setSelectorTamanos",tamañosElegido)
       
    if (tamañosElegido != "todos"){busquedaPerros = perros.filter(e => e.tamaño == tamañosElegido )} 
    else{busquedaPerros= perros.slice()} 
    

    let colorElegido = selColor.value;
    localStorage.setItem("setSelectorColor",colorElegido)
           
    if (colorElegido != "todos"){busquedaprueba = busquedaPerros.filter(e => e.color == colorElegido )} else{busquedaprueba = busquedaPerros.slice()} 
    //console.log(busquedaprueba)
     
    let razaElegido = selRAZA.value
    //console.log(razaElegido)
    localStorage.setItem("setSelectorRaza",razaElegido)
    if (razaElegido != "todos"){busquedaRaza = busquedaprueba.filter(e => e.raza == razaElegido )} else{busquedaRaza = busquedaprueba.slice()} 
    //console.log(busquedaRaza)

};

//LISTAR PERROS ENCONTRADOS
function listaPerros (){
    let nombresPerrosLista = []
    setB.forEach(a => {        
        nombresPerrosLista.push(a.nombre)          
    })   
   // console.log("Los perros disponibles son:",...nombresPerrosLista) // asi tenemos la lista de los perros encontrados 
    console.log(`Los perros disponibles son: ${nombresPerrosLista},`);
};

//SETEAR EN LOCAL STORAGE LOS PERROS ENCONTRADOS COMO UN STRINGIFY
function setearPerrosLoStg(){
    localStorage.setItem("setBusquedaPerros",JSON.stringify(busquedaRaza));
}

//cuando esta el local storage vacio y se actualiza la pagina:
if(localStorage.getItem("setBusquedaPerros") != null){
    listadoUpdate();
}; 

buscar.addEventListener("click",(e)=>{    
    e.preventDefault();   
    animejsRotate();
    seleccionDeBusqueda();
    setearPerrosLoStg();     
    listadoUpdate()    
    listaPerros();     
});

eliminar.onclick = () => {  
    tabla.innerHTML= "";
    animejsVaciar();
    localStorage.clear();
};

//ponemos un pop-up para provomer una adopcion en particular
 setTimeout(() => {
    swal({
        title: "Un perro quiere ser adoptado!",
        text: "Encontramos un perro que puede ser tuyo !",        
        buttons:["NO..." , true],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("GRACIAS, NOS PONDREMOS EN CONTACTO!", {
            
          });
        } else {
          swal("Un perrito se siente triste :(");
        }
      });
}, 1000); 