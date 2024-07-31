// npm store - para instalar las dependencias

// .json - persiste data, no se puede hacer bucles, if, etc. solo se guarda data


// .gitignore - ignora archivos

// .env.example - se declaran las variables que uno va a usar 

import net from "node:net";
import dotenv from "dotenv";
dotenv.config();


const options = {
    port: process.env.PORT,
    host: process.env.HOST
}

const clientTCP = net.connect(options);

clientTCP.on("connect", () => {
    console.log("Me conecte a un servidor");
});

clientTCP.on("data", () => {
    console.log("El servidor me mandó un mensaje.");
});