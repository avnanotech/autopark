<?php
 $uopt=$_REQUEST["uopt"]; 
 require("veza.php");
 if ($uopt=="0"){
   $pojm="SELECT * FROM vozila ORDER BY IDVO";
   $ishod=mysqli_query($con,$pojm); 
   $brrd=mysqli_num_rows($ishod);
   echo "<option value=0000>SVI VOZILA</option>";
    if ($brrd>0) {
      while($row= mysqli_fetch_array($ishod)){	
       echo "<option value='".$row["IDVO"]."'>".$row["REGBR"]." - ".$row["MAVO"]."</option>";
      } 
    }	
  }
 else {  	
   $pojm="SELECT * FROM vozaci ORDER BY IDVO";
   $ishod=mysqli_query($con,$pojm); 
   $brrd=mysqli_num_rows($ishod);
   echo "<option value=0000>SVA VOZACI</option>";
    if ($brrd>0) {
      while($row= mysqli_fetch_array($ishod)){	
       echo "<option value='".$row["IDVO"]."'>".$row["IMPR"]."</option>";
      } 
    }	
 }
 mysqli_close($con);
?>