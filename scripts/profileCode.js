let usuarioLogeado = JSON.parse(localStorage.getItem("user"));
let acciones = document.getElementById("rowAcciones");
let movimientos = document.getElementById("rowMovimientos");
let btnDepositar = document.getElementById("btnDepositar");
let btnRetirar = document.getElementById("btnRetirar");
let ayuda = document.getElementById("ayuda");
let btnAccion = document.getElementById("aceptarAccion");
let btnCancelarAccion = document.getElementById("cancelarAccion");
let cuadroMensajes = document.getElementById("mensajes");
let parrafoMensajes = document.getElementById("parrafoMensaje");

let banderaMovimiento = 0; //Si es 1 es Deposito, si es 2 es retiro

const minCant = 10;
const maxCant = 990;
const cantidadDecimales = 2;

document.addEventListener("DOMContentLoaded",function(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById('mensajeDia').innerHTML = "Saldo al día " + d + "/" + m + "/" + y + ":";
    document.getElementById('saldoUsuario').innerHTML = "$ " + (usuarioLogeado.saldo).toFixed(2) + " MXN";
    document.getElementById('bienvenida').innerHTML = "Bienvenid@ " + usuarioLogeado.nombre;
    movimientos.style.visibility = "hidden";
    acciones.style.visibility ="visible";
    cuadroMensajes.style.visibility ="hidden";
    document.getElementById("inputCantidad").value = 0;
})

btnDepositar.addEventListener('click', (e) =>{
    acciones.style.visibility = "hidden";
    movimientos.style.visibility ="visible";
    ayuda.textContent = "Ingrese la cantidad a Depositar."
    banderaMovimiento = 1;
    document.getElementById("inputCantidad").focus();
})

btnRetirar.addEventListener('click', (e) =>{
    acciones.style.visibility = "hidden";
    movimientos.style.visibility ="visible";
    ayuda.textContent = "Ingrese la cantidad a Retirar."
    banderaMovimiento = 2;
    document.getElementById("inputCantidad").focus();
})

btnAccion.addEventListener('click', (e) =>{
    e.preventDefault();
    let cantMovimiento = Number(document.getElementById("inputCantidad").value);
    if(cantMovimiento > 0){
        if(validarMovimiento(cantMovimiento, Number(usuarioLogeado.saldo))){
            switch(banderaMovimiento){
                case 1:
                    usuarioLogeado.saldo = Number(usuarioLogeado.saldo) + cantMovimiento;
                    localStorage.setItem("user", JSON.stringify(usuarioLogeado));
                    localStorage.setItem(usuarioLogeado.usuario, JSON.stringify(usuarioLogeado.saldo));
                    document.getElementById('saldoUsuario').innerHTML = "$ " + (usuarioLogeado.saldo).toFixed(cantidadDecimales) + " MXN";
                    movimientos.style.visibility ="hidden";
                    acciones.style.visibility ="visible";
                    parrafoMensajes.innerHTML = "Se han depositado " + cantMovimiento + " MXN a su cuenta exitosamente."
                    cuadroMensajes.style.backgroundColor = "green"
                    mensaje();
                    //Mensaje de deposito exitoso
                    break;
                case 2:
                    usuarioLogeado.saldo = Number(usuarioLogeado.saldo) - cantMovimiento;
                    localStorage.setItem("user", JSON.stringify(usuarioLogeado));
                    localStorage.setItem(usuarioLogeado.usuario, JSON.stringify(usuarioLogeado.saldo));
                    document.getElementById('saldoUsuario').innerHTML = "$ " + (usuarioLogeado.saldo).toFixed(cantidadDecimales) + " MXN";
                    movimientos.style.visibility ="hidden";
                    acciones.style.visibility ="visible";
                    parrafoMensajes.innerHTML = "Se han retirado " + cantMovimiento + " MXN de su cuenta exitosamente."
                    cuadroMensajes.style.backgroundColor = "green"
                    mensaje();
                    //Mensaje de retiro exitoso
                    break;
            }
            document.getElementById("inputCantidad").value = 0;
        }
        else{
            mensaje();
        }
    }
    else{
        if( cantMovimiento <0){
            document.getElementById("inputCantidad").value = 0;
            parrafoMensajes.innerHTML = "No se permiten numeros negativos."
            cuadroMensajes.style.backgroundColor = "red"
            mensaje();
        }
    }
})

function btnCerrarSesion(){
    localStorage.removeItem("user");
    banderaMovimiento = 0;
    window.location.href= "./index.html";
    return true;
}

function validarMovimiento(cantidad, saldo){
    switch(banderaMovimiento){
        case 1:
            if( saldo + cantidad > maxCant){
                parrafoMensajes.innerHTML = "No se puede tener mas de $" + maxCant + "MXN."
                cuadroMensajes.style.backgroundColor = "red"
                return false;
            }
            break;
        case 2:
            if(saldo - cantidad < minCant){
                parrafoMensajes.innerHTML = "No se puede tener menos de $" + minCant + "MXN."
                cuadroMensajes.style.backgroundColor = "red"
                return false;
            }
            break;
    }
    return true;
}

function mensaje(){
    cuadroMensajes.style.visibility = "visible";
    let intervalo = setInterval(evento,5000);
  
    function evento(){
        cuadroMensajes.style.visibility = "hidden";
          clearInterval(intervalo);
    }
  }