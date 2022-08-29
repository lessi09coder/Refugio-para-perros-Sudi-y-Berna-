class Adopcion {
    constructor(nombre,raza,tamaño,color,sexo,castrado,adoptado) {
        this.nombre = nombre;
        this.raza = raza;
        this.tamaño = tamaño;
        this.color = color;
        this.sexo = sexo;
        this.castrado = castrado
        this.adoptado = adoptado
    }   
}

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