<?php
 $ids=$_REQUEST["ids"];  
 require("veza.php");
 $pojm="DELETE FROM kazpre WHERE IDKP=".$ids;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>