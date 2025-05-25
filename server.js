const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const db = require("./db");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Insertar corredor
app.post("/registro", (req, res) => {
  const {
    posicion, kiid, nombre, apellidoP,
    apellidoM, carrera, categoria, tiempoInicio, tiempoFinal
  } = req.body;

  const query = `
    INSERT INTO corredores (posicion, kiid, nombre, apellidoP, apellidoM, carrera, categoria, tiempoInicio, tiempoFinal)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [posicion, kiid, nombre, apellidoP, apellidoM, carrera, categoria, tiempoInicio, tiempoFinal], (err, result) => {
    if (err) return res.status(500).send("Error al guardar");

    const nuevoCorredor = { id: result.insertId, ...req.body };
    io.emit("nuevoRegistro", nuevoCorredor);
    res.status(201).json(nuevoCorredor);
  });
});

// Obtener corredores
app.get("/registros", (req, res) => {
  db.query("SELECT * FROM corredores", (err, resultados) => {
    if (err) return res.status(500).send("Error al leer registros");
    res.json(resultados);
  });
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
