<?php
 $idss=$_REQUEST["idss"];  
 $idv=$_REQUEST["idv"]; 
 $izvs=$_REQUEST["izvs"]; 
 $dats=$_REQUEST["dats"]; 
 $opis=$_REQUEST["opis"]; 
 require("veza.php");
 $pojm="UPDATE tehpreg SET IDVO=".$idv.",DATTP=".$dats.",IZVTP=".$izvs.",OPIS=".$opis." WHERE IDTP=".$idss;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>