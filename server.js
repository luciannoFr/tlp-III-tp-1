// Importamos las dependencias necesarias para el servidor
import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

//usamos cors
app.use(cors())

// configuramos la carpeta estatica para servir lo que hay adentro
app.use(express.static('public'))

// RUTA PRINCIPAL q devuelve el mensaje de bienvenida personalizado
// recibe el nombre como parametro en la URL
app.get('/api/saludo/:nombre', (req, res) => {
  // sacamos el nombre de los parametros de la url
  const nombre = req.params.nombre
  
  // el mensaje
  const mensaje = `Hola, ${nombre}, bienvenido a la aplicacion`
  
  // mandamos la respuesta en json
  res.json({ mensaje })
})

// ponemos el servidor en el puerto que pusimos antes
app.listen(port, () => {
  console.log(`Servidor arrancando en http://localhost:${port}`)
})