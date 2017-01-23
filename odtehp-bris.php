<?php
 $ids=$_REQUEST["ids"];  
 require("veza.php");
 $pojm="DELETE FROM tehpreg WHERE IDTP=".$ids;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>