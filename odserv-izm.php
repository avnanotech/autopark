<?php
 $ids=$_REQUEST["idss"];
 $idv=$_REQUEST["idv"];
 $izvs=$_REQUEST["izvs"];  
 $odgs=$_REQUEST["odgs"]; 
 $kons=$_REQUEST["kons"];  
 $dats=$_REQUEST["dats"];  
 $opis=$_REQUEST["opis"];  
 require("veza.php");
 $pojm="UPDATE servis SET DATS=".$dats.",IZVS=".$izvs.",ODGL=".$odgs.",KONL=".$kons.",OPIS=".$opis." WHERE IDSR=".$ids;
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>