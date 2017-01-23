<?php
 require("veza.php");
 $idv=$_REQUEST["idv"];  
 $reg=$_REQUEST["reg"]; 
 $ser=$_REQUEST["ser"]; 
 $mav=$_REQUEST["mav"]; 
 $gpr=$_REQUEST["gpr"]; 
 $kub=$_REQUEST["kub"]; 
 $drg=$_REQUEST["drg"]; 
 $izb=rand(1,5);
 switch($izb){
 	case 1:
          $oslk="'image/vocr.jpg'"; 	
          break;
 	case 2:
          $oslk="'image/vopl.jpg'"; 
          break;
 	case 3:
          $oslk="'image/voze.jpg'"; 	
          break;
 	case 4:
          $oslk="'image/voor.jpg'"; 	
          break;
 	case 5:
          $oslk="'image/volj.jpg'"; 	
          break;
 }
 $pojm="INSERT INTO vozila (IDVO,REGBR,SERBR,MAVO,GODPR,KUBI,DATRG,SLIKA) VALUES (".$idv.",".$reg.",".$ser.",".$mav.",".$gpr.",".$kub.",".$drg.",".$oslk.")";
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>