
//Variables globales
let msjLogingIncorrecto = document.getElementById("msjErrorLoging");
let usuarioIngresado = document.getElementById("usuario");
let constraseñaIngresada = document.getElementById("password");
let btnIngreso = document.getElementById("inicio")




btnIngreso.addEventListener('click', (e) =>{
    e.preventDefault();
    //Validar si usuario existe
    var objUsuario = cuentas.find(obj => {return obj.usuario === usuarioIngresado.value});
    if(objUsuario){ 
      if( usuarioIngresado.value == objUsuario.usuario && constraseñaIngresada.value == objUsuario.contraseña ){
        
        objUsuario = (({usuario, nombre, saldo}) => ({usuario, nombre, saldo}))(objUsuario); 
        objUsuario.saldo = JSON.parse(localStorage.getItem(usuarioIngresado.value));
        localStorage.setItem("user" , JSON.stringify(objUsuario));
        
        setTimeout( function() { window.location.href = "./home.html"; }, 1000 );
        Swal.fire(`Bienvenido: ${objUsuario.nombre}`)
      }
      
    }else{
      Swal.fire(
        'Error',
        'Los datos son inválidos! intente nuevamente :)',
        'error'
    )
    form.reset();
    }
    
  })

