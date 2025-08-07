// Función utilitaria para obtener hora, fecha o fecha y hora
function obtenerFechaHora(opcion = "hora") {
  const ahora = new Date();
  if (opcion === "hora") {
    return ahora.toLocaleTimeString();
  } else if (opcion === "fecha") {
    return ahora.toLocaleDateString();
  } else if (opcion === "fecha-hora") {
    return ahora.toLocaleDateString() + " " + ahora.toLocaleTimeString();
  } else {
    return ahora.toString();
  }
}

// Arreglo para almacenar los vehículos ingresados
const vehiculosIngresados = [];

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-ingreso-vehiculo");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const tipoVehiculo = document
        .getElementById("tipo-vehiculo")
        .value.trim();
      const placa = document.getElementById("placa").value.trim();

      if (tipoVehiculo && placa) {
        // Obtener la hora, fecha o ambas según se requiera
        const horaIngreso = obtenerFechaHora("hora");
        // const fechaIngreso = obtenerFechaHora("fecha");
        // const fechaHoraIngreso = obtenerFechaHora("fecha-hora");
        // Crear objeto vehículo
        const vehiculo = {
          tipoVehiculo: tipoVehiculo,
          placa: placa,
          horaIngreso: horaIngreso,
          // fechaIngreso: fechaIngreso,
          // fechaHoraIngreso: fechaHoraIngreso,
        };
        // Guardar en el arreglo
        vehiculosIngresados.push(vehiculo);
        console.log("Vehículos ingresados:", vehiculosIngresados);
        // Aquí puedes agregar más lógica, como limpiar el formulario o mostrar los datos en pantalla
      } else {
        alert("Por favor complete todos los campos obligatorios.");
        return;
      }
    });
  }
});
