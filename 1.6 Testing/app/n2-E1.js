//NIVEL 2

//Ejercicio 1


function getSobre(){

    return new Promise ((resolve, reject) => {

   setTimeout (() => { resolve(" El ganador al empleado del mes es...");}, 3000);

    });
}

function getWin (){

    return new Promise ((resolve, reject) => {

        setTimeout (() => {resolve( "...PEDRO!");}, 2000);
    })

}

const getDatos = async () => {

    try {

        const res1 = await getSobre();
        const res = await getWin();
        console.log (res1);
        console.log (res);
            
    }
        catch (err) { console.log (err.message)
        }
    }

getDatos(); 