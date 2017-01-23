<?php
 $idv=$_REQUEST["idv"];  
 require("veza.php");
 $pojm="DELETE FROM vozaci WHERE IDVO=".$idv;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>