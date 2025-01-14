const productos = [

    {

        nombre: "Licra Deportiva",

        precioCosto: 7.5,

        imagen: "assets/images/licra.jpg",

        descripcion: "Licra perfecta para actividades deportivas.",

        precioEnvio: 0.44

    },

    {

        nombre: "Gafas de Sol",

        precioCosto: 4,

        imagen: "assets/images/gafas.jpg",

        descripcion: "Gafas de sol de alta calidad.",

        precioEnvio: 0.44

    },

    // Agrega más productos aquí

];


const productosContainer = document.getElementById("productos");


productos.forEach(producto => {

    const productoElement = document.createElement("div");

    productoElement.classList.add("producto");

    productoElement.innerHTML = `

        <img src="${producto.imagen}" alt="${producto.nombre}">

        <h2>${producto.nombre}</h2>

        <p>${producto.descripcion}</p>

        <p class="precio">${calcularPrecioVenta(producto.precioCosto, producto.precioEnvio)} USD</p>

        <button class="btn-comprar">Comprar</button>

    `;

    productosContainer.appendChild(productoElement);

});