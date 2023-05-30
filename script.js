function showAlert() {
    alert("What's up?")
};

const miBoton = document.getElementById('miBoton');

function handleClick() {
    alert ('Este boton funciona.');
}

miBoton.addEventListener('click', handleClick);

const form = document.getElementById('myForm');
form.addEventListener('submit',function(event) {
    event.preventDefault();
    validateForm();
})

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.ariaValueMax;

    if(!validateEmail(email)) {
        alert('Por favor ingrese un correo electronico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}

//var frase = "aloja";
//function reverseString (frase){
//let reversed = frase.split(",").map(word => word.split(",").reverse().join(""));
//return reversed.join("");
//};
//reverseString();


document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
    document.querySelector(".nav-links").
    classList.toggle("nav-links-responsive")})