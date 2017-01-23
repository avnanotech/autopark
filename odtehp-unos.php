<?php
 $idtp=$_REQUEST["ids"];  
 $idv=$_REQUEST["idv"]; 
 $izvs=$_REQUEST["izvs"]; 
 $dats=$_REQUEST["dats"]; 
 $opis=$_REQUEST["opis"]; 
 require("veza.php");
 $pojm="INSERT INTO tehpreg (IDTP,IDVO,DATTP,IZVTP,OPIS) VALUES (".$idtp.",".$idv.",".$dats.",".$izvs.",".$opis.")";
 $ishod=mysqli_query($con,$pojm); 
 mysqli_close($con);
?>