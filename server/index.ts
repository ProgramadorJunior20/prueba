import app from "./app"
import { startConnection } from "./database"

startConnection()
app.listen(3000)
console.log('Escuchando en el puerto 3000')