<?php
 $idv=$_REQUEST["idv"];  
 require("veza.php");
 $pojm="SELECT * FROM tehpreg WHERE IDVO=".$idv;
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 echo "<table id=stbl>";
 echo "<tr><td id=blll colspan='4'><input type='button' id='dgm' value='NOVI UNOS' onclick='odtehp_dianov()'></td></tr>";
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){	
   		echo "<tr><td colspan=4><hr></td></tr>";
		echo "<tr><td id=sop>DATUM KUPOVINE</td><td id=stx>".$row["IZVTP"]."</td>";
		echo "<td id=sop>BROJ FISKALNOG RACUNA</td><td id=stxx>".$row["DATTP"]."</td>";
		echo "</td></tr><tr><td  id=stx colspan='5'>".$row["OPIS"]."</td></tr>";
				echo "<td id=blll><input id=dgm type='button' value='IZMENA' onclick=odtehp_diaizm('".$row["IDTP"]."')><input id=dgm type='button' value='BRISANJE' onclick=odtehp_bris('".$row["IDTP"]."')>";

   } 
 }
 echo "</table>";
 mysqli_close($con);
?>