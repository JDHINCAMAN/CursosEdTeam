const usuario = {
  nombre: "Juan David",
  edad: 19,
  deuda: 0,
};

let pedido = [];
let costoPedido = 0;

const mostrarMenu = () => {
  productos.forEach((producto) =>
    console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
  );
};

const pedirProducto = (codigoProducto) => {
  if (!codigoProducto) {
    return "Ingrese un codigo valido";
  }

  const productoEncontrado = productos.find(
    (producto) => producto.codigo === codigoProducto
  );
  if (!productoEncontrado) return "El producto no existe";

  pedido.push(productoEncontrado);
  console.log("Su producto ha sido agregado al pedido:");
  return verPedido();
};

const verPedido = () => pedido;

const calcularCosto = () => {
  let costo = 0;
  for (producto of pedido) {
    costo += producto.costo;
  }
  costoPedido = costo;
  return costoPedido;
};

const finalizarPedido = () => {
  calcularCosto();
  usuario.deuda = costoPedido;

  pedido = [];
  costoPedido = 0;

  return `${usuario.nombre} debes pagar $${usuario.deuda} pesos`;
};

const pagarPedido = (montoEntregado) => {
  if (montoEntregado < usuario.deuda) {
    return "No alcanza para pagar tu pedido";
  } else if (montoEntregado === usuario.deuda) {
    usuario.deuda = 0;

    return "Tu pedido ha sido pagado correctamente, vuelva pronto";
  } else if (montoEntregado > usuario.deuda) {
    let vueltas = montoEntregado - usuario.deuda;
    usuario.deuda = 0;

    return `Tu pedido ha sido pagado correctamente, vuelva pronto. Su cambio es: ${vueltas}`;
  } else {
    return "No valido";
  }
};

// funcion para sumar todos los pedidos
const sumarPedidos = (pedidos) => {
    let total = 0;
    for (pedido of pedidos) {
        total += pedido.costo;
    }
    return total;
};

