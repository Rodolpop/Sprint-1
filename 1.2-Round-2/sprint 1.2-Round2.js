
// NIVEL 1

//Ejercicio 1


let suma = ((num1, num2)=>{

    return num1 + num2

})(5, 7)

console.log(suma)

//============================================================================

//============================================================================



// NIVEL 2

// Ejercicio 1

/*var libro = (titulo, editorial) => ({ titulo: titulo, editorial: editorial

})

console.log( libro ("Creativity", "hutchinson"));*/

//==============================================================================
    
// Ejercicio 2

/*class Persona {

    constructor (nombre){

        this.nombre = nombre;
    }

    decirNombre() {

        console.log(`El nombre de la persona es ${this.nombre}`);
    }

}

let persona = new Persona (`Beto`);

persona.decirNombre();*/

//=========================================================================
//=========================================================================

// NIVEL 3

//Ejercicio 1

/*class coche {


    constructor(marca,modelo,color){

        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

}

const focus = new coche("Ford","2001","verde");

const campra = new coche ( "Seat", "2002","gris");

console.log(focus);

console.log(campra);*/

//==============================================================================================


// NIVELL 3

//Exercici 1: Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta.
// Invoca-la amb diferents definicions.


class Jugador {

constructor(nombre, apellido) { 

  if(this.name = nombre,
    this.surname = apellido,
    this.constructor === Jugador) {  
      //Javascript no tiene ninguna palabra reservada para crear clases abstractas.
      //Una manera es que salte un error al intentar instanciar
    throw new Error("No es posible instanciar")
    };

  }

  datosJugador() {

    console.log(this.name + " " + this.surname);
  }
}

  class Player extends Jugador {

    constructor(nombre, apellido) {

      super(nombre, apellido);
    }

  }
 
  const defensa = (nombre, apellido) => new Jugador(nombre.apellido);
  
  const delantero = (nombre, apellido) => new Player (nombre, apellido);

  //No es posible instanciar la clase abstracta padre "defensa"
  //const defensa1 = defensa( "Carles","Puyol");
  //const defensa2 = defensa ("Lucho", "Malvarez");

  
  const delantero1 = delantero ("Gabriel", "Batistuta");
  const delantero2 = delantero ("Carlos", "Bueno");


  //defensa1.datosJugador();
  delantero1.datosJugador();
  delantero2.datosJugador();


