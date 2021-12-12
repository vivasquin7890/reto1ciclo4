function RegistrarUser() {

    let status = validar();

    if (status == 'S') {
        console.log(status);

        let dato = {
            email: $("#Email").val(),
            pass: $("#Password").val()
        }

        // //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
        let datosPeticion = JSON.stringify(dato);
        // console.log(datosPeticion.value);
        $.ajax({
            url: "http://localhost:8080/api/user/" + dato.email + "/" + dato.pass,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {                
                ValidarRespuesta(respuesta)
            }
        })
    }
}


function validar(){
    let error = "S";


    let campo1=document.getElementById('Email');
    let campo2=document.getElementById('Password');
    const expReg=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if(campo1.value.length==0){
        alert("Tiene que escribir un usuario")
        Email.focus();
        error = 'E'
    }

    if(campo2.value.length==0){
        alert("Tiene que escribir una contraseña")
        Password.focus();
        error = 'E'
    }
    
    if (expReg.test(campo1.value) == false) {
        alert("Email invalido");
        Email.focus();
        error = 'E'
    }

    return error;
    
}    
    
function ValidarRespuesta(dato) {
    if (dato.id === null){
        alert("Usuario no registrado, por favor registrarse!!!")

    }else{
        alert("Bienvenido a nuestro sistema"+dato.name)
    }
    
}    
    
    













