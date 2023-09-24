


    usuarioguardado = localStorage.getItem("nombredeusuario");
    document.getElementById("nombreusuario").innerHTML = usuarioguardado;
    
/** DESPLEGABLE */

    document.addEventListener("DOMContentLoaded", function () {

    let nombreUsuarioButton = document.getElementById("nombreusuario");

    let menuDesplegable = document.createElement("ul");

    menuDesplegable.id = "menu-desplegable";

    let menu = localStorage.getItem("menuVisible") === "true";
   
    menuDesplegable.innerHTML = `
        <li ><a href="cart.html">Mi Carrito</a></li>
        <li ><a href="my-profile.html">Mi Perfil</a></li>
         <div class="modos">
           <li><button id="modoDia">Modo Día</button> </li>
           <li><button id="modoNoche">Modo Noche</button>  </li>
          </div> 
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



/*MODOS*/

document.getElementById("modoDia").addEventListener("click", function () {
    menuDesplegable.classList.remove("modo-noche");
    menuDesplegable.classList.add("modo-dia");
    console.log("modo DIA");
  });
  
  document.getElementById("modoNoche").addEventListener("click", function () {
    menuDesplegable.classList.remove("modo-dia");
    menuDesplegable.classList.add("modo-noche");
    console.log("modo NOCHE")
  }); 
}); 







