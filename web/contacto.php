<?php
	$destino 	= "spa@tivogliobella.com.ar";
	$nombre 	= $_POST["nombre"];
	$motivo  	= "Consulta";
	$numero     = $_POST["numero"];
	$mail       = $_POST["mail"];
	$mensaje    = $_POST["mensaje"];
	$contenido  = "Nombre: " . $nombre  . "\nNumero: " . $numero .  "\nCorreo: ". $mail . "\nMensaje: ". $mensaje;
	mail($destino, $motivo, $contenido);
	header("Location:gracias.html");
?>