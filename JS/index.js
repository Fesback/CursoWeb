// realizamos la importación de los módulos
document.getElementById('whatsappform').onsubmit = function(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log(name);
    console.log(lastname);
    console.log(email);
    console.log(message);

    var phonenumber = '51920023979';

    var whatsappUrl = 'https://wa.me/' +phonenumber+ '?text='+encodeURIComponent ('Hola, soy '+name+ ' '+lastname+ ' y quiero decirte que '+message + ' mi correo es: '+email);

    window.open(whatsappUrl);
}

// Función para abrir el modal
function openModal(imgElement) {
    var modal = document.getElementById("imgModal");
    var modalImg = document.getElementById("modalImg");
    
    // Cambiar la fuente de la imagen en el modal a la de la imagen seleccionada
    modalImg.src = imgElement.src;
    
    // Mostrar el modal
    modal.style.display = "flex";
}

// Función para cerrar el modal al hacer clic fuera de la imagen
function closeModal() {
    var modal = document.getElementById("imgModal");
    modal.style.display = "none";
}


// para el boton BURGER
// Seleccionar elementos
const burger = document.getElementById('burger');
const navbarLinks = document.getElementById('navbarLinks');

burger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

window.addEventListener('click', (event) => {
    const isClickInsideBurger = burger.contains(event.target);
    const isClickInsideNav = navbarLinks.contains(event.target);

    if (!isClickInsideBurger && !isClickInsideNav) {
        navbarLinks.classList.remove('active');
    }
});

