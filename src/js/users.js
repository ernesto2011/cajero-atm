let cuentas = [
    {   nombre: "Mali rodriguez", 
        usuario: "mali",
        contraseña: "admin",
        saldo: 200
  },
    {   nombre: "Daniela Salazar", 
        usuario: "danny",
        contraseña: "pass01",
        saldo: 599.99 
  },
    {   nombre: "Carla Nuñez", 
        usuario: "car@1",
        contraseña: "123",
        saldo: 750.01 
  },
    {
        nombre: "Diana Segundo", 
        usuario: "diana@admin",
        contraseña: "1234",
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