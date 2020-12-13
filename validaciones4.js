function validar(){
	var cri=document.getElementById("criterio").value;
	if (cri ==""){
		alert("El criterio de búsqueda está vacío");
		document.getElementById("criterio").focus();
		return false;
	}
	return true;
}
	