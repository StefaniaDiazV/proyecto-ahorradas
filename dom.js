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

// Función agregar categorias-select

const categorias = [
  'Comida',
  'Servicios',
  'Salidas',
  'Transporte',
  'Educación',
  'Trabajo'
];

const generarCategorias = () => {
  const selects = document.getElementsByClassName('categorias-select');
  for(let i = 0; i < selects.length; i++){
    const select = selects[i];
    if(select.classList.contains('filtro-categoria')){
      select.innerHTML = '<option>Todas</option>'
    }
    for(let j = 0; j < categorias.length; j++){
      select.innerHTML += `<option value=${categorias[j]}>${categorias[j]}</option>`
    }
  }
}

generarCategorias();


// Funcion Mostrar tilulos-Operaciones

const operaciones = [];

const mostraroperaciones = (arr) => {
  if(!arr.length){
    document.getElementById('sin-operaciones').classList.remove('d-none')
    document.getElementById('con-operaciones').classList.add('d-none')
  } else { 
    document.getElementById('sin-operaciones').classList.add('d-none')
    document.getElementById('con-operaciones').classList.remove('d-none')
  }
} 

mostraroperaciones(operaciones);

// Funcion llenar operaciones 

const descripcionOperacion = document.getElementById('descripcion-operacion'); // input-descripcion vista nueva operacion
const montoOperacion = document.getElementById('monto-operacion'); // input-monto 
const tipoOperacion = document.getElementById('tipo-operacion'); // select-tipo de operacion
const categoriaNuevaOperacion = document.getElementById('categoria-nueva-operacion');
const fechaOperacion = document.getElementById('fecha-operacion');
const btnAgregarOperacion = document.getElementById('btn-agregar-operacion');


descripcionOperacion.addEventListener('change', () => {
  console.log(descripcionOperacion.value)
})


const crearObjOperaciones = () => {
 
};


btnAgregarOperacion.addEventListener('click', () => {
  obj = {
    descripcion:descripcionOperacion.value,
    monto:montoOperacion.value,
    tipo:tipoOperacion.value,
    categoria:categoriaNuevaOperacion.value,
    fecha: fechaOperacion.value
  }
  operaciones.push(obj)
})

console.log(operaciones)