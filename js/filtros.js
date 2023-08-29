// Definimos variables globales

const ORDENAR_VENDIDOS = "ordenarVendidos";
const ORDENAR_ASCENDENTE = "ordenarAscendente";
const ORDENAR_DESCENDENTE = "ordenarDescendente";

// Recupero los botones del DOM

const botonAscendente = document.getElementById("ordenAsc");
const botonDescendente = document.getElementById("ordenDesc");
const botonVendidos = document.getElementById("ordenVendidos");
const botonLimpiar = document.getElementById("clearRangeFilter");
const botonFiltrar = document.getElementById("rangeFilterCount");

const productosNoEncontrados = document.getElementById("productosNoEncontrados");


// Agregar productos a HTML

function agregarProductos(element) {
    return `
<div setCatID(${element.id})" class="fondolista">
    <div class="fila">
        <div class=imagenes>
            <img src="${element.image}">
        </div>
        <div class="item">
            <div>
                <h4 class="nombreproductos">${element.name} </h4>
                <p class="precio">${element.currency} ${element.cost}</p>
            </div>
            <p class="description">${element.description}</p>
        </div>
    </div>
    <h5 class="vendidos">${element.soldCount} vendidos</h5>
</div>
`;
}

// FUNCION PARA ORDENAR PRODUCTOS

function ordenar(criterio) {
    let products = JSON.parse(localStorage.getItem("resultFetch"));
    let productosOrdenados = []
    if (criterio == "ordenarVendidos") {
        //ordeno los productos de mayor cantidad de ventas a menor y los guardo en la variable "productosOrdenados"
        productosOrdenados = products.sort(function (a, b) {
            return b.soldCount - a.soldCount;
        })
    } else if (criterio == "ordenarAscendente") {
        //ordeno los productos de mayor precio a menor y los guardo en la variable "productosOrdenados"
        productosOrdenados = products.sort(function (a, b) {
            return a.cost - b.cost;
        })
    } else if (criterio == "ordenarDescendente") {
        //ordeno los productos de menor precio a mayor y los guardo en la variable "productosOrdenados"
        productosOrdenados = products.sort(function (a, b) {
            return b.cost - a.cost;
        })
    }
    let agregar = "";
    productosOrdenados.forEach(products => {
        agregar += agregarProductos(products);
    })
    return document.getElementById("productos").innerHTML = agregar;
}

// ORDENAR POR RELEVANCIA (MAS VENDIDOS)

botonVendidos.addEventListener("click", function () {
    ordenar(ORDENAR_VENDIDOS)
})

// ORDENADO DE MENOR A MAYOR (PRECIO)

botonAscendente.addEventListener("click", function () {
    ordenar(ORDENAR_ASCENDENTE);
})

// ORDENADO DE MAYOR A MENOR (PRECIO)

botonDescendente.addEventListener("click", function () {
    ordenar(ORDENAR_DESCENDENTE);
})


// Filtro para el rango de precios

botonFiltrar.addEventListener("click", () => {
    let products = JSON.parse(localStorage.getItem("resultFetch"));

    const precioMin = parseInt(document.getElementById("precioMin").value);
    const precioMax = parseInt(document.getElementById("precioMax").value);
    let productosAgregados = []
    let agregar = "";
    products.forEach(products => {
        if (precioMin <= products.cost && products.cost <= precioMax) {
            agregar += agregarProductos(products);
            productosAgregados.push("1");
        }
    });
    document.getElementById("productos").innerHTML = agregar;
    if (productosAgregados.length === 0) {
        productosNoEncontrados.innerHTML = `
        <p id=noEncontrado>No se encontraron productos.</p>
        `;
    } else {
        const noEncontrado = document.getElementById("noEncontrado");
        noEncontrado.remove();
    }
});


// LIMPIAR FILTRO

botonLimpiar.addEventListener("click", function () {
    location.reload();
})

// BARRA DE BÚSQUEDA

/* Boton de busqueda  */

const product = document.getElementById("searchInput");

searchInput.addEventListener("input", e => {
   const searchFinal = e.target.value;
   console.log(searchFinal);
   });


/**incluyo el titulo y descripcion */




    const filtro= productList.filters(product =>{

   const nombre= product.name.toLowerCase().includes(searchInput);
   const descripcion=product.description.toLowerCase().includes(searchInput);

    }});
    
    
    /**incluyo el titulo y descripcion *
     * toLoWerCase convertir a minuscula/
