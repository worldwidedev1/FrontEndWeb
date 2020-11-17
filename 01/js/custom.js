var boton = document.getElementById("login");
var username = document.getElementById("user");
var password = document.getElementById("pass");

boton.addEventListener("click", function (event) {
	event.preventDefault();

	if (password.value === "" || username.value === "") {
		alert("Debes rellenar ambos campos");
	}

	if (password.value !== "" || username.value !== "") {
		alert("Hola " + username.value + ", bienvenido de nuevo.");
	}
});
