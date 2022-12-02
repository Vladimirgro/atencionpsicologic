jQuery(document).ready(function($){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:3
        }
      }
    })
  })

  // Iniciar firebase
//Configuracion de firebase
var config = {
  authDomain: "app-web-psicologa-mag-default-rtdb.firebaseio.com",
  databaseURL: "https://app-web-psicologa-mag-default-rtdb.firebaseio.com",
  storageBucket: "app-web-psicologa-mag-default-rtdb.appspot.com"
}

//inizialite Firebase
firebase.initializeApp(config)

//
$('#formContacto').submit(function(e){
  e.preventDefault(); //Para no recargar la página
//Se crea un Id
var mensajeId = Math.floor((Math.random() * 123456789) + 20)

//Valores del formulario
var nombre = $('#nombre').val()
var email = $('#email').val()
var telefono = $('#telefono').val()
var mensaje = $('#mensaje').val()


//Función para agregar los datos a firebase
firebase.database().ref('mensajes/' + mensajeId).set({
    nombre: nombre,
    email: email,
    telefono : telefono,
    mensaje: mensaje,
    id: mensajeId
  }, (error) => {
    if (error) {
      alert('Error al enviar un mensaje, favor de intentar más tarde')
     
    } else {
      alert('El mensaje se envío de manera correcta')
      $('#formContacto')[0].reset()
    }
});

})