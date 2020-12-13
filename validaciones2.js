function validar(){
	var usu=document.getElementById("usuario").value;
	var cont=document.getElementById("pas_usuario").value;
	if (usu ==""){
		alert("Debe digitar el usuario ");
		document.getElementById("usuario").focus();
		return false;
	}
	if (cont == ""){
        alert("La contraseña no debe estar vacía");
        document.getElementById("pas_usuario").focus();
        return false;
	}
	return true;
}

