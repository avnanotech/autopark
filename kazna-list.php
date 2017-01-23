<?php
 $opvz=$_REQUEST["opvz"];
 $opvc=$_REQUEST["opvc"];  
 require("veza.php");
 if ($opvz == "0000"  and $opvc == "0000") {
  $pojm="SELECT * FROM kazpre"; 	
 }
 if ($opvz == "0000"  and $opvc != "0000") {
  $pojm="SELECT * FROM kazpre WHERE IDVC=".$opvc; 	
 }
 if ($opvz != "0000"  and $opvc == "0000") {
  $pojm="SELECT * FROM kazpre WHERE IDVZ=".$opvz; 
 }
 if ($opvz != "0000"  and $opvc != "0000") {
  $pojm="SELECT * FROM kazpre WHERE IDVZ=".$opvz." AND IDVC=".$opvc; 
 }
 
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 echo "<td colspan='10'><table id=stbl><tr><td id=blll colspan='5'>";
 echo "<input type='button' id='dgm' value='NOVI UNOS' onclick='kazna_dianov()'>";
 echo "</td></tr><tr><td colspan='5'><hr></td></tr>";
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){	
    echo "<tr><td id=sop>DATUM NESREĆE</td><td id=stx>".$row["DATKP"]."</td>";
    echo "<td id=sop>RELACIJA</td><td id=stx>".$row["RELKP"]."</td>";
    echo "<td id=blll><input id=dgm type='button' value='IZMENA' onclick='kazna_diaizm(".$row["IDKP"].")'></td></tr>";
    $pojm1="SELECT * FROM vozila WHERE IDVO=".$row{"IDVZ"};
    $ishod1=mysqli_query($con,$pojm1); 
    while($row1= mysqli_fetch_array($ishod1)){	
     echo "<tr><td id=sop>REGISTARSKI BROJ VOZILO</td><td id=stx>".$row1["REGBR"]."</td>";
    } 
    $pojm2="SELECT * FROM vozaci WHERE IDVO=".$row{"IDVC"};
    $ishod2=mysqli_query($con,$pojm2); 
    while($row2= mysqli_fetch_array($ishod2)){	
     echo "<td id=sop>IME VOZAČA</td><td id=stx>".$row2["IMPR"]."</td>";
    } 
    echo "<td id=blll><input id=dgm type='button' value='BRISANJE' onclick='kazna_bris(".$row["IDKP"].")'></td></tr>";
    echo "<tr><td colspan=5 id=stx>".$row{"OPKP"}."</td></tr>";
   } 
 }
 echo "</table></td>";
 mysqli_close($con);
?>