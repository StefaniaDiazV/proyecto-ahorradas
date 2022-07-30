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

// FUNCION MOSTRAR LA FECHA ACTUAL

//funcion que toma los datos de fecha del dia y guarda en
//multiples variables para despues contacternarlas
//para mantener siempre dos digitos le concatena 0 como caracter
const generarFechaActual = () => {
  // variable FECHA recibe la fecha del DIA en formato FECHA
  let fecha = new Date();
  //variable MES se lleva el mes actual pero le suma 1 por que january=0
  let mes = fecha.getMonth() + 1;
  let dia = fecha.getDate();
  let anio = fecha.getFullYear();
  //si tiene menos de 10 entonces es un solo digito, quiero agregarle el 0
  if (dia < 10) {
    dia = "0" + dia;
  }
  if (mes < 10) {
    mes = "0" + mes;
  }
  //la funcioan devuelve 2022-07-28 (aca hiciste un chiste tonto)
  return `${anio}-${mes}-${dia}`;
};

//funcion para a cada input darle la fecha de hoy
const generarFechaActualValue = () => {
  // me llevo todos los inputs
  const inputsFecha = document.getElementsByClassName("inputs-fecha");
  //voy input por input
  for (let i = 0; i < inputsFecha.length; i++) {
    //select va a ser el elemento input
    const select = inputsFecha[i];
    //el valor de ese input va a recivir el return de la funcion. ej: 2022-07-28
    select.value = generarFechaActual();
  }
};
// aca ejecutamos todo. lo anterior eran definiciones, y en este paso, ejecuto esas
//definiciones de funcion: primero ejecuto generarFechaActualValue y esa llama a
//generarFechaActual
generarFechaActualValue();

// ***********************************************
//                CATEGORIAS
// **********************************************

// Función agregar categorias-select

const categorias = [
  "Servicios",
  "Comida",
  "Salidas",
  "Transporte",
  "Educación",
  "Trabajo",
];

let operaciones = JSON.parse(localStorage.getItem("operaciones")) || [];

//me llevo todos los select con label categorias
const selects = document.getElementsByClassName("categorias-select");

//funcion para crear las opciones de los select en base al array "categorias"
const generarCategorias = () => {
  //por cada select : tres en total
  for (let i = 0; i < selects.length; i++) {
    const select = selects[i];
    //me fijo si el select que esta pasando por el FOR contiene esta clase
    //para agregarle la opcion "TODAS"
    //si no es, que siga de largo. no hace nada.
    if (select.classList.contains("filtro-categoria")) {
      select.innerHTML = "<option>Todas</option>";
    } else {
    }
    //por cada select, recorro el array de sus categorias y le agrego la opcion
    //en total ejecuta 3 * 6 (cantidad de categorias) = 18
    //porque este FOR esta dentro del otro FOR
    for (let j = 0; j < categorias.length; j++) {
      select.innerHTML =
        select.innerHTML +
        `<option value=${categorias[j]}>${categorias[j]}</option>`;
    }
  }
};

//ahora que definio todo, ejecuto la funcion.
generarCategorias();

//me llevo el boton para agregar categorias
const btnAgregarCategorias = document.getElementById("boton-categorias");

//defino un listener con click y ejecuto las funciones
btnAgregarCategorias.addEventListener("click", () => {
  agregarCategorias();
  limpiarInputCategorias();
  pintarCategorias(categorias);
});

// FUNCION PARA AGREGAR LAS CATEGORIAS AL ARRAY Y VACIAR LOS SELETS

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

// FUNCION PARA VACIAR LOS INPUT DE CATEGORIAS
const limpiarInputCategorias = () => {
  inputAgregarCategorias.value = "";
};

//Funciones para operaciones

// operaciones = [];
// FUNCION PARA PINTAR LAS CATEGORIAS

const pintarCategorias = (arr) => {
  const divListaCategorias = document.getElementById("lista-categorias");
  let str = "";
  arr.forEach((categoria) => {
    str += `<div class="row margen-filas">
    <div class="col-8">
      <span class="nombres-categorias">${categoria}</span>
    </div>
    <div class="col-4 contenedor">
      <a class="link-categoria margen-derecho editar-btn"
        href=""
        >Editar</a>
      <a class="link-categoria" href="">Eliminar</a>
      </div>
    </div>`;
  });
  divListaCategorias.innerHTML = str;
};

pintarCategorias(categorias);

// ***********************************************
//                 OPERACIONES
// **********************************************

// operaciones = [];

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
  fechaOperacion.value = generarFechaActual();
};

// Funcion para crear Objeto de cada operacion
const crearObjOperaciones = () => {
  objOperaciones = {
    id: uuidv4(),
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
  localStorage.setItem("operaciones", JSON.stringify(operaciones));
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
  // localStorage.setItem("operaciones", JSON.stringify(operaciones));
};

// Funcion para pintar objetos de las operacion en el HTML
const pintarObjetos = (arr) => {
  const conOperaciones = document.getElementById("operaciones");
  // console.log(conOperaciones);
  let str = "";
  mostraroperaciones(operaciones);
  arr.forEach((operacion) => {
    const { id, descripcion, categoria, fecha, monto, tipo } = operacion;
    str += `
    <div class="row margen-superior">
      <div class="col-md-3 col-sm-6 fw-bold">
        <h6>${descripcion}</h6>
      </div>
      <div class="col-md-3 col-sm-6">
        <span class="nombres-categorias">${categoria}</span>
      </div>
      <div class="col-md-2 col-sm-6 text-end">
      ${fecha}
      </div>
      <div class="col-md-2 col-sm-6 fw-bold text-end  ${
        tipo === "Ganancia" ? "text-success" : "text-danger"
      }">
      ${tipo === "Ganancia" ? "+" : "-"}$${monto}
      </div>
      <div class="col-md-2 col-sm-6 text-wrap text-end">
        <p>
          <a id="" href="#" data-id= "${id}" class="link-categoria btn-edita-op">Editar</a>
          <a id="" href="#" data-id="${id}" class="link-categoria btn-elimina-op">Eliminar</a>
        </p>
      </div>
    </div>
    `;
  });
  conOperaciones.innerHTML = str;
};

pintarObjetos(operaciones);

// Funcion Boton Agregar Operacion (Crear Objeto, pushear Obj al Array)
btnAgregarOperacion.addEventListener("click", crearObjOperaciones);
// Ejecucion funcion btn para pintar los objetos en HTML
btnAgregarOperacion.addEventListener("click", () => {
  pintarObjetos(operaciones);
});

//nahuenuevo poc
//meter en cualquier variable lo que se haya guardado en LS
// const banana = JSON.parse(localStorage.getItem("operaciones", operaciones));
//mostrar que carajo guardo
// console.log(banana)

// ahora intento meter lo q haya guardado en el html
//mostraroperaciones(banana);
const btnsEliminar = document.querySelectorAll(".btn-elimina-op");
const btnsEditar = document.querySelectorAll(".btn-edita-op");
// const btnsEliminar = Array.from(document.getElementsByClassName('btn-eliminar'));
btnsEliminar.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const arrSinOperacion = operaciones.filter(
      (operacion) => operacion.id !== e.target.dataset.id
      //El filter devuelve un array de los objetos cuyo valor de la propiedad id es diferente de el id de cada botón agregado por innerHTML que se está clickeando (para separa sólo el que matchee)
    );

    localStorage.setItem("operaciones", JSON.stringify(arrSinOperacion));
    //subo a LS los elementos que no voy a eliminar, actualizo LS
    operaciones = JSON.parse(localStorage.getItem("operaciones"));
    //traigo de LS el array operaciones actualizado
    pintarObjetos(operaciones);
    //pinto el array operaciones actualizado
    mostraroperaciones(operaciones);
    //ejecuto mostrar operaciones para mantener la vista correspondiente a "con operaciones"
  });
});
// const editaOpBtn = document.getElementById("btn-agrega-edicio-op");
// btnsEditar.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const editoOperacion = operaciones.filter(
//       (operacion) => operacion.id === e.target.dataset.id
//     );

//     editarOperacion(editoOperacion);
//     editaOpBtn.addEventListener("click", () => {
//       console.log(editoOperacion);
//     });
//   });
// });

// const editarOperacion = (arr) => {
//   const { descripcion, monto, tipo, categoria, fecha } = arr[0];

//   vistaBalance.classList.add("d-none");
//   vistaEditarOperacion.classList.remove("d-none");
//   descripcionOperacion.value = descripcion;
//   montoOperacion.value = monto;
//   tipoOperacion.value = tipo;
//   categoriaNuevaOperacion.value = categoria;
//   fechaOperacion.valueAsDate = new Date(fecha);
// };

// const inicializar = () => {
//   const inputsFecha = document.querySelectorAll('input[type="date"]')
//   inputsFecha.forEach( input => {
//     input.valueAsDate = new Date()
//   })
//   mostraroperaciones(operaciones);
//   generarCategorias();
//   pintarOperaciones(operaciones);
// }

// window.onload = inicializar
