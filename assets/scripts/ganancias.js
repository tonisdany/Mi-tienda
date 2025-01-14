function calcularPrecioVenta(costo, envio = 0.44, gananciaDeseada = 0.30) {

    let ganancia = gananciaDeseada * costo;

    let precioVenta = (costo + envio + ganancia + 1) / (1 - (costo + envio + ganancia + 1 <= 15 ? 0.105 : 0.12));

    return precioVenta.toFixed(2);

}


function calcularComision(precioVenta) {

    let porcentajePuntos = precioVenta > 15 ? 0.12 : 0.105;

    let comision = 1 + (porcentajePuntos * precioVenta);

    return comision.toFixed(2);

}