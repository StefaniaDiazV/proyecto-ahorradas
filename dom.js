// Eventos en btn para las diferentes vistas

const btnNvaOperacion = document.getElementById("btn-agrega-operación"); //Btn +Nueva Operación de la section vista balance
const vistaBalance = document.getElementById("vista-balance"); //Section vista balance
const nuevaOperacion = document.getElementById("nueva-operacion"); //Section Nueva Operación
const btnCancelNvaOperacion = document.getElementById("cancela-nva-operacion"); //Btn "cancel" de la section Nueva Operacion
const btnBalance = document.getElementById("btn-balance"); //Btn Balance del header
const btnCategorias = document.getElementById("btn-categorias"); //Btn Categorias del header
const btnReportes = document.getElementById("btn-reportes"); ////Btn Reportes del header
const vistaCategorias = document.getElementById("categorias"); // Section Categorías
const vistaReportes = document.getElementById("reportes"); // Section Reportes
const cardEditarCategoria = document.getElementById("editar-categorias"); // Section Editar Categorías

btnNvaOperacion.addEventListener("click", () => {
  vistaBalance.classList.add("d-none");
  nuevaOperacion.classList.remove("d-none");
  vistaCategorias.classList.add("d-none");
});

btnCancelNvaOperacion.addEventListener("click", () => {
  nuevaOperacion.classList.add("d-none");
  vistaBalance.classList.remove("d-none");
  vistaCategorias.classList.add("d-none");
});

btnBalance.addEventListener("click", () => {
  vistaBalance.classList.remove("d-none");
  nuevaOperacion.classList.add("d-none");
  vistaCategorias.classList.add("d-none");
  vistaReportes.classList.add("d-none");
});

btnCategorias.addEventListener("click", () => {
  vistaCategorias.classList.remove("d-none");
  vistaBalance.classList.add("d-none");
  nuevaOperacion.classList.add("d-none");
  vistaReportes.classList.add("d-none");
});

btnReportes.addEventListener("click", () => {
  vistaReportes.classList.remove("d-none");
  vistaBalance.classList.add("d-none");
  nuevaOperacion.classList.add("d-none");
  vistaCategorias.classList.add("d-none");
});
