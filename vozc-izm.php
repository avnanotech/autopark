<?php
 $idv=$_REQUEST["idv"];  
 $imp=$_REQUEST["imp"]; 
 $drd=$_REQUEST["drd"]; 
 $blk=$_REQUEST["blk"]; 
 $bvd=$_REQUEST["bvd"]; 
 $mup=$_REQUEST["mup"]; 
 $slk=$_REQUEST["slk"]; 
 require("veza.php");
 $pojm="UPDATE vozaci SET IMPR=".$imp.",DATROD=".$drd.",LKBR=".$blk.",BRVZD=".$bvd.",MUP=".$mup.",SLK=".$slk." WHERE IDVO=".$idv;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>