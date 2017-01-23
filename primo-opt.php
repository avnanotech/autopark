<?php
 require("veza.php");
 echo "<td id=sop>VOZILO</td><td><select name='vzlopt' onchange='primotab()'>";
  $pojm="SELECT * FROM vozila ORDER BY IDVO";
  $ishod=mysqli_query($con,$pojm); 
  $brrd=mysqli_num_rows($ishod);
  echo "<option value=0000>SVA VOZILA</option>";
   if ($brrd>0) {
     while($row= mysqli_fetch_array($ishod)){	
      echo "<option value='".$row["IDVO"]."'>".$row["REGBR"]." - ".$row["MAVO"]."</option>";
     } 
   }	
 echo "</select></td><td id=bltb></td><td id=bltb></td>";
 echo "<td id=bltb></td><td id=bltb></td><td id=bltb></td><td id=bltb></td>";
 echo "<td id=bltb></td><td id=bltb></td><td id=bltb></td>";
 
 mysqli_close($con);
?>