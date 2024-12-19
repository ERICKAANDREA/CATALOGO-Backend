const dotenv = require("dotenv");
dotenv.config();

const express= require("express");
const router = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors())
app.use(express.json())
app.use(router)


app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})

//app.post() //Obtener datos (Toda la petición que se hace desde el navegador todas son get)
//app.post() //Para crear datos ej. Para crear registro o nuevo usuario
//app.put() // Para actualizar registros
//app. patch() // Para actualizar registros
//app.delete() // Para eliminar registros

//Request nos trae toda la información, estamos trayendo una petición
// Response, devuelve el mensaje

//Para para el servidor se hace con control C y volvemos a iniciar para que tome los nuevos cambios
