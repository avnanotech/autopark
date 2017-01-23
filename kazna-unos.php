<?php
 $idkp=$_REQUEST["idkp"];  
 $idvz=$_REQUEST["idvz"]; 
 $idvc=$_REQUEST["idvc"]; 
 $datk=$_REQUEST["datk"]; 
 $relk=$_REQUEST["relk"]; 
 $opis=$_REQUEST["opis"]; 
 require("veza.php");
 $pojm="INSERT INTO kazpre (IDKP,IDVZ,IDVC,RELKP,DATKP,OPKP) VALUES (".$idkp.",".$idvz.",".$idvc.",".$relk.",".$datk.",".$opis.")";
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>