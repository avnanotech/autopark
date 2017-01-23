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
 $pojm="UPDATE primo SET DATPR=".$datp.",IDVZ=".$idvz.",IDVI=".$idvi.",IDVU=".$idvu.",PRII=".$prii.",PRIU=".$priu.",STAG=".$stag.",STAB=".$stab." WHERE IDPR=".$idpr;
 $ishod=mysqli_query($con,$pojm);  

 $pojm1="UPDATE oprema SET REZ=".$rezt.",APA=".$apar.",TRO=".$trou.",PRP=".$prpo.",KLP=".$klpo.",CEK=".$ceki.",PRS=".$prsl.",UZE=".$uzep." WHERE IDPR=".$idpr;
 $ishod1=mysqli_query($con,$pojm1); 
 mysqli_close($con);
?>