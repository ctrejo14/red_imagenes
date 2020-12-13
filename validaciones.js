function validar(){
	var usu=document.getElementById("nom_usuario").value;
	var nom=document.getElementById("nombre").value;
	var apel=document.getElementById("apellido").value;
	var cor=document.getElementById("correo").value;
	var cont=document.getElementById("contraseña").value;
	var conf=document.getElementById("conf_contraseña").value;
	if (usu ==""){
		alert("Debe digitar el usuario ");
		document.getElementById("nombre_usuario").focus();
		return false;
	}
	if (nom ==""){
		alert("Debe digitar el nombre personal ");
		document.getElementById("nombre").focus();
		return false;
	}
	if (apel ==""){
		alert("Debe digitar el Apellido personal ");
		document.getElementById("apellido").focus();
		return false;
	}
	if ((cont == "") || (cont.length < 8)){
        alert("La contraseña debe tener mínimo 8 caracteres");
        document.getElementById("contraseña").focus();
        return false;
	}
	if (conf != cont){
        alert("La contraseña ingresada y la confirmación no coinciden");
        document.getElementById("conf_contraseña").focus();
        return false;
	}
	return true;
}

