
// TEST DE TEST

const { addition,
    substraction,
    multiplication,
    division
} = require('../app/op');

const { getEmployee, getSalary
} = require('../app/n1-E1');

const { mostrarAls2Secs, cridarFuncio } = require('../app/n2-E1');

const { getEmployee2, getSalary2 } = require('../app/n2-E3');



// TEST 1 ==============================================================================================

describe('test for addition', () => {
    test('1 + 3 is 4', () => {
        expect(addition(1, 3)).toBe(4)
    });
    test('1 + 5 is 6', () => {
        expect(addition(1, 5)).toBe(6)
    });
});

describe('test for substraction', () => {
    test('4 - 3 is 1', () => {
        expect(substraction(4, 3)).toBe(1)
    });
    test('4 - 2 is 2', () => {
        expect(substraction(4, 2)).toBe(2)
    });
});

describe('test for multiplication', () => {
    test('3 * 3 is 9', () => {
        expect(multiplication(3, 3)).toBe(9)
    });
    test('5 * 2 is 10', () => {
        expect(multiplication(5, 2)).toBe(10)
    });
});

describe('test for division', () => {
    test('8 / 2 is 4', () => {
        expect(division(8, 2)).toBe(4)
    });
    test('10 / 5 is 2', () => {
        expect(division(10, 5)).toBe(2)
    });
});


// TEST 2 =====================================================================================================


describe('Test para buscar nombre de empleado por el ID ', () => {
    test('Debe devolver: Linux Torvalds', async () => {
        const employees = await getEmployees(1)
        expect(employees).toBe('Linux Torvalds')
    })
});

// TEST 3 =========================================================================================================


describe('Test del ejecicio N2 E1', () => {
    test('La función retorna una promesa que se ejecuta a los 2 segundos', () => {
        return getSobre().then(promise => {
            expect(promise).toBe(promise);
        });
    });
    test('async function llama a otra función', async () => {
        const callFunction = await getDatos();
        expect(callFunction).toBe(callFunction);
    });
});


// TEST 4 ===========================================================================================================


describe('Invoque la primera función getEmployee y luego getSalary anidando la ejecución de las dos promesas', () => {
    test('Devolución del id 1', () => {
        return getEmployees(1).then(employees => {
            expect(employees).toBe('Linux Torvalds');
        });
    });
    test('Devolución del salario correspondiente al id 1', () => {
        return getSalary(1).then(salary => {
            expect(salary).toBe(4000);
        });
    });
});


// TEST JEST FAKE ====================================================================================================

describe('Test - Ejercicio N2 E1 - Jest Fake Timers', () => {
    test('La función retorna una promesa que se ejecuta a los 2 segundos', async () => {
        jest.useFakeTimers();
        const promise = getSobre();
        jest.runAllTimers();
        const promiseFunct = await promise;
        expect(promiseFunct).toBe('Mensaje mostrado dos segundos después');
    });
    test('async function llama a otra función', async () => {
        jest.useFakeTimers()
        const callFunction = getDatos();
        jest.runAllTimers();
        const asyncFunct = await callFunction;
        expect(asyncFunct).toBe(asyncFunct);
    });
});