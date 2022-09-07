//API DOG "https://dog.ceo/dog-api/"

//let imgprueba='';
const urlAPIDog = "https://dog.ceo/api/breeds/image/random" //metes la url de la API
fetch (urlAPIDog)
    .then(response => response.json())
    .then(data => imagePerro(data))    
    .catch (err => console.log(err));
        

    let imagePerro = (data) => {    
        let imgprueba = `<img src="${data.message}" alt="">`; //Con fetch ponemos una imagen random de una galeria de perros
        //console.log(imgprueba)
        document.querySelector('#imggg').innerHTML = imgprueba; 
    };
