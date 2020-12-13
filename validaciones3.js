function validar(){
	var usu=document.getElementById("nom_usuario").value;
	var ema=document.getElementById("correo_elec").value;
	if (usu ==""){
		alert("Debe digitar el usuario ");
		document.getElementById("nom_usuario").focus();
		return false;
	}
	if (ema ==""){
		alert("Debe digitar su correo electrónico ");
		document.getElementById("correo_elec").focus();
		return false;
	}
	return true;
}
function volver(){
	window.location.href="inicio_sesion.html";
}
	
