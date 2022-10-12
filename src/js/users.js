let cuentas = [
    {   nombre: "Jared Mendoza", 
        usuario: "jared123",
        contraseña: "123",
        saldo: 200
  },
    {   nombre: "Krystel Baca", 
        usuario: "kris321",
        contraseña: "123",
        saldo: 599.99 
  },
    {   nombre: "Andres Sanchez", 
        usuario: "serdna",
        contraseña: "123",
        saldo: 750.01 
  }
  ];
  
  document.addEventListener("DOMContentLoaded",function(){
  let id = 0;
  cuentas.forEach(element => {
    id ++;
    guardarEnLocal(element.usuario, element.saldo);
  });   
  })
  
  function guardarEnLocal(id, elemento){
  if (! (localStorage.hasOwnProperty(id))){
    localStorage.setItem(id , JSON.stringify(elemento));
  }
  }