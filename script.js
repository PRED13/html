const socket = io();

socket.on('nuevoRegistro', (corredor) => {
  const tabla = document.querySelector("table");
  const fila = tabla.insertRow();

  fila.innerHTML = `
    <td>${corredor.posicion}</td>
    <td>${corredor.kiid}</td>
    <td>${corredor.nombre}</td>
    <td>${corredor.apellidoP}</td>
    <td>${corredor.apellidoM}</td>
    <td>${corredor.carrera}</td>
    <td>${corredor.categoria}</td>
    <td>${corredor.tiempoInicio}</td>
    <td>${corredor.tiempoFinal}</td>
  `;
});
