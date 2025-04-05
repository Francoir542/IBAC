function calcularPrecio() {
  const resultado = document.getElementById("resultado");
  const input = document.getElementById("kmInput");
  const km = parseFloat(input.value);
  const ub = 800;
  const km2 = 8000;

  // Limpiar clases previas
  resultado.classList.remove("exito", "error", "mostrar");

  // Validación: campo vacío o no numérico
  if (isNaN(km)) {
    resultado.textContent = "❌ Por favor, ingresa un número válido.";
    resultado.classList.add("error", "mostrar");

    setTimeout(() => {
      resultado.classList.remove("mostrar", "error");
      input.value = "";
    }, 5000);
    return;
  }

  // Validación: número negativo
  if (km < 0) {
    resultado.textContent = "❌ El valor no puede ser negativo.";
    resultado.classList.add("error", "mostrar");

    setTimeout(() => {
      resultado.classList.remove("mostrar", "error");
      input.value = "";
    }, 5000);
    return;
  }

  // Cálculo del costo
  const total = km <= 2 ? km2 : (km - 2) * (3 * ub) + km2;
  resultado.textContent = `💰 El domicilio cuesta $${total}`;
  resultado.classList.add("exito", "mostrar");

  setTimeout(() => {
    resultado.classList.remove("mostrar", "exito");
    input.value = "";
  }, 5000);
}

// Actualizar automáticamente el año del copyright
document.getElementById("year").textContent = new Date().getFullYear();

