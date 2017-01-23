<?php
 $idkp=$_REQUEST["idkp"]; 
 $idvz=$_REQUEST["idvz"]; 
 $idvc=$_REQUEST["idvc"]; 
 $relk=$_REQUEST["relk"]; 
 $datk=$_REQUEST["datk"]; 
 $opis=$_REQUEST["opis"]; 
 require("veza.php");
 $pojm="UPDATE kazpre SET IDVZ=".$idvz.",IDVC=".$idvc.",RELKP=".$relk.",DATKP=".$datk.",OPKP=".$opis." WHERE IDKP=".$idkp;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>