<?php
 require("veza.php");
 echo "<td id=sop>VOZILO</td><td><select name='vzlopt' onchange='kaznatab()'>";
  $pojm="SELECT * FROM vozila ORDER BY IDVO";
  $ishod=mysqli_query($con,$pojm); 
  $brrd=mysqli_num_rows($ishod);
  echo "<option value=0000>SVA vOZILA</option>";
   if ($brrd>0) {
     while($row= mysqli_fetch_array($ishod)){	
      echo "<option value='".$row["IDVO"]."'>".$row["REGBR"]." - ".$row["MAVO"]."</option>";
     } 
   }	
  echo "</select></td>";
 echo "<td id=sop>VOZAČI</td><td><select name='vzcopt' onchange='kaznatab()'>";
  $pojm="SELECT * FROM vozaci ORDER BY IDVO";
  $ishod=mysqli_query($con,$pojm); 
  $brrd=mysqli_num_rows($ishod);
  echo "<option value=0000>SVI VOZACI</option>";
   if ($brrd>0) {
     while($row= mysqli_fetch_array($ishod)){	
      echo "<option value='".$row["IDVO"]."'>".$row["IMPR"]."</option>";
     } 
   }	
   echo "</select></td>";
 echo "<td id=bltb></td><td id=bltb></td><td id=bltb></td><td id=bltb></td>";
 echo "<td id=bltb></td><td id=bltb></td><td id=bltb></td>";
 
 mysqli_close($con);
?>