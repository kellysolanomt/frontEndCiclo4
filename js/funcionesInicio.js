function traerInfoUser(){
    $.ajax({
        url:"http://168.138.124.98:80/api/user/all",
        //url:"http://localhost:8081/api/user/all",
        type:"GET",
        datatype:"JSON",
        success:function (usuarios) {
            console.log(usuarios);
            pintarRespUser(usuarios);
        },
        error:function(jdXHR, textStatus, errorThrown){
        }
    });
}
function pintarRespUser(usuarios){
    var fila = '';
    for(i=0;i<usuarios.length;i++){
        fila+="<tr>"
        //fila+="<td>"+itemsSkate[i].id+"</td>";
        fila+="<td>"+usuarios[i].id+"</td>";
        fila+="<td>"+usuarios[i].email+"</td>";
        fila+="<td>"+usuarios[i].password+"</td>";
        fila+="<td>"+usuarios[i].name+"</td>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#cuerpoUsuarios').html(fila);
}

