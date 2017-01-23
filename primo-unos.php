<?php
 $idpr=$_REQUEST["idpr"];  
 $datp=$_REQUEST["datp"]; 
 $idvz=$_REQUEST["idvz"];
 $idvi=$_REQUEST["idvi"];  
 $idvu=$_REQUEST["idvu"];  
 $stab=$_REQUEST["stab"];  
 $stag=$_REQUEST["stag"];
 $prii=$_REQUEST["prii"];
 $priu=$_REQUEST["priu"];

 $rezt=$_REQUEST["rezt"];
 $apar=$_REQUEST["apar"];
 $trou=$_REQUEST["trou"];  
 $prpo=$_REQUEST["prpo"];  
 $klpo=$_REQUEST["klpo"];  
 $ceki=$_REQUEST["ceki"];
 $prsl=$_REQUEST["prsl"];
 $uzep=$_REQUEST["uzep"];  
 require("veza.php");
 $pojm="INSERT INTO primo (IDPR,DATPR,IDVZ,IDVI,IDVU,PRII,PRIU,STAG,STAB) VALUES (".$idpr.",".$datp.",".$idvz.",".$idvi.",".$idvu.",".$prii.",".$priu.",".$stag.",".$stab.")";
 $ishod=mysqli_query($con,$pojm);  

 $pojm1="INSERT INTO oprema (IDPR,REZ,APA,TRO,PRP,KLP,CEK,PRS,UZE) VALUES (".$idpr.",".$rezt.",".$apar.",".$trou.",".$prpo.",".$klpo.",".$ceki.",".$prsl.",".$uzep.")";
 $ishod1=mysqli_query($con,$pojm1); 
 mysqli_close($con);
?>