<?php
 $rezt=$_REQUEST["rezt"];
 $apar=$_REQUEST["apar"];
 $trou=$_REQUEST["trou"];  
 $prpo=$_REQUEST["prpo"];  
 $klpo=$_REQUEST["klpo"];  
 $ceki=$_REQUEST["ceki"];
 $prsl=$_REQUEST["prsl"];
 $uzep=$_REQUEST["uzep"];  
 require("veza.php");
 $pojm1="INSERT INTO oprema (IDPR,REZ,APA,TRO,PRP,KLP,CEK,PRS,UZE) VALUES (".$idpr.",".$rezt.",".$apar.",".$trou.",".$prpo.",".$klpo.",".$ceki.",".$prsl.",".$uzep.")";
 $ishod1=mysqli_query($con,$pojm1); 
 mysqli_close($con);
?>