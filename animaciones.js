
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
    ],
    duration: 5000,
    easing: 'easeOutElastic(1.2, .3)',
    loop: true
});


//animacion de tabla
const animaciontabla=() => { anime({ 
    targets: ".dropTabla",    
    keyframes: [
        {translateY:10},
        {translateY:0},        
    ],    
    delay: anime.stagger(100),
    loop: false,
})
}