<?php
 $ids=$_REQUEST["ids"];  
 require("veza.php");
 $pojm="DELETE FROM servis WHERE IDSR=".$ids;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>