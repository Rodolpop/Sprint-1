
//NIVEL 1

//   Ejercicio 1

//Crea una función que imprima recursivamente un mensaje por la consola con demoras de un segundo.

const contDesp = (a) => {

    if (a < 0 ) return

         console.log (a)

     setTimeout (() => {

        return contDesp ( a - 1)
        
    },1000);

}

contDesp (10)


//===========================================================================================


//Ejercicio 2

//Crea una función que, al ejecutarla, escriba una frase en un archivo.

// N1 E2 Crea una funció que, en executar-la, escrigui una frase en un fitxer.


   
const fs = require('fs');

const writeText = () => {
    fs.writeFile('data1.txt', 'Chris Rock, Caranchoa', (err) => {
      if (err) {
        throw err
      }
          console.log('Error: ${err}');
    })
  }
  
  writeText()


//============================================================================================

//Ejercicio 3

// Crea otra función que muestre por consola el contenido del archivo del ejercicio anterior.

fs.readFile('data1.txt', 'utf8', (err,data) => {
    if (!err) {
      console.log(data);
    }else{
    console.log('Error: ${err}');
    }
  });

//===========================================================================================
//===========================================================================================

