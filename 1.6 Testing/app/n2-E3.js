

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
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


const getEmployees = (id) => {

    return new Promise((resolve, reject) => {
        resolve(employees.find(elemento => elemento.id == id));
    })
}



const getSalary = (objetoInput) => {
    
    return new Promise((resolve, reject) => {

        if (salarias.find(elemento => elemento.id == objetoInput.id)){
            const result = salarias.find(elemento => elemento.id == objetoInput.id);
            resolve(result.salary)
            
            }else{  
                reject ("Error!!!");
        };
       
    })
}



getEmployee(1)
.then( result => getSalary(result) )
.then(result => console.log(result))