<?php
 $idv=$_REQUEST["idv"];  
 require("veza.php");
 $pojm="SELECT * FROM servis WHERE IDVO=".$idv;
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 echo "<table id=stbl>";
 echo "<tr><td id=blll colspan='5'><input type='button' id='dgm' value='NOVI UNOS' onclick='odserv_dianov()'></td></tr>";
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){	
    echo "<tr><td colspan=5><hr></td></tr>";
    echo "<tr><td id=sop>NAZIV SERVISA</td><td id=stx>".$row["IZVS"]."</td>";
	echo "<td id=sop>DATUM SERVISA</td><td id=stxx>".$row["DATS"]."</td>";
	echo "<td id=blll><input id=dgm type='button' value='IZMENA' onclick=odserv_diaizm('".$row["IDSR"]."')>";
	echo "<input id=dgm type='button' value='BRISANJE' onclick=odserv_bris('".$row["IDSR"]."')></td></tr>";
	echo "<tr><td id=sop>ODGOVORNO LICE</td><td id=stx>".$row["ODGL"]."</td>";
	echo "<td id=stx rowspan=2 colspan=3>".$row["OPIS"]."</td></tr>";
    echo "<tr><td id=sop>KONTAKT</td><td id=stx>".$row["KONL"]."</td></tr>";
   } 
 }
 echo "</table>";
 mysqli_close($con);
?>