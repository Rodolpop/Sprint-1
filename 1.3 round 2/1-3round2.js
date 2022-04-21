

// NIVEL 1


// Ejercicio 1

// Crea una función que devuelva una Promise que invoque la función resolve() o reject() que recibe. 
// Inbócala pasándole las dos funciones de forma que impriman un mensaje diferente
// dependiendo de si la Promise se resuelve o no.


const p = (x) => {
    let Prom = new Promise((resolve, reject) => {

        if (x === 10) {
            resolve(`La variable es igual a 10`);
        } else {
            reject(`La variable no es igual a 10`);
        }
    });

    return Prom
}

//==================================================================


//Ejercicio 2

const numeroElecto = (numero, callback)=>{

    if(numero >= 5){

        callback({

            error:true,
            message:"El número es mayor a 5",

        }, null)
        return

    }else{

        callback(null, {

            error:false,
            value:"El número es menor a 5",
        })
        return
    }
}

numeroElecto(2,(err, result)=>{

    if(err){

        console.log(err.message);

    }else{

        console.log(result.value);
    }
})



//==============================================================================



let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salarias = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000

}];

//=====================================================================================
//=====================================================================================

//NIVEL 2

//Ejercicio 1

//Dados los objetos employees y salaries, 
//crea una arrow function getEmployee que devuelva una Promise 
//efectuando la búsqueda en el objeto por su id.

const getEmployee = (id) => {

    const employee = employees[id];

    return new Promise((resolve, reject) => {

        if (employee) {
            resolve(employee);

        } else {
            reject(`No existe un empleado con ese id`);
        }

    });
}


console.log(getEmployee(2))

//=======================================================================================================================
//Ejercicio 2

//Crea otra arrow function getSalary
//que reciba como parámetro un objeto employee y devuelva su salario.


//La de getSalary() está mucho mejor, aunque te puedes estalviar uno de los dos .find si eres astuto ;)




const getSalary = (objetoInput) => {

    return new Promise((resolve, reject) => {

        if (salarias.find(elemento => elemento.id == objetoInput.id)) {
            const result = salarias.find(elemento => elemento.id == objetoInput.id);
            resolve(result.salary)

        } else {
            reject("Error!!!");
        };

    })
}




//Ejercicio 3

//Invoca la primera función getEmployee
//y después getSalary anidando la ejecución de las dos promesas.

getEmployee(1)
.then( result => getSalary(result) )
.then(result => console.log(result))



//=============================================================================
//==========================================================================

    //NIVEL 3

    //Ejercicio 3

    //Fija un elemento catch en la invocación del nivel anterior
    // que capture cualquier error y lo muestre por la consola.

 //getEmployee(2)
 //.then(res => getSalary(result))
 //.then(res => console.log(result)) <===COMENTÉ ESTO PARA ESTALVIAR :)
 

 .catch(res => console.log("Id no existe"))



