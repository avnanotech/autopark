<?php
 $idv=$_REQUEST["idv"];  
 require("veza.php");
 $pojm="DELETE FROM vozila WHERE IDVO=".$idv;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>