<?php
 $ids=$_REQUEST["ids"];  
 require("veza.php");
 $pojm="DELETE FROM primo WHERE IDPR=".$ids;
 $ishod=mysqli_query($con,$pojm); 
 $pojm="DELETE FROM oprema WHERE IDPR=".$ids;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>