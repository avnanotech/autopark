<?php
 $ids=$_REQUEST["ids"];  
 $idv=$_REQUEST["idv"]; 
 $izvs=$_REQUEST["izvs"]; 
 $odgs=$_REQUEST["odgs"]; 
 $kons=$_REQUEST["kons"]; 
 $dats=$_REQUEST["dats"]; 
 $opis=$_REQUEST["opis"]; 
 require("veza.php");
 $pojm="INSERT INTO servis (IDSR,IDVO,DATS,IZVS,ODGL,KONL,OPIS) VALUES (".$ids.",".$idv.",".$dats.",".$izvs.",".$odgs.",".$kons.",".$opis.")";
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>