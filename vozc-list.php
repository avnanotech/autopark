<?php
 require("veza.php");
 $pojm="SELECT * FROM vozaci ORDER BY IDVO";
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 echo "<tr><td colspan=3 id=blll><input type='button' id=dgm value='NOVI VOZAC' onclick='vozaci_dianov()'></center></td></tr>";
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){
    $lnk=$row["SLK"];
    if  ($lnk=="M"){
	$lnk="image/muz.jpg";	
	}
   else{
	$lnk="image/zen.jpg";	 	
    }	
    $idv=$row["IDVO"];
    echo "<tr><td rowspan=5><img src=".$lnk."></td><td id=opp>IME I PREZIME VOZACA</td><td id=txt>".$row["IMPR"]."</td></tr>";
    echo "<tr><td id=opp>DATUM ROÐENJA</td><td id=txt>".$row["DATROD"]."</td></tr>";
    echo "<tr><td id=opp>BROJ LICNE KARTE</td><td id=txt>".$row["LKBR"]."</td></tr>";
    echo "<tr><td id=opp>BROJ VOZACKE DOZVOLE</td><td id=txt>".$row["BRVZD"]."</td></tr>";
    echo "<tr><td id=opp>MUP</td><td id=txt>".$row["MUP"]."</td></tr>";
    echo "<tr><td colspan=3 id=blll><input type='button' id=dgm value='IZMENA' onclick=vozaci_diaizm('".$idv."')><input type='button'  id=dgm value='BRISANJE' onclick=vozaci_bris('".$idv."')></td></tr>";
   } 
 }
 mysqli_close($con);
?>