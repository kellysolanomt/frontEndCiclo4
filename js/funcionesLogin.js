function loginUsuario() {
    if (validarCampos() == true && validarEmail($("#useremailLo").val()) == true) {
        let emailValor = $("#useremailLo").val();
        let passwordValor = $("#passwordLo").val();

        $.ajax({
            //url: "http://localhost:8081/api/user/" + emailValor + "/" + passwordValor,
            url: "http://168.138.124.98:80/api/user/" + emailValor + "/" + passwordValor,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                if (respuesta.name == "NO DEFINIDO") {
                    alert("Usuario y/o contraseña no coinciden o no se encontro el usuario");
                    window.location.reload();
                } else {
                    console.log("El usuario ya existe");
                    alert("Bienvenido " + respuesta.name);
                    paginaInicio();
                }
            },
            error: function (jdXHR, textStatus, errorThrown) {
                console.log(jdXHR, textStatus, errorThrown);
            }
        });

    }
}


function validarCampos() {
    if ($("#useremailLo").val().length == 0 || $("#passwordLo").val().length == 0) {
        alert("Alguno o varios campos están vacios");
        return false;
    } else {
        return true;
    }

}

function validarEmail(email) {
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)) {
        return true;
    } else {
        alert("El valor ingresado no es un correo electronico");
        return false;
    }
}

// function validarExistencia() {
//     let emailValor = $("#useremailLo").val();
//     let passwordValor = $("#passwordLo").val();

//     $.ajax({
//         //url:"http://168.138.124.98:80/api/user/new",
//         url: "http://localhost:8081/api/user/" + emailValor + "/" + passwordValor,
//         type: "GET",
//         datatype: "JSON",
//         success: function (respuesta) {
//             if (respuesta.name == "NO DEFINIDO") {
//                 alert("Usuario y/o contraseña no coinciden o no se encontro el usuario");
//                 window.location.reload();
//                 return false;
//             } else {
//                 console.log("El usuario ya existe");
//                 alert("Bienvenido " + respuesta.name);
//                 return true;
//             }
//         },
//         error: function (jdXHR, textStatus, errorThrown) {
//             console.log(jdXHR, textStatus, errorThrown);
//         }
//     });
// }

function paginaInicio(nombre) {
    window.location = "/frontreto1/inicio.html";
}