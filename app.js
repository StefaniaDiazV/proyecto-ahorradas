// Eventos en btn para las diferentes vistas

const btnNvaOperacion = document.getElementById("btn-agrega-operación"); //Btn +Nueva Operación de la section vista balance
const vistaBalance = document.getElementById("vista-balance"); //Section vista balance
const nuevaOperacion = document.getElementById("nueva-operacion"); //Section Nueva Operación
const btnCancelNvaOperacion = document.getElementById("cancela-nva-operacion"); //Btn "cancel" de la section Nueva Operacion

btnNvaOperacion.addEventListener("click", () => {
  vistaBalance.classList.add("hidden");
  nuevaOperacion.classList.remove("hidden");
});

btnCancelNvaOperacion.addEventListener("click", () => {
  nuevaOperacion.classList.add("hidden");
  vistaBalance.classList.remove("hidden");
});
