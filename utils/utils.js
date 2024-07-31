import fs from "node:fs";

const readData = () => {
    const jsonData = fs.readFileSync("./database/pizza.json");
    const pizzas = JSON.parse(jsonData);
    return pizzas;
};

const writeData = () => {};

console.log(readData());