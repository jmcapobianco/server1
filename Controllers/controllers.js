import { readData, writeData } from "../utils/utils";


// getters -> funciones que toman datos de la db
const getPizzas = () => {
    const pizzas = readData();
    return pizzas;
};


const getPizzasById = (id) => {
    const pizzas = readData();
    const pizza = pizzas.find((pizza) => pizza.id === id);
    return pizza;
};


const addPizza = (nuevaPizza) => {
    const pizzas = readData();
    const pizza = pizzas.find((pizza) => pizza.nombre === id);
    if (pizza) {
         return "Ya existe la pizzarda"
    } else {
        pizzas.push(nuevaPizza);
        writeData(JSON.stringify(pizzas));
        return "Pizza agregada con exito!"
    }
};

addPizza({id: 11, ingredientes: ["Tomate", "Queso"], nombre: "la boss", precio: 140, tamaño: "grande",});

const deletePizzaById = (id) => {
    const pizzas = readData();
    const pizza = pizzas.find (pizza => pizza.id !== id);
    if (pizza) {
        const nuevasPizzas = pizzas.filter((pizza) => pizza.id !==id);
        writeData(JSON.stringify(nuevasPizzas));
        return "Pizza borrada con exito.";
    }
    return "La pizza no existe";
};

console.log(deletePizzaById(1));

export {getPizzas, getPizzasById, addPizza, deletePizzaById};