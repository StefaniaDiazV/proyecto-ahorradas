// Eventos en btn para las diferentes vistas

const vistaBalance = document.getElementById("vista-balance"); //Section vista balance
const nuevaOperacion = document.getElementById("nueva-operacion"); //Section Nueva Operación
const vistaCategorias = document.getElementById("categorias"); // Section Categorías
const vistaReportes = document.getElementById("reportes"); // Section Reportes
const cardEditarCategoria = document.getElementById("editar-categorias"); // Section Editar Categorías

const vistaEditarOperacion = document.getElementById("vista-editar-operacion");

const btnNvaOperacion = document.getElementById("btn-agrega-operación"); //Btn +Nueva Operación de la section vista balance
const btnCategorias = document.getElementById("btn-categorias"); //Btn Categorias del header
const btnBalance = document.getElementById("btn-balance"); //Btn Balance del header
const btnCancelNvaOperacion = document.getElementById("cancela-nva-operacion"); //Btn "cancel" de la section Nueva Operacion
const btnReportes = document.getElementById("btn-reportes"); ////Btn Reportes del header
const btnsEditar = document.getElementsByClassName("editar-btn");
// const inputAgregarCategorias = document.getElementById('agregar-categoria-input');
// const btnAgregarCategorias = document.getElementById('boton-categorias');

btnNvaOperacion.addEventListener("click", () => {
  vistaBalance.classList.add("d-none");
  nuevaOperacion.classList.remove("d-none");
  vistaCategorias.classList.add("d-none");
  cardEditarCategoria.classList.add("d-none");
  vistaEditarOperacion.classList.add("d-none");
  vistaReportes.classList.add("d-none");
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
  vistaEditarOperacion.classList.add("d-none");
  cardEditarCategoria.classList.add("d-none");
});

btnCategorias.addEventListener("click", () => {
  vistaCategorias.classList.remove("d-none");
  vistaBalance.classList.add("d-none");
  nuevaOperacion.classList.add("d-none");
  vistaReportes.classList.add("d-none");
  cardEditarCategoria.classList.add("d-none");
  vistaEditarOperacion.classList.add("d-none");
});

btnReportes.addEventListener("click", () => {
  vistaReportes.classList.remove("d-none");
  vistaBalance.classList.add("d-none");
  nuevaOperacion.classList.add("d-none");
  vistaCategorias.classList.add("d-none");
});

// Función agregar categorias-select

const categorias = [
  "Servicios",
  "Comida",
  "Salidas",
  "Transporte",
  "Educación",
  "Trabajo",
];
const selects = document.getElementsByClassName("categorias-select");

const generarCategorias = () => {
  for (let i = 0; i < selects.length; i++) {
    const select = selects[i];

    if (select.classList.contains("filtro-categoria")) {
      select.innerHTML = "<option>Todas</option>";
    } else {
    }

    for (let j = 0; j < categorias.length; j++) {
      select.innerHTML += `<option value=${categorias[j]}>${categorias[j]}</option>`;
    }
  }
};


generarCategorias();

const btnAgregarCategorias = document.getElementById("boton-categorias");

btnAgregarCategorias.addEventListener("click", () => {
  agregarCategorias();
  limpiarInputCategorias()
});

const inputAgregarCategorias = document.getElementById(
  "agregar-categoria-input"
);

const agregarCategorias = () => {
  categorias.push(inputAgregarCategorias.value);

  const vaciarselects = () => {
    for (let i = 0; i < selects.length; i++) {
      const select = selects[i];

      for (let j = 0; j < categorias.length; j++) {
        select.innerHTML = "";
      }
    }
  };

  vaciarselects();

  generarCategorias();
};

const limpiarInputCategorias = () => {
  inputAgregarCategorias.value = '';
}

operaciones = [];

const mostraroperaciones = (arr) => {
  if (!arr.length) {
    document.getElementById("sin-operaciones").classList.remove("d-none");
    document.getElementById("con-operaciones").classList.add("d-none");
  } else {
    document.getElementById("sin-operaciones").classList.add("d-none");
    document.getElementById("con-operaciones").classList.remove("d-none");
  }
};

mostraroperaciones(operaciones);

//Funcion limpiar input-Nueva-operacion
const limpiarVistaNuevaOperacion = () => {
  descripcionOperacion.value = "";
  montoOperacion.value = "0";
  tipoOperacion.value = "Gasto";
  categoriaNuevaOperacion.value = "Servicios";
  fechaOperacion.value = "";
};
//Funcion limpiar input-Nueva-operacion

// Funcion para crear Objeto de cada operacion
const crearObjOperaciones = () => {
  objOperaciones = {
    descripcion: descripcionOperacion.value,
    monto: montoOperacion.value,
    tipo: tipoOperacion.value,
    categoria: categoriaNuevaOperacion.value,
    fecha: fechaOperacion.value,
  };
  nuevaOperacion.classList.add("d-none");
  vistaBalance.classList.remove("d-none");
  vistaCategorias.classList.add("d-none");

  limpiarVistaNuevaOperacion();
  agregarObjetos();
};

// Funcion llenar array operaciones
const descripcionOperacion = document.getElementById("descripcion-operacion"); // input-descripcion vista nueva operacion
const montoOperacion = document.getElementById("monto-operacion"); // input-monto
const tipoOperacion = document.getElementById("tipo-operacion"); // select-tipo de operacion
const categoriaNuevaOperacion = document.getElementById(
  "categoria-nueva-operacion"
);
const fechaOperacion = document.getElementById("fecha-operacion");
const btnAgregarOperacion = document.getElementById("btn-agregar-operacion");
// Funcion llenar array operaciones

const agregarObjetos = () => {
  operaciones.push(objOperaciones);
};

// Funcion para pintar objetos de las operacion en el HTML
const pintarObjetos = () => {
  const conOperaciones = document.getElementById("operaciones");
  mostraroperaciones(operaciones);
  nuevodiv = document.createElement("div");
  nuevodiv.classList.add("container");
  nuevodiv.innerHTML = `
    <div class="row">
      <div class="col-md-3 col-sm-6 fw-bold">
        <h6>${objOperaciones.descripcion}</h6>
      </div>
      <div class="col-md-3 col-sm-6">
        <span class="nombres-categorias">${objOperaciones.categoria}</span>
      </div>
      <div class="col-md-2 col-sm-6 text-end">
      ${objOperaciones.fecha}
      </div>
      <div class="col-md-2 col-sm-6 fw-bold text-end">
      $${objOperaciones.monto}
      </div>
      <div class="col-md-2 col-sm-6 text-wrap text-end">
        <p>
          <a href="#" class="link-categoria">Editar</a>
          <a href="#" class="link-categoria">Eliminar</a>
        </p>
      </div>
    </div>
    `;
  conOperaciones.appendChild(nuevodiv);
};

// Funcion Boton Agregar Operacion (Crear Objeto, pushear Obj al Array)
btnAgregarOperacion.addEventListener("click", crearObjOperaciones);

// Ejecucion funcion btn para pintar los objetos en HTML
btnAgregarOperacion.addEventListener("click", pintarObjetos);
