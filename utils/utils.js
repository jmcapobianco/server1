import fs from "node:fs";

const readData = () => {
    const jsonData = fs.readFileSync("./database/pizza.json", "utf8");
    const pizzas = JSON.parse(jsonData);
    return pizzas;
};

const writeData = (data) => {
    fs.writeFileSync(dataFilePath, data, 'utf8');
};

console.log(readData());

export { readData, writeData };