<?php
 require("veza.php");
 $pojm="SELECT * FROM vozila ORDER BY IDVO";
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 echo "<tr><td id=blll colspan=3><input type='button' id=dgm value='NOVO VOZILO' onclick='vozila_dianov()'></center></td></tr>";
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){	
    $lnk=$row["SLIKA"];
    $idv=$row["IDVO"];
    echo "<tr><td colspan=3><hr></td></tr>";
    echo "<tr><td rowspan=6><img src=".$lnk."></td><td id=opp>REGISTARSKI BROJ</td><td id=txt>".$row["REGBR"]."</td></tr>";
    echo "<tr><td id=opp>SERIJSKI BROJ</td><td id=txt>".$row["SERBR"]."</td></tr>";
    echo "<tr><td id=opp>MARKA</td><td id=txt>".$row["MAVO"]."</td></tr>";
    echo "<tr><td id=opp>GODINA PROIZVODNJE</td><td id=txt>".$row["GODPR"]."</td></tr>";
    echo "<tr><td id=opp>KUBIKAZA</td><td id=txt>".$row["KUBI"]."</td></tr>";
    echo "<tr><td id=opp>DATUM REGISTRACIJE</td><td id=txt>".$row["DATRG"]."</td></tr>";
    echo "<tr><td id=blll colspan=3><input type='button' id=dgm value='IZMENA' onclick=vozila_diaizm('".$idv."')><input type='button'  id=dgm value='BRISANJE' onclick=vozila_bris('".$idv."')></td></tr>";
   } 
 }
 mysqli_close($con);
?>