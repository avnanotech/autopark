<?php
 require("veza.php");
 $pojm="SELECT * FROM vozila ORDER BY IDVO";
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 echo "<tr><td id=sop>VOZILO</td>";
 echo "<td><select name='vozopt' onchange='odservtab()'>";
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){	
    echo "<option value='".$row["IDVO"]."'>".$row["REGBR"]." - ".$row["MAVO"]."</option>";
   } 
 }
 echo "</select></td>";               
 echo "<td id=bltb></td><td id=bltb></td><td id=bltb></td><td id=bltb></td><td id=bltb></td><td id=bltb></td>";
 echo "<td id=bltb></td><td id=bltb></td><td id=bltb></td></tr>";
 echo "<tr><td id=mnn name=mnn onclick=odservtab()>SERVIS</td><td id=mnn name=mnn onclick=odtehptab()>TEHNICKI PREGLED</td><td id=bltb></td><td id=bltb></td>"; 
 echo "<td id=bltb></td><td id=bltb></td><td id=bltb></td><td id=bltb></td><td id=bltb></td>";
 echo "<td id=bltb></td><td id=bltb></td></tr>";
 echo "<tr><td id=servek colspan='10'></td></tr>";
 mysqli_close($con);
?>