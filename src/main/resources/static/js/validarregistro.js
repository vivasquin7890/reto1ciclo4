function RegistrarUser() {

    let status = validar();
    console.log("Validacion "+ status);
    

    if (status == 'S') {
        

        let dato = {
            email: $("#Email").val(),
            pass: $("#Password1").val()
        }

        // //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
        let datosPeticion = JSON.stringify(dato);
        
        $.ajax({
            url: "http://localhost:8080/api/user/" + dato.email,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                ValidarRespuesta(respuesta)
                
            }
        })
    }
    
}


function validar(){
    let Nombre = document.getElementById('Nombre');
    let Password1 = document.getElementById('Password1');
    let Password2 = document.getElementById('Password2');
    let Email = document.getElementById('Email');
    let error = "S";
    const expReg=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    let otro = {
        nombre:$("#Nombre").val(),
        email:$("#Email").val()
    } 

    if($(#Nombre).val().length==0){
        alert("Tiene que escribir un usuario")
        Nombre.focus()
        return 0;

    }

    if($(#Email).val().length==0){
        alert("Tiene que escribir un email")
        Email.focus()
        return 0;

    }

    if(expReg.test(Email.value)==false){
        alert("Tiene que escribir un email valido")
        Email.focus()
        error= 'E'
    }

    if(Password1.value.length==0){
        alert("Tiene que escribir una contraseña")
        password1.focus()
        error= 'E'
    }

    

    if(password2.value.length==0){
        alert("Tiene que confirmar la contraseña")
        password2.focus()
        error= 'E'
    }

    

    if (password1.value!=password2){
        alert("la contraseña deben coincidir")


    }

    if (expReg.test(email.value) == false) {
        window.alert("Email invalido");
        Email.focus();
        error = 'E'
    }

    return error;

}

function ValidarRespuesta(dato) {
    
    if (dato) {
        window.alert("Usuario ya esta registrado");

    } else {
        let guardar = {
            name: $("#Nombre").val(),
            email: $("#Email").val(),
            password: $("#Password1").val()
        }
        // //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
        let datosPeticion = JSON.stringify(guardar);
        // console.log(guardar);
        
        $.ajax({
            url: "http://localhost:8080/api/user/new" ,
            data : datosPeticion,
            type: "POST",
            datatype: "JSON",
            contentType:"application/JSON",
            success: function (respuesta){}
        })
    }

}





