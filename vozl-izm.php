<?php
 $idv=$_REQUEST["idv"];  
 $reg=$_REQUEST["reg"]; 
 $ser=$_REQUEST["ser"]; 
 $mav=$_REQUEST["mav"]; 
 $gpr=$_REQUEST["gpr"]; 
 $kub=$_REQUEST["kub"]; 
 $drg=$_REQUEST["drg"]; 
 require("veza.php");
 $pojm="UPDATE vozila SET REGBR=".$reg.",MAVO=".$mav.",SERBR=".$ser.",GODPR=".$gpr.",KUBI=".$kub.",DATRG=".$drg." WHERE IDVO=".$idv;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>