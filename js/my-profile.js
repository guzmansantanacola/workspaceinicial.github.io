


    usuarioguardado = localStorage.getItem("nombredeusuario");
    document.getElementById("nombreusuario").innerHTML = usuarioguardado;
    
/** DESPLEGABLE */


    document.addEventListener("DOMContentLoaded", function () {
let nombreUsuarioButton = document.getElementById("nombreusuario");
let menuDesplegable = document.createElement("ul");
    menuDesplegable.id = "menu-desplegable";
    let menu = localStorage.getItem("menuVisible") === "true";
   
    menuDesplegable.innerHTML = `
        <li ><a href="carrito.html">Mi Carrito</a></li>
        <li ><a href="my-profile.html">Mi Perfil</a></li>
        <li c><button id="cerrarSesion">Cerrar Sesión</button></li>
    `;
    menuDesplegable.style.display = "none";
nombreUsuarioButton.addEventListener("click", function (){

    const rect = nombreUsuarioButton.getBoundingClientRect();
    const top = rect.bottom;
    const left = rect.left;

   
    menuDesplegable.style.position = "fixed";
    menuDesplegable.style.top = `${top}px`;
    menuDesplegable.style.left = `${left}px`;
  
    if (menuDesplegable.style.display === "none") {
        menuDesplegable.style.display = "block";
        localStorage.setItem("menuVisible", "false")
    } else {
        menuDesplegable.style.display = "block";
        
    }
});
document.body.appendChild(menuDesplegable);
});






