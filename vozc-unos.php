<?php
 $idv=$_REQUEST["idv"];  
 $imp=$_REQUEST["imp"]; 
 $drd=$_REQUEST["drd"]; 
 $blk=$_REQUEST["blk"]; 
 $bvd=$_REQUEST["bvd"]; 
 $mup=$_REQUEST["mup"]; 
 $rod=$_REQUEST["slk"]; 
 require("veza.php");
 $pojm="INSERT INTO vozaci (IDVO,IMPR,DATROD,LKBR,BRVZD,MUP,SLK) VALUES (".$idv.",".$imp.",".$drd.",".$blk.",".$bvd.",".$mup.",".$rod.")";
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>