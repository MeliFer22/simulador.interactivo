//---Bienvenida al usuario--------------------------
alert("¡Bienvenido a la sección de pedidos! Por favor, siga los pasos para realizar su compra.")

let linea= prompt("Indique la línea de cacerolas que desea:")


if (linea== "marsala"){
    alert("Excelente elección! El costo del producto es de $20.000");
}
else if (linea== "aqua"){
    alert("Excelente elección! El costo del producto es de $30.000 ");
}
else if (linea== "terra"){
    alert("Excelente elección! El costo del producto es de $40.000");
}

else{
    alert("Opción incorrecta. Ingrese nuevamente:");
    let linea= prompt("Indique la línea de cacerolas que desea:");
    if (linea== "marsala"){
        alert("Excelente elección! El costo del producto es de $20.000");
    }
    else if (linea== "aqua"){
        alert("Excelente elección! El costo del producto es de $30.000 ");
    }
    else if (linea== "terra"){
        alert("Excelente elección! El costo del producto es de $40.000");
    }
}

let domicilio= prompt("Indique su ciudad de residencia para calcular costo de envío:")

if (domicilio== "Resistencia"){
    alert("El costo de envío será de $200");
}
else if (domicilio== "Fontana"){
    alert("El costo de envío será de $300");
}
else if (domicilio== "Barranqueras"){
    alert("El costo de envío será de $300");
}
else if (domicilio== "Vilelas"){
    alert("El costo de envío será de $400");
}

else{
    alert("Opción incorrecta. Ingrese nuevamente:");
    let domicilio= prompt("Indique su ciudad de residencia para calcular costo de envío:");
    if (domicilio== "Resistencia"){
        alert("El costo de envío será de $200");
    }
    else if (domicilio== "Fontana"){
        alert("El costo de envío será de $300");
    }
    else if (domicilio== "Barranqueras"){
        alert("El costo de envío será de $300");
    }
    else if (domicilio== "Vilelas"){
        alert("El costo de envío será de $400");
}
}