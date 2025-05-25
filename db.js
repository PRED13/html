// database.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("carrera.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS corredores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    posicion INTEGER,
    kiid TEXT,
    nombre TEXT,
    apellidoP TEXT,
    apellidoM TEXT,
    carrera TEXT,
    categoria TEXT,
    tiempoInicio TEXT,
    tiempoFinal TEXT
  )`);
});

module.exports = db;
