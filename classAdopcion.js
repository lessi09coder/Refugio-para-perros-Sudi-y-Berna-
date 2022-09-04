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

perros.push(new Adopcion ('Sudan', 'Labrador', 'grande', 'dorado','macho',false, false));
perros.push(new Adopcion ('Berna', 'Pitbull', 'mediano', 'atigrado','hembra',false ,false));
perros.push(new Adopcion ('Pluto', 'Yorkshire Terrier', 'pequeño', 'gris','macho',true , false));
perros.push(new Adopcion ('Nala', 'Gran Danes', 'mediano','blanco','hembra',true, false));
perros.push(new Adopcion ('Cachito', 'Boder Terrier', 'pequeño', 'marron','macho',false, false));
perros.push(new Adopcion ('Simon', 'Dachshund', 'pequeño', 'negro','macho',false, true));
perros.push(new Adopcion ('Sabandija', 'Cruza', 'pequeño', 'blanco','macho',false, false));
perros.push(new Adopcion ('Batuke', 'Labrador', 'grande', 'dorado','macho',false, false));
perros.push(new Adopcion ('Negro', 'Border Collie', 'mediano', 'negro blanco','macho',false, false));
perros.push(new Adopcion ('Violeta', 'Galgo', 'mediano', 'gris','hembra',false, false));
perros.push(new Adopcion ('Billy', 'Fox Terrier', 'pequeño', 'gris','macho',false, false));
perros.push(new Adopcion ('Couti', 'Doberman', 'grande', 'negro','macho',false, false));
perros.push(new Adopcion ('Pepo', 'Galgo', 'grande', 'gris','macho',false, false));
perros.push(new Adopcion ('Yago', 'Labrador', 'grande', 'marron','macho',false, false)); 