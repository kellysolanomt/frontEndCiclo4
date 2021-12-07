function registrarUsuario() {
    if (validarCampos() == true && validarEmail($("#useremailRe").val()) == true && validarCoinciContra() == true) {

        let emailValor = $("#useremailRe").val();
        $.ajax({
            //url:"http://152.70.213.108:8080/api/emailexist/" + emailValor,
            url:"http://localhost:8080/api/user/emailexist/" + emailValor,
            type: "GET",
            datatype: "JSON",
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            success: function (respuesta) {
                if (respuesta == true) {
                    alert("El email esta asociado a un usuario existente, por favor cambielo");
                    
                }else{
                    let myData = {
                        identification : $("#useridentificationRe").val(),
                        name : $("#usernameRe").val(),
                        address : $("#useraddressRe").val(),
                        cellPhone : $("#usercellphoneRe").val(),
                        email : $("#useremailRe").val(),
                        password : $("#passwordRe").val(),
                        zone : $("#userzoneRe").val(),
                        type : $("#usertypeRe").val()
                    };
                    $.ajax({
                        //url: "http://152.70.213.108:8080/api/user/newUser",
                        url: "http://localhost:8080/api/user/newUser",
                        type: "POST",
                        data: myData,
                        contentType: "application/json; charset=utf-8",
                        datatype: "JSON",
                        data: JSON.stringify(myData),
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        },
                        success: function () {
                            alert("Se ha registrado exitosamente");
                            window.location.reload();
                        },
                        error: function (jdXHR, textStatus, errorThrown) {
                            alert("No se ha registrado exitosamente");
                        }
                    });
                }
            },
            error: function (jdXHR, textStatus, errorThrown) {
            
            }
        });
    }
    // if (emailExiste() == false) {
    //     let myData = {
    //         email: $("#useremailRe").val(),
    //         password: $('#passwordRe').val(),
    //         name: $('#usernameRe').val()
    //     };
    //     $.ajax({
    //         // url:"http://168.138.124.98:80/api/user/new",
    //         url: "http://localhost:8081/api/user/new",
    //         type: "POST",
    //         data: myData,
    //         contentType: "application/json; charset=utf-8",
    //         datatype: "JSON",
    //         data: JSON.stringify(myData),
    //         success: function () {
    //             alert("Se ha registrado exitosamente");
    //             window.location.reload();
    //         },
    //         error: function (jdXHR, textStatus, errorThrown) {
    //             alert("No se ha registrado exitosamente");
    //         }
    //     });
    // }
    //emailExiste()==false && 

}


function validarCampos() {
    if ($("#useridentificationRe").val().length == 0 ||$("#usernameRe").val().length == 0 || 
        $("#useraddressRe").val().length == 0 ||$("#usercellphoneRe").val().length == 0 || 
        $("#useremailRe").val().length == 0 ||$("#passwordRe").val().length == 0 ||
        $("#passwordrepeatRe").val().length == 0 ||$("#userzoneRe").val().length == 0 ||
        $("#usertypeRe").val().length == 0) {
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

function validarCoinciContra() {
    if ($("#passwordRe").val() == $("#passwordrepeatRe").val()) {
        return true;
    } else {
        alert("Los campos de contraseña no coinciden");
        return false;
    }
}

// function validarExistencia() {
//     let emailValor = $("#useremailRe").val();
//     let passwordValor = $("#passwordRe").val();

//     $.ajax({
//         //url:"http://168.138.124.98:80/api/user/new",
//         url: "http://localhost:8081/api/user/"+emailValor+"/"+passwordValor,
//         type: "GET",
//         datatype: "JSON",
//         success: function (respuesta) {
//             if(respuesta.name != "NO DEFINIDO"){
//                 alert("Usuario y/o contraseña ya existen, cree un nuevo usuario");
//                 window.location.reload();
//                 return false;
//             }

//         },
//         error: function (jdXHR, textStatus, errorThrown) {
//             console.log("El usuario no existe");
//             return true;
//         }
//     });
// }

// function emailExiste() {
//     let emailValor = $("#useremailRe").val();
//     $.ajax({
//         //url:"http://168.138.124.98:80/api/user/new",
//         url: "http://localhost:8081/api/user/" + emailValor,
//         type: "GET",
//         datatype: "JSON",
//         success: function (respuesta) {
//             if (respuesta == true) {
//                 alert("El email esta asociado a un usuario existente, por favor cambielo");
//                 return true;
//             }
//         },
//         error: function (jdXHR, textStatus, errorThrown) {
//             console.log("El usuario ya existe");
//             return false;
//         }
//     });
// }

// function validarExistencia() {
//     let emailValor = $("#useremailRe").val();
//     let passwordValor = $("#passwordRe").val();

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
//                 return true;
//             }
//         },
//         error: function (jdXHR, textStatus, errorThrown) {

//         }
//     });
// }
