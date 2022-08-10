// Eventos en btn para las diferentes vistas

const vistaBalance = document.getElementById("vista-balance"); //Section vista balance
const nuevaOperacion = document.getElementById("nueva-operacion"); //Section Nueva Operación
const vistaCategorias = document.getElementById("categorias"); // Section Categorías
const cardEditarCategoria = document.getElementById("editar-categorias"); // Section Editar Categorías

const vistaEditarOperacion = document.getElementById("vista-editar-operacion");
const vistaPrincipal = document.getElementById("titulo-principal");
const btnNvaOperacion = document.getElementById("btn-agrega-operación"); //Btn +Nueva Operación de la section vista balance
const btnCategorias = document.getElementById("btn-categorias"); //Btn Categorias del header
const btnBalance = document.getElementById("btn-balance"); //Btn Balance del header
const btnCancelNvaOperacion = document.getElementById("cancela-nva-operacion"); //Btn "cancel" de la section Nueva Operacion

//Elementos Reportes
const vistaReportes = document.getElementById("reportes"); // Section Reportes
const btnReportes = document.getElementById("btn-reportes"); ////Btn Reportes del header
const divSinReportes = document.getElementById("sin-reportes");
const divConReportes = document.getElementById("con-reportes");

//Imputs Editar Operación

const editarDescripcionOpInput = document.getElementById(
  "edita-descripcion-op"
);
const editarMontoOpInput = document.getElementById("edita-monto-op");
const editarTipoOpInput = document.getElementById("tipo-op");
const editarCategoriaOpInput = document.getElementById("edita-categoria-op");
const editaFechaOpInput = document.getElementById("edita-fecha-op");

//Input de Filtros
const filtroXTipo = document.getElementById("filtros-tipo");
const filtroXCategoria = document.getElementById("filtros-categorias");
const filtroXFecha = document.getElementById("filtros-fecha");
const ordenarX = document.getElementById("filtros-ordenax");

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

  if (!operaciones.length) {
    divConReportes.classList.add("d-none");
    divSinReportes.classList.remove("d-none");
  } else {
    divConReportes.classList.remove("d-none");
    divSinReportes.classList.add("d-none");
  }
  // totalesPorMes(operaciones);
  ///NAHUE cambiar "categorias" por "categoriasSinRepetir"
  totalesPorCategoria(operaciones, categoriasSinRepetir);
});

// ***********************************************
//                CATEGORIAS
// **********************************************

// Función agregar categorias-select

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

let operaciones = JSON.parse(localStorage.getItem("operaciones")) || [];

//me llevo todos los select con label categorias
const selects = document.querySelectorAll(".categorias-select");

//funcion para crear las opciones de los select en base al array "categorias"
const generarCategorias = () => {
  //por cada select : tres en total
  let select = "";
  for (let i = 0; i < selects.length; i++) {
    select = selects[i];
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
        `<option value=${categorias[j].nombre}>${categorias[j].nombre}</option>`;
    }
  }
};

//ahora que definí todo, ejecuto la funcion.
generarCategorias(); //************************************************/

//me llevo el boton para agregar categorias
const btnAgregarCategorias = document.getElementById("boton-categorias");

//defino un listener con click y ejecuto las funciones
btnAgregarCategorias.addEventListener("click", () => {
  agregarCategorias();
  limpiarInputCategorias();
  pintarCategorias(categorias);
});

// FUNCION PARA AGREGAR LAS CATEGORIAS AL ARRAY Y VACIAR LOS SELECTS

const inputAgregarCategorias = document.getElementById(
  "agregar-categoria-input"
);

const agregarCategorias = () => {
  categorias.push({ id: uuidv4(), nombre: inputAgregarCategorias.value });
  generarCategorias();
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
      <a class="link-categoria btn-eliminar-categorias" href="" data-id="${categoria.id}">Eliminar</a>
      </div>
    </div>`;
  });
  divListaCategorias.innerHTML = str;
};

pintarCategorias(categorias); //************************************************/

//  FUNCION BTN ELIMINAR CATEGORIAS

const btnEliminarCategorias = document.querySelectorAll(
  ".btn-eliminar-categorias"
);
const btnEditarCategorias = document.querySelectorAll(".btn-editar-categorias");

const eliminarCategoria = (arr, e) => {
  const eliminado = arr.filter(
    (categoria) => categoria.id !== e.target.dataset.id
  );
  arrActualizado(eliminado);
};

const arrActualizado = (arr) => {
  localStorage.setItem("categorias", JSON.stringify(arr));
  categorias = JSON.parse(localStorage.getItem("categorias"));
  pintarCategorias(categorias);
};

btnEliminarCategorias.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    eliminarCategoria(categorias, e);
  });
});

//  FUNCION BTN EDITAR CATEGORIAS

const inputEditarCategoria = document.getElementById("editar-nombre-categoria");
const btnEditarCategoria = document.getElementById("btn-editar-categoria");
const btnCancelarCategoria = document.getElementById("btn-cancelar-categoria");

const VistaEditarCategoria = () => {
  cardEditarCategoria.classList.remove("d-none");
  vistaCategorias.classList.add("d-none");
};

btnCancelarCategoria.addEventListener("click", () => {
  cardEditarCategoria.classList.add("d-none");
  vistaCategorias.classList.remove("d-none");
});

btnEditarCategorias.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    VistaEditarCategoria();

    let categoriaAEditar = categorias.filter(
      (categoria) => categoria.id === e.target.dataset.id
    );
    categoriaAEditar.forEach((categoria) => {
      inputEditarCategoria.value = categoria.nombre;
    });
    pos = categorias.indexOf(categoriaAEditar[0]);

    const arrSinCategoria = categorias.filter(
      (categoria) => categoria.id !== e.target.dataset.id
    );

    const borrar = () => {
      localStorage.setItem("categorias", JSON.stringify(arrSinCategoria));
      categorias = JSON.parse(localStorage.getItem("categorias"));
      pintarCategorias(categorias);
    };

    btnEditarCategoria.addEventListener("click", () => {
      borrar(categorias);
    });

    const agregar = () => {
      //categorias.push({id:categoriaAEditar[0].id, nombre: inputEditarCategoria.value })
      categorias.splice(pos, 0, {
        id: categoriaAEditar[0].id,
        nombre: inputEditarCategoria.value,
      });
      localStorage.setItem("categorias", JSON.stringify(categorias));
      pintarCategorias(categorias);
    };

    btnEditarCategoria.addEventListener("click", () => {
      agregar();
      cardEditarCategoria.classList.add("d-none");
      vistaCategorias.classList.remove("d-none");
    });
  });
});

// ***********************************************
//                 OPERACIONES
// **********************************************

const mostrarOperaciones = (arr) => {
  if (!arr.length) {
    document.getElementById("sin-operaciones").classList.remove("d-none");
    document.getElementById("con-operaciones").classList.add("d-none");
  } else {
    document.getElementById("sin-operaciones").classList.add("d-none");
    document.getElementById("con-operaciones").classList.remove("d-none");
  }
};

mostrarOperaciones(operaciones); //************************************************/

//Funcion limpiar input-Nueva-operacion
const limpiarVistaNuevaOperacion = () => {
  descripcionOperacion.value = "";
  montoOperacion.value = "0";
  tipoOperacion.value = "Gasto";
  categoriaNuevaOperacion.value = "Servicios";
  fechaOperacion.valueAsDate = new Date();
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
  operaciones.push(objOperaciones);
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

// const agregarObjetos = (obj) => {
//   operaciones.push(obj);
//   // localStorage.setItem("operaciones", JSON.stringify(operaciones));
// };

// Funcion para pintar objetos de las operacion en el HTML
const pintarObjetos = (arr) => {
  const conOperaciones = document.getElementById("operaciones");

  let str = "";
  mostrarOperaciones(operaciones);
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
          <a id="" href="" data-id="${id}" class="link-categoria btn-elimina-op">Eliminar</a>
        </p>
      </div> 
    </div>
    `;
  });

  conOperaciones.innerHTML = str;
};

pintarObjetos(operaciones); //************************************************/

// Funcion Boton Agregar Operacion (Crear Objeto, pushear Obj al Array)
btnAgregarOperacion.addEventListener("click", crearObjOperaciones);
// Ejecucion funcion btn para pintar los objetos en HTML
btnAgregarOperacion.addEventListener("click", () => {
  pintarObjetos(operaciones);
});

const btnsEliminar = document.querySelectorAll(".btn-elimina-op");
const btnsEditar = document.querySelectorAll(".btn-edita-op");
// const btnsEliminar = Array.from(document.getElementsByClassName('btn-eliminar'));

btnsEliminar.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const arrSinOperacion = operaciones.filter(
      (operacion) => operacion.id !== e.target.dataset.id
      //El filter devuelve un array de los objetos cuyo valor de la propiedad id es diferente de el id de cada botón agregado por innerHTML que se está clickeando ( separa sólo el que matchee)
    );

    localStorage.setItem("operaciones", JSON.stringify(arrSinOperacion));
    // //subo a LS los elementos que no voy a eliminar, actualizo LS
    operaciones = JSON.parse(localStorage.getItem("operaciones"));

    //traigo de LS el array operaciones actualizado
    pintarObjetos(operaciones);
    //pinto el array operaciones actualizado
    mostrarOperaciones(operaciones);
    //ejecuto mostrar operaciones para mantener la vista correspondiente a "con operaciones"
  });
});
const btnEditaOp = document.getElementById("btn-agrega-edicion-op"); //Btn Agregar de vista Editar Operación

const btnCancelaOpEditada = document.getElementById("btn-cancela-edicion-op"); //Btn Cancelar de vista Editar Operación

btnCancelaOpEditada.addEventListener("click", () => {
  //click en cancelar vuelve a mostrar la vista balance y oculta Editar Operación
  vistaBalance.classList.remove("d-none");
  vistaEditarOperacion.classList.add("d-none");
});

const editarOperacion = (arr) => {
  const { descripcion, categoria, fecha, monto, tipo } = arr[0];

  vistaBalance.classList.add("d-none");
  vistaEditarOperacion.classList.remove("d-none");
  //Necesito tomar el valor de los inputs de la card Editar Operación para reemplazar los actuales
  editarDescripcionOpInput.value = descripcion;
  editarMontoOpInput.value = monto;
  editarTipoOpInput.value = tipo;
  editarCategoriaOpInput.value = categoria;
  editaFechaOpInput.valueAsDate = new Date(fecha);
};

const inicializar = () => {
  const inputsFecha = document.querySelectorAll('input[type="date"]');
  inputsFecha.forEach((input) => {
    input.valueAsDate = new Date();
  });
};

window.onload = inicializar;

//a cada editar operacion le agrego mostrar la pantalla
btnsEditar.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let editoOperacion = operaciones.filter(
      (operacion) => operacion.id === e.target.dataset.id
    );
    ///////////////////
    pos = operaciones.indexOf(editoOperacion[0]);

    editarOperacion(editoOperacion);

    const arrSinOperacion2 = operaciones.filter(
      (operacion) => operacion.id !== e.target.dataset.id
    );

    const borrar = () => {
      localStorage.setItem("operaciones", JSON.stringify(arrSinOperacion2));
      operaciones = JSON.parse(localStorage.getItem("operaciones"));
      pintarObjetos(operaciones);
      mostrarOperaciones(operaciones);
    };

    //borrar objeto
    btnEditaOp.addEventListener("click", () => {
      borrar(operaciones);
    });

    //definicion funcion para agregar objeto
    const agregarObjeto = () => {
      objOperaciones2 = {
        id: editoOperacion[0].id,
        descripcion: editarDescripcionOpInput.value,
        monto: editarMontoOpInput.value,
        tipo: editarTipoOpInput.value,
        categoria: editarCategoriaOpInput.value,
        fecha: editaFechaOpInput.value,
      };

      //operaciones.push(objOperaciones2);
      ///////////////////
      operaciones.splice(pos, 0, objOperaciones2);

      localStorage.setItem("operaciones", JSON.stringify(operaciones));
      pintarObjetos(operaciones);
    };

    //agregar objeto
    btnEditaOp.addEventListener("click", () => {
      agregarObjeto();
    });
  });
});

// BALANCE

const divGanancias = document.getElementById("div-ganancias");
const divGastos = document.getElementById("div-gastos");
const divtotal = document.getElementById("div-total");

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

totalGanancias(operaciones);

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
totalGastos(operaciones);

const total = () => {
  let str = 0;
  str += totalGanancias(operaciones) - totalGastos(operaciones);
  divtotal.innerHTML = `<div class="${
    str > "0" ? "text-success" : "text-danger"
  }" >${str > "0" ? "+" : "-"}$${Math.abs(str)}</div>`;
};

total();

//FILTROS

filtroXTipo.addEventListener("change", (e) => {
  if (e.target.value !== "Todos") {
    const xTipo = operaciones.filter(
      (operacion) => operacion.tipo === e.target.value
    );

    localStorage.setItem("operaciones", JSON.stringify(xTipo));

    pintarObjetos(xTipo);
  } else {
    pintarObjetos(operaciones);
  }
});
filtroXCategoria.addEventListener("change", (e) => {
  if (e.target.value !== "Todas") {
    const xCategoria = operaciones.filter(
      (operacion) => operacion.categoria === e.target.value
    );
    localStorage.setItem("operaciones", JSON.stringify(xCategoria));
    pintarObjetos(xCategoria);
  } else {
    pintarObjetos(operaciones);
  }
});

filtroXFecha.addEventListener("change", (e) => {
  const xFecha = operaciones.filter(
    (operacion) => operacion.fecha >= e.target.value
  );
  console.log(xFecha);
  localStorage.setItem("operaciones", JSON.stringify(xFecha));
  pintarObjetos(xFecha);
  pintarObjetos(operaciones);
});

const filtroOrden = () => {
  let orden = ordenarX.value;
  switch (orden) {
    case "Más reciente":
      const masReciente = operaciones.sort(
        (a, b) => new Date(b.fecha) - new Date(a.fecha)
      );

      localStorage.setItem("operaciones", JSON.stringify(masReciente));
      pintarObjetos(masReciente);
      pintarObjetos(operaciones);
      break;

    case "Menos reciente":
      const menosReciente = operaciones.sort(
        (a, b) => new Date(a.fecha) - new Date(b.fecha)
      );

      localStorage.setItem("operaciones", JSON.stringify(menosReciente));
      pintarObjetos(menosReciente);
      pintarObjetos(operaciones);
      break;

    case "Mayor monto":
      const mayorMonto = operaciones.sort(
        (a, b) => Number(b.monto) - Number(a.monto)
      );

      localStorage.setItem("operaciones", JSON.stringify(mayorMonto));
      pintarObjetos(mayorMonto);
      pintarObjetos(operaciones);
      break;

    case "Menor monto":
      const menorMonto = operaciones.sort(
        (a, b) => Number(a.monto) - Number(b.monto)
      );

      localStorage.setItem("operaciones", JSON.stringify(menorMonto));
      pintarObjetos(menorMonto);
      pintarObjetos(operaciones);
      break;

    case "A/Z":
      const alfabeticaAZ = operaciones.sort((a, b) => {
        return a.descripcion.localeCompare(b.descripcion, {
          ignorePunctuation: true,
        });
      });

      localStorage.setItem("operaciones", JSON.stringify(alfabeticaAZ));
      pintarObjetos(alfabeticaAZ);
      pintarObjetos(operaciones);
      break;

    case "Z/A":
      const alfabeticaZA = operaciones
        .sort((a, b) => {
          return a.descripcion.localeCompare(b.descripcion, {
            ignorePunctuation: true,
          });
        })
        .reverse();

      localStorage.setItem("operaciones", JSON.stringify(alfabeticaZA));
      pintarObjetos(alfabeticaZA);
      pintarObjetos(operaciones);
      break;
  }
};

ordenarX.addEventListener("change", filtroOrden);

// REPORTES

const categoriasSinRepetir = [
  ...new Set(operaciones.map((operacion) => operacion.categoria)),
];

const totalesPorCategoria = (operaciones, categorias) => {
  let str2 = "";
  categorias.forEach((categoria) => {
    const porCategoria = operaciones.filter(
      (operacion) => operacion.categoria === categoria
    );
    const gananciasTotalesPorCategoria = porCategoria
      .filter((operacion) => operacion.tipo === "Ganancia")
      .reduce((count, current) => count + Number(current.monto), 0);
    const gastosTotalesPorCategoria = porCategoria
      .filter((operacion) => operacion.tipo === "Gasto")
      .reduce((count, current) => count + Number(current.monto), 0);

    const balanceCategoria =
      gananciasTotalesPorCategoria - gastosTotalesPorCategoria;

    const reporteCategorias = document.getElementById("reportes-por-categoria");

    console.log(porCategoria, "q mande?");

    str2 += `
      <div class="row margen-superior">
      <div class="col fw-semibold">
       ${categoria}
      </div>
      <div class="col fw-semibold text-end text-success">
        +${gananciasTotalesPorCategoria}
      </div>
      <div class="col fw-semibold text-end text-danger">
        -${gastosTotalesPorCategoria}
      </div>
      <div class="col fw-semibold text-end  ${
        balanceCategoria > 0 ? "text-success" : "text-danger"
      }">
      ${balanceCategoria > 0 ? "+" : ""}$ ${balanceCategoria}
       
      </div>
    </div>
    `;

    reporteCategorias.innerHTML = str2;
  });
};
