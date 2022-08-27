//************************************* */
//  ELEMENTOS PARA LOS BOTONES DEL NAV
//************************************* */

const vistaBalance = document.getElementById("vista-balance");
const nuevaOperacion = document.getElementById("nueva-operacion");
const vistaCategorias = document.getElementById("categorias");
const cardEditarCategoria = document.getElementById("editar-categorias");
const vistaEditarOperacion = document.getElementById("vista-editar-operacion");
const vistaPrincipal = document.getElementById("titulo-principal");
const btnNvaOperacion = document.getElementById("btn-agrega-operación");
const btnCategorias = document.getElementById("btn-categorias");
const btnBalance = document.getElementById("btn-balance");
const btnCancelNvaOperacion = document.getElementById("cancela-nva-operacion");
const btnModo = document.getElementById("btn-modo");
const on = document.getElementById("on");
const off = document.getElementById("off");

//************************************* */
//         ELEMENTOS BALANCE
//************************************* */

const divGanancias = document.getElementById("div-ganancias");
const divGastos = document.getElementById("div-gastos");
const divtotal = document.getElementById("div-total");
const sinOperaciones = document.getElementById("sin-operaciones");
const conOperaciones = document.getElementById("con-operaciones");
const descripcionOperacion = document.getElementById("descripcion-operacion"); // input-descripcion vista nueva operacion
const montoOperacion = document.getElementById("monto-operacion"); // input-monto
const tipoOperacion = document.getElementById("tipo-operacion"); // select-tipo de operacion
const categoriaNuevaOperacion = document.getElementById(
  "categoria-nueva-operacion"
);
const fechaOperacion = document.getElementById("fecha-operacion");
const btnAgregarOperacion = document.getElementById("btn-agregar-operacion");
const btnCancelaOpEditada = document.getElementById("btn-cancela-edicion-op");
const contenedorFiltros = document.getElementById("contenedor-filtros");
const linkOcultarFiltros = document.getElementById("link-ocultar-filtros");
const linlMostrarFiltros = document.getElementById("link-mostrar-filtros");

//Input de Filtros
const filtroXTipo = document.getElementById("filtros-tipo");
const filtroXCategoria = document.getElementById("filtros-categorias");
const filtroXFecha = document.getElementById("filtros-fecha");
const ordenarX = document.getElementById("filtros-ordenax");

//Imputs Editar Operación
const editarDescripcionOpInput = document.getElementById(
  "edita-descripcion-op"
);
const editarMontoOpInput = document.getElementById("edita-monto-op");
const editarTipoOpInput = document.getElementById("tipo-op");
const editarCategoriaOpInput = document.getElementById("edita-categoria-op");
const editaFechaOpInput = document.getElementById("edita-fecha-op");

//************************************* */
//        ELEMENTOS CATEGORIAS
//************************************* */
const selects = document.querySelectorAll(".categorias-select");
const btnAgregarCategorias = document.getElementById("boton-categorias");
const inputAgregarCategorias = document.getElementById(
  "agregar-categoria-input"
);
const btnCancelarCategoria = document.getElementById("btn-cancelar-categoria");

//************************************* */
//        ELEMENTOS REPORTES
//************************************* */
const vistaReportes = document.getElementById("reportes"); // Section Reportes
const btnReportes = document.getElementById("btn-reportes"); ////Btn Reportes del header
const divSinReportes = document.getElementById("sin-reportes");
const divConReportes = document.getElementById("con-reportes");
const reporteCategorias = document.getElementById("reportes-por-categoria");
const divCategoriaMayorGanacia = document.getElementById(
  "categoria-mayor-ganancia"
);
const divCategoriaMayorGasto = document.getElementById("categoria-mayor-gasto");
const divCategoriaMayorBalance = document.getElementById(
  "categoria-mayor-balace"
);

// ***************************************
//        FUNCIONES BOTONES DEL NAV
// **************************************

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
  limpiarVistaNuevaOperacion();
});

btnBalance.addEventListener("click", () => {
  vistaBalance.classList.remove("d-none");
  nuevaOperacion.classList.add("d-none");
  vistaCategorias.classList.add("d-none");
  vistaReportes.classList.add("d-none");
  vistaEditarOperacion.classList.add("d-none");
  cardEditarCategoria.classList.add("d-none");
});

vistaPrincipal.addEventListener("click", () => {
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
  vistaEditarOperacion.classList.add("d-none");
  cardEditarCategoria.classList.add("d-none");

  if (operaciones.length < 3) {
    divConReportes.classList.add("d-none");
    divSinReportes.classList.remove("d-none");
  } else {
    divConReportes.classList.remove("d-none");
    divSinReportes.classList.add("d-none");
  }

  totalesPorCategoria(operaciones, categoriasSinRepetir);
  totalPorMes(operaciones);
});

on.addEventListener("click", () => {
  on.classList.add("d-none");

  off.classList.remove("d-none");
  off.style.backgroundColor = "#393e49";
});

off.addEventListener("click", () => {
  on.classList.remove("d-none");
  off.classList.add("d-none");
  on.style.backgroundColor = "#b9c3d2";
});

// FUNCIÓN MODO OSCURO

const preferenciasTema = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";
const establecerTema = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};
btnModo.addEventListener("click", () => {
  let cambiarTema = localStorage.getItem("theme") === "dark" ? "light" : "dark";
  establecerTema(cambiarTema);
});
establecerTema(localStorage.getItem("theme") || preferenciasTema);

// ********************************************
//                BALANCE
//********************************************

// FUNCIÓN OBTENER GANANCIAS TOTALES
const totalGanancias = (arr) => {
  let str = 0;
  arr.forEach((operaciones) => {
    if (operaciones.tipo === "Ganancia") {
      str += Number(operaciones.monto);
    }
  });
  divGanancias.innerHTML = `+$${str}`;
  return str;
};

// FUNCIÓN OBTENER GASTOS TOTALES
const totalGastos = (arr) => {
  let str = 0;
  arr.forEach((operaciones) => {
    if (operaciones.tipo === "Gasto") {
      str += Number(operaciones.monto);
    }
  });
  divGastos.innerHTML = `-$${str}`;
  return str;
};

// FUNCIÓN OBTENER  TOTAL BALANCE
const total = () => {
  let str = 0;
  str += totalGanancias(operaciones) - totalGastos(operaciones);
  divtotal.innerHTML = `<div class="${
    str > "0" ? "text-success" : "text-danger"
  }" >${str > "0" ? "+" : "-"}$${Math.abs(str)}</div>`;
};

// **********************************************
//                CATEGORIAS
// **********************************************

let categorias = JSON.parse(localStorage.getItem("categorias")) || [
  {
    id: uuidv4(),
    nombre: "Servicios",
  },
  {
    id: uuidv4(),
    nombre: "Comida",
  },
  {
    id: uuidv4(),
    nombre: "Salidas",
  },
  {
    id: uuidv4(),
    nombre: "Transporte",
  },
  {
    id: uuidv4(),
    nombre: "Educación",
  },
  {
    id: uuidv4(),
    nombre: "Trabajo",
  },
];

// FUNCIÓN PARA GENERAR CATEGORIAS EN LOS SELECTS

const generarCategorias = (arr) => {
  let select = "";
  for (let index = 0; index < selects.length; index++) {
    selects[index].innerHTML = "";
  }
  for (let i = 0; i < selects.length; i++) {
    select = selects[i];
    if (select.classList.contains("filtro-categoria")) {
      select.innerHTML = "<option>Todas</option>";
    }
    for (let j = 0; j < arr.length; j++) {
      select.innerHTML =
        select.innerHTML +
        `<option>${arr[j].nombre}</option>`;
    }
  }
};

//generarCategorias(categorias); //************************************************/

// FUNCIÓN BOTON AGREGAR CATEGORIAS
btnAgregarCategorias.addEventListener("click", () => {
  agregarCategorias();
  limpiarInputCategorias();
  pintarCategorias(categorias);
});

// FUNCION PARA AGREGAR LAS CATEGORIAS AL ARRAY Y VACIAR LOS SELECTS
const agregarCategorias = () => {
  categorias.push({ id: uuidv4(), nombre: inputAgregarCategorias.value });
  generarCategorias(categorias);
  localStorage.setItem("categorias", JSON.stringify(categorias));
};

// FUNCION PARA VACIAR LOS INPUT DE CATEGORIAS
const limpiarInputCategorias = () => {
  inputAgregarCategorias.value = "";
};

// FUNCION PARA PINTAR LAS CATEGORIAS

const pintarCategorias = (arr) => {
  const divListaCategorias = document.getElementById("lista-categorias");
  let str = "";
  arr.forEach((categoria) => {
    str += `<div class="row margen-filas">
    <div class="col-8">
      <span class="nombres-categorias">${categoria.nombre}</span>
    </div>
    <div class="col-4 contenedor">
      <a class="link-categoria margen-derecho btn-editar-categorias"
        href="#"  data-id="${categoria.id}">Editar</a>
      <a class="link-categoria btn-eliminar-categorias" href="#" data-id="${categoria.id}">Eliminar</a>
      </div>
    </div>`;
  });
  divListaCategorias.innerHTML = str;

  const btnEditarCategoria = document.getElementById("btn-editar-categoria");
  const inputEditarCategoria = document.getElementById(
    "editar-nombre-categoria"
  );
  const btnEditarCategorias = document.querySelectorAll(
    ".btn-editar-categorias"
  );

  btnEditarCategorias.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      VistaEditarCategoria();

      categoriaAEditar = categorias.filter(
        (categoria) => categoria.id === e.target.dataset.id
      );
      categoriaAEditar.forEach((categoria) => {
        inputEditarCategoria.value = categoria.nombre;
      });
    })
  });

  btnEditarCategoria.addEventListener("click", () => {
    cardEditarCategoria.classList.add("d-none");
    vistaCategorias.classList.remove("d-none");
    const cambioCategoria = categorias.filter(
      (categoria) => categoria.id === categoriaAEditar[0].id
    );

    const eliminarOpAsociadas = (arr) => {
      arr.forEach((operacionX) => {
        if( operacionX.categoria ===  categoriaAEditar[0].nombre){
            operacionX.categoria = inputEditarCategoria.value
          }
          })
        console.log(arr)
        localStorage.setItem("operaciones", JSON.stringify(arr));
        const nuevasOperaciones = JSON.parse(localStorage.getItem("operaciones"));
        pintarObjetos(nuevasOperaciones);
      };
  
      eliminarOpAsociadas(operaciones)

    const filtrada = cambioCategoria[0];
    filtrada.nombre = inputEditarCategoria.value;
    const accionEditar = categorias.map((categoria) =>
      categoria.id === categoriaAEditar[0].id ? filtrada : categoria
    );
    localStorage.setItem("categorias", JSON.stringify(accionEditar));
    categorias = JSON.parse(localStorage.getItem("categorias"));
    pintarCategorias(categorias);
    generarCategorias(categorias);
  });


  const VistaEditarCategoria = () => {
    cardEditarCategoria.classList.remove("d-none");
    vistaCategorias.classList.add("d-none");
  };

  //  FUNCION BTN ELIMINAR CATEGORIAS
  const btnEliminarCategorias = document.querySelectorAll(
    ".btn-eliminar-categorias"
  );

  const eliminarCategoria = (arr, e, operaciones) => {
    const obtenerCategoria = arr.find(
      (categoria) => categoria.id === e.target.dataset.id
    ).nombre;
    const eliminarCategoria = arr.filter(
      (categoria) => categoria.id !== e.target.dataset.id
    );
    const eliminarOperacion = operaciones.filter(
      (operaciones) => operaciones.categoria !== obtenerCategoria
    );
    console.log(eliminarOperacion);
    arrActualizado(eliminarCategoria, eliminarOperacion);
  };

  const arrActualizado = (arrCategorias, arrOperaciones) => {
    localStorage.setItem("categorias", JSON.stringify(arrCategorias));
    categorias = JSON.parse(localStorage.getItem("categorias"));
    pintarCategorias(categorias);
    generarCategorias(categorias);
    localStorage.setItem("operaciones", JSON.stringify(arrOperaciones));
    operaciones = JSON.parse(localStorage.getItem("operaciones"));
    pintarObjetos(operaciones);
    mostrarOperaciones(operaciones);
  };

  btnEliminarCategorias.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      eliminarCategoria(categorias, e, operaciones);
    });
  });
};

pintarCategorias(categorias); //************************************************/

//  FUNCION BTN CANCELAR EDITAR CATEGORIAS

btnCancelarCategoria.addEventListener("click", () => {
  cardEditarCategoria.classList.add("d-none");
  vistaCategorias.classList.remove("d-none");
});

generarCategorias(categorias);

// ***********************************************
//                 OPERACIONES
// **********************************************

const obtenerOperaciones = () => {
  return JSON.parse(localStorage.getItem("operaciones")) || [];
};
let operaciones = obtenerOperaciones();
// let operaciones = JSON.parse(localStorage.getItem("operaciones")) || [];

// FUNCIÓN MOSTRAR OPERACIONES
const mostrarOperaciones = (arr) => {
  if (!arr.length) {
    sinOperaciones.classList.remove("d-none");
    conOperaciones.classList.add("d-none");
  } else {
    sinOperaciones.classList.add("d-none");
    conOperaciones.classList.remove("d-none");
  }
};

mostrarOperaciones(operaciones); //************************************************/

// FUNCIÓN LIMPIAR INPUT-NUEVA-OPERACION
const limpiarVistaNuevaOperacion = () => {
  descripcionOperacion.value = "";
  montoOperacion.value = "0";
  tipoOperacion.value = "Gasto";
  categoriaNuevaOperacion.value = "Servicios";
  fechaOperacion.valueAsDate = new Date();
};

// FUNCIÓN CREAR OBJETO DE CADA OPERACIÓN Y LLENAR ARRAY OPERACIONES
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
  operaciones.push(objOperaciones);
  localStorage.setItem("operaciones", JSON.stringify(operaciones));
};

// FUNCION PARA PINTAR OBJETOS DE LAS OPERACIONES EN HTML
const pintarObjetos = (arr) => {
  const conOperaciones = document.getElementById("operaciones");
  let str = "";
  mostrarOperaciones(operaciones);
  arr.forEach((operacion) => {
    //const categoria = categorias.find((categoria) => categoria.id === operacion.categoria)
    const { id, descripcion, categoria, fecha, monto, tipo } = operacion;
    str += `
    <div class="row margen-superior">
      <div class="col-md-3 col-sm-6 col-6 fw-bold">
        <h6>${descripcion}</h6>
      </div>
      <div class="col-md-3 col-sm-6 col-6 categorias-operaciones">
        <span class="nombres-categorias">${categoria}</span>
      </div>
      <div class="col-md-2 col-sm-6 text-end fechas-operaciones">
      ${fecha}
      </div>
      <div class="monto-operaciones col-md-2 col-sm-6 col-6 fw-bold text-end  ${
        tipo === "Ganancia" ? "text-success" : "text-danger"
      }">
      ${tipo === "Ganancia" ? "+" : "-"}$${monto}
      </div>
      <div class="col-md-2 col-sm-6 col-6 text-wrap text-end">
        <p>
          <a  href="#" data-id="${id}" class="link-categoria btn-edita-op">Editar</a>
          <a  href="#" data-id="${id}" class="link-categoria btn-elimina-op">Eliminar</a>
        </p>
      </div>
    </div>
    `;
  });

  conOperaciones.innerHTML = str;
  totalGanancias(operaciones);
  totalGastos(operaciones);
  total();

  const btnsEditar = document.querySelectorAll(".btn-edita-op");
  const btnEditaOp = document.getElementById("btn-agrega-edicion-op");
  const btnsEliminar = document.querySelectorAll(".btn-elimina-op");

  // FUNCIÓN EDITAR OPERACIÓN
  btnsEditar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      editoOperacion = operaciones.filter(
        (operacion) => operacion.id === e.target.dataset.id
      );
      editarOperacion(editoOperacion);
    });
  });
  btnEditaOp.addEventListener("click", () => {
    vistaBalance.classList.remove("d-none");
    nuevaOperacion.classList.add("d-none");
    vistaCategorias.classList.add("d-none");
    vistaReportes.classList.add("d-none");
    vistaEditarOperacion.classList.add("d-none");
    cardEditarCategoria.classList.add("d-none");

    const filtrar = operaciones.filter(
      (operacion) => operacion.id === editoOperacion[0].id
    );
    const filtrado = filtrar[0];
    (filtrado.descripcion = editarDescripcionOpInput.value),
      (filtrado.id = editoOperacion[0].id);
    filtrado.monto = editarMontoOpInput.value;
    filtrado.tipo = editarTipoOpInput.value;
    filtrado.categoria = editarCategoriaOpInput.value;
    filtrado.fecha = editaFechaOpInput.value;

    const nuevas = operaciones.map((operacion) =>
      operacion.id === editoOperacion[0].id ? filtrado : operacion
    );
    localStorage.setItem("operaciones", JSON.stringify(nuevas));
    const operacionesEditadas = JSON.parse(localStorage.getItem("operaciones"));
    pintarObjetos(operacionesEditadas);
  });

  // FUNCIÓN ELIMINAR OPERACIÓN
  btnsEliminar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const arrSinOperacion = operaciones.filter(
        (operacion) => operacion.id !== e.target.dataset.id
      );
      localStorage.setItem("operaciones", JSON.stringify(arrSinOperacion));
      operaciones = JSON.parse(localStorage.getItem("operaciones"));
      pintarObjetos(operaciones);
      mostrarOperaciones(operaciones);
    });
  });
};

pintarObjetos(operaciones); //************************************************/

// FUNCIÓN BOTON PARA CREAR OBJETOS
btnAgregarOperacion.addEventListener("click", crearObjOperaciones);

// FUNCIÓN BOTON PARA PINTAR OBJETOS
btnAgregarOperacion.addEventListener("click", () => {
  pintarObjetos(operaciones);
});

// EVENTO BTN CANCELAR OPERACIÓN
btnCancelaOpEditada.addEventListener("click", () => {
  vistaBalance.classList.remove("d-none");
  vistaEditarOperacion.classList.add("d-none");
});

// FUNCIÓN PARA MOSTRAR VALORES DE LA OPERACIÓN EN LOS INPUT
const editarOperacion = (arr) => {
  if (arr.length == 0) return;
  const { descripcion, categoria, fecha, monto, tipo } = arr[0];
  vistaBalance.classList.add("d-none");
  vistaEditarOperacion.classList.remove("d-none");
  editarDescripcionOpInput.value = descripcion;
  editarMontoOpInput.value = monto;
  editarTipoOpInput.value = tipo;
  editarCategoriaOpInput.value = categoria;
  editaFechaOpInput.valueAsDate = new Date(fecha);
};

// *********************************************
//                  FILTROS
// *********************************************

// FUNCION OCULTAR Y MOSTRAR FILTROS

linkOcultarFiltros.addEventListener("click", () => {
  contenedorFiltros.classList.add("d-none");
  linlMostrarFiltros.classList.remove("d-none");
  linkOcultarFiltros.classList.add("d-none");
});

linlMostrarFiltros.addEventListener("click", () => {
  contenedorFiltros.classList.remove("d-none");
  linlMostrarFiltros.classList.add("d-none");
  linkOcultarFiltros.classList.remove("d-none");
});

const filtrosAcumulados = (e) => {
  const filterTipo = filtroXTipo.value;
  const filterCategoria = filtroXCategoria.value;
  const filterDesde = filtroXFecha.value;

  let operaciones = obtenerOperaciones();

  // FILTRO POR TIPO

  if (filterTipo !== "Todos") {
    operaciones = operaciones.filter(
      (operacion) => operacion.tipo === filterTipo
    );
  }

  // FILTRO POR CATEGORIA

  if (filterCategoria !== "Todas") {
    operaciones = operaciones.filter(
      (operacion) => operacion.categoria === filterCategoria
    );
  }

  if (!operaciones.length && filterCategoria !== "Todas") {
    sinOperaciones.classList.remove("d-none");

    conOperaciones.classList.add("d-none");
    mostrarOperaciones();
    mostrarOperaciones();
  }

  // FILTRO POR FECHA (Desde)

  operaciones = operaciones.filter(
    (operacion) => operacion.fecha >= filterDesde
  );
  if (!operaciones.length) {
    sinOperaciones.classList.remove("d-none");
    conOperaciones.classList.add("d-none");
    mostrarOperaciones();
  }

  // FILTRO POR ORDEN

  let filterOrden = ordenarX.value;
  switch (filterOrden) {
    case "Más reciente":
      operaciones = operaciones.sort(
        (a, b) => new Date(b.fecha) - new Date(a.fecha)
      );

      pintarObjetos(operaciones);

      break;

    case "Menos reciente":
      operaciones = operaciones.sort(
        (a, b) => new Date(a.fecha) - new Date(b.fecha)
      );

      pintarObjetos(operaciones);

      break;

    case "Mayor monto":
      operaciones = operaciones.sort(
        (a, b) => Number(b.monto) - Number(a.monto)
      );

      pintarObjetos(operaciones);

      break;

    case "Menor monto":
      operaciones = operaciones.sort(
        (a, b) => Number(a.monto) - Number(b.monto)
      );

      pintarObjetos(operaciones);

      break;

    case "A/Z":
      operaciones = operaciones.sort((a, b) => {
        return a.descripcion.localeCompare(b.descripcion, {
          ignorePunctuation: true,
        });
      });

      pintarObjetos(operaciones);

      break;

    case "Z/A":
      operaciones = operaciones
        .sort((a, b) => {
          return a.descripcion.localeCompare(b.descripcion, {
            ignorePunctuation: true,
          });
        })
        .reverse();

      pintarObjetos(operaciones);

      break;
  }

  pintarObjetos(operaciones);

  pintarObjetos(operaciones);
};

filtroXTipo.addEventListener("change", filtrosAcumulados);
filtroXCategoria.addEventListener("change", filtrosAcumulados);
filtroXFecha.addEventListener("change", filtrosAcumulados);
ordenarX.addEventListener("change", filtrosAcumulados);

// *******************************************************
//                    REPORTES
// *******************************************************

// TOTALES POR CATEGORIA

const categoriasSinRepetir = [
  ...new Set(operaciones.map((operacion) => operacion.categoria)),
];

const totalesPorCategoria = (operaciones, categorias) => {
  let str2 = "";
  let str3 = "";
  let str4 = "";
  let str5 = "";
  let categoriaMayorGanancia = " ";
  let montoMayorGanancia = 0;
  let categoriaMayorGasto = " ";
  let montoMayorGasto = 0;
  let categoriaMayorBalance = "";
  let montoMayorBalance = 0;
  categorias.forEach((categoria) => {
    const porCategoria = operaciones.filter(
      (operacion) => operacion.categoria === categoria
    );
    const gananciasTotalesPorCategoria = porCategoria
      .filter((operacion) => operacion.tipo === "Ganancia")
      .reduce((count, current) => count + Number(current.monto), 0);

    if (categoriaMayorGanancia === " " && montoMayorGanancia === 0) {
      montoMayorGanancia = gananciasTotalesPorCategoria;
      categoriaMayorGanancia = categoria;
    } else if (gananciasTotalesPorCategoria > montoMayorGanancia) {
      categoriaMayorGanancia = categoria;
      montoMayorGanancia = gananciasTotalesPorCategoria;
    }

    const gastosTotalesPorCategoria = porCategoria
      .filter((operacion) => operacion.tipo === "Gasto")
      .reduce((count, current) => count + Number(current.monto), 0);

    if (categoriaMayorGasto === " " && montoMayorGasto === 0) {
      montoMayorGasto = gastosTotalesPorCategoria;
      categoriaMayorGasto = categoria;
    } else if (gastosTotalesPorCategoria > montoMayorGasto) {
      categoriaMayorGasto = categoria;
      montoMayorGasto = gastosTotalesPorCategoria;
    }

    const balanceCategoria =
      gananciasTotalesPorCategoria - gastosTotalesPorCategoria;

    if (categoriaMayorBalance === " " && montoMayorBalance === 0) {
      montoMayorBalance = balanceCategoria;
      categoriaMayorBalance = categoria;
    } else if (balanceCategoria > montoMayorBalance) {
      categoriaMayorBalance = categoria;
      montoMayorBalance = balanceCategoria;
    }

    str2 += `
    <div class="row margen-superior">
    <div class="col-3 fw-semibold reportes-padding-responsive reportes-font-responsive">

     ${categoria}
    </div>
    <div class="col-3 fw-bold text-end text-success reportes-padding-responsive reportes-font-responsive">
      +$${gananciasTotalesPorCategoria}
    </div>
    <div class="col-3 fw-bold text-end text-danger reportes-padding-responsive reportes-font-responsive">
      -$${gastosTotalesPorCategoria}
    </div>
    <div class="col-3 fw-bold text-end reportes-padding-responsive reportes-font-responsive">
    ${balanceCategoria < 0 ? "-" : ""} $${Math.abs(balanceCategoria)}
     </div>
  </div>
  `;
    reporteCategorias.innerHTML = str2;

    str3 = ` <div class="col-6 fw-semibold reportes-padding-responsive reportes-font-responsive">
    Categoría con mayor ganancia
  </div>
  <div  class="col-3 text-end reportes-padding-responsive reportes-font-responsive">
    <span class="nombres-categorias reportes-padding-responsive reportes-font-responsive">${categoriaMayorGanancia}</span>
  </div>
  <div class="col-3 text-end fw-bold text-success reportes-padding-responsive reportes-font-responsive">+$${montoMayorGanancia}</div>
              `;
    divCategoriaMayorGanacia.innerHTML = str3;

    str4 = `<div class="col-6 fw-semibold reportes-padding-responsive reportes-font-responsive">
    Categoría con mayor gasto
  </div>
  <div id="categoria-mayor-gasto" class="col-3 text-end reportes-padding-responsive reportes-font-responsive">
    <span class="nombres-categorias reportes-padding-responsive reportes-font-responsive">${categoriaMayorGasto}</span>
  </div>
  <div class="col-3 text-end fw-bold text-danger reportes-padding-responsive reportes-font-responsive">-$${montoMayorGasto}</div>`;

    divCategoriaMayorGasto.innerHTML = str4;

    str5 = `<div class="col-6 fw-semibold reportes-padding-responsive reportes-font-responsive">
    Categoría con mayor balance
  </div>
  <div class="col-3 text-end reportes-padding-responsive reportes-font-responsive">
    <span class="nombres-categorias reportes-padding-responsive reportes-font-responsive ">${categoriaMayorBalance}</span>
  </div>
  <div class="col-3 text-end fw-bold reportes-padding-responsive reportes-font-responsive"> ${
    montoMayorBalance < 0 ? "-" : ""
  } $${montoMayorBalance}</div>`;
    divCategoriaMayorBalance.innerHTML = str5;
  });
};
totalesPorCategoria(operaciones, categoriasSinRepetir);

// FUNCIÓN OBTENER TOTALES POR MES

const totalPorMes = (arr) => {
  if (arr.length == 0) return;
  const meses = [
    ...new Set(
      arr.map(
        (operacion) =>
          `${new Date(operacion.fecha).getMonth() + 1}/${new Date(
            operacion.fecha
          ).getFullYear()}`
      )
    ),
  ].sort();
  let totalesPorMes = [];
  for (let i = 0; i < meses.length; i++) {
    const totalOperacionesPorMes = arr.filter(
      (operacion) =>
        `${new Date(operacion.fecha).getMonth() + 1}/${new Date(
          operacion.fecha
        ).getFullYear()}` === meses[i]
    );
    const gananciasXMes = totalOperacionesPorMes
      .filter((operacion) => operacion.tipo === "Ganancia")
      .reduce((count, current) => count + Number(current.monto), 0);
    const gastosXMes = totalOperacionesPorMes
      .filter((operacion) => operacion.tipo === "Gasto")
      .reduce((count, current) => count + Number(current.monto), 0);
    const balanceXMes = gananciasXMes - gastosXMes;
    const obj = {
      mes: meses[i],
      ganancia: gananciasXMes,
      gasto: gastosXMes,
      balance: balanceXMes,
    };
    totalesPorMes.push(obj);
  }
  pintarTotalesPorMes(totalesPorMes);
  mayorGanancia(...totalesPorMes);
  pintarMayorGananciaPorMes(mayorGanancia(...totalesPorMes));
  mayorGasto(...totalesPorMes);
  pintarMayorGastoPorMes(mayorGasto(...totalesPorMes));
};

// FUNCIÓN PINTAR TOTALES POR MES

const pintarTotalesPorMes = (arr) => {
  const string = arr.reduce(
    (str, actual) =>
      str +
      `
<div class="row margen-superior">
  <div class="col fw-semibold reportes-padding-responsive reportes-font-responsive">
    ${actual.mes}
  </div>
  <div class="col fw-bold text-end text-success reportes-padding-responsive reportes-font-responsive">
   +$${actual.ganancia}
  </div>
  <div class="col fw-bold text-end text-danger reportes-padding-responsive reportes-font-responsive
  ">
    -$${actual.gasto}
  </div>
  <div class="col fw-bold text-end reportes-padding-responsive reportes-font-responsive">
   $${actual.balance}
  </div>
</div>`,
    ""
  );
  document.getElementById("reportes-por-mes").innerHTML = string;
};

// FUNCIÓN OBTENER MES CON MAYOR GANANCIAS

const mayorGanancia = (...arr) => {
  const mayorGanancia = arr.sort(
    (a, b) => Number(b.ganancia) - Number(a.ganancia)
  );
  return mayorGanancia;
};

// FUNCIÓN PINTAR MES CON MAYOR GANANCIAS

const pintarMayorGananciaPorMes = (arr) => {
  document.getElementById("mes-mayor-ganancia").innerHTML = arr[0].mes;
  document.getElementById(
    "monto-mes-mayor-ganancia"
  ).innerHTML = `+$${arr[0].ganancia}`;
};

// FUNCIÓN OBTENER MES CON MAYOR GASTO

const mayorGasto = (...arr) => {
  const mayorGasto = arr.sort((a, b) => Number(b.gasto) - Number(a.gasto));
  return mayorGasto;
};

// FUNCIÓN PINTAR MES CON MAYOR GASTO

const pintarMayorGastoPorMes = (arr) => {
  document.getElementById("mes-mayor-gasto").innerHTML = arr[0].mes;
  document.getElementById(
    "monto-mes-mayor-gasto"
  ).innerHTML = `-$${arr[0].gasto}`;
};

totalPorMes(operaciones);

// FUNCIÓN INICIALIZAR

const inicializar = () => {
  const inputsFecha = document.querySelectorAll('input[type="date"]');
  inputsFecha.forEach((input) => {
    input.valueAsDate = new Date();
  });
};

window.onload = inicializar;
