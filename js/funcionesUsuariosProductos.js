function traerInfoClothe() {
    $.ajax({
        // url: "http://localhost:8080/api/clothe/all",
        url: "http://152.70.213.108:8080/api/clothe/all",
        type: "GET",
        datatype: "JSON",
        success: function (productos) {
            console.log(productos);
            pintarRespClothe(productos);
        },
        error: function (jdXHR, textStatus, errorThrown) {
        }
    });
}
function pintarRespClothe(productos) {
    let fila = '';
    for (i = 0; i < productos.length; i++) {
        
        fila += "<tr>"
        fila += "<td>" + productos[i].reference + "</td>";
        fila += "<td>" + productos[i].category + "</td>";
        fila += "<td>" + productos[i].size + "</td>";
        fila += "<td>" + productos[i].description + "</td>";
        fila += "<td>" + productos[i].availability + "</td>";
        fila += "<td>" + productos[i].price + "</td>";
        fila += "<td>" + productos[i].quantity + "</td>";
        fila += "<td>" + productos[i].photography + "</td>";
        fila += "</tr>";
    }
    // myTable+="</table>";
    $('#cuerpoProductos').html(fila);
}
