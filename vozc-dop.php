<?php
 $idv=$_REQUEST["idv"];  
 require("veza.php");
 $pojm="SELECT * FROM vozaci WHERE IDVO=".$idv;
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){	
    echo "<tr><td id=fop>ID VOZACA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["IDVO"]."'></td></tr>";
    echo "<tr><td id=fop>IME I PREZIME</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["IMPR"]."'></td></tr>";
    echo "<tr><td id=fop>DATUM RODJENJA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["DATROD"]."''></td></tr>";
    echo "<tr><td id=fop>BROJ LICNE KARTE</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["LKBR"]."'></td></tr>";
    echo "<tr><td id=fop>BROJ VOZACKE DOZVOLE</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["BRVZD"]."'></td></tr>";
    echo "<tr><td id=fop>MUP</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["MUP"]."'></td></tr>";
    echo "<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='vozaci_izmunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
    } 
 }
 else {
  echo "<tr><td colspan=3>CORAK</td></tr>";	
 }
 mysqli_close($con);
?>