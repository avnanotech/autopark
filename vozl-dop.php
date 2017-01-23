<?php
 $idv=$_REQUEST["idv"];  
 require("veza.php");
 $pojm="SELECT * FROM vozila WHERE IDVO=".$idv;
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){	
    echo "<tr><td id=fop>REGISTARSKI BROJ</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["REGBR"]."'></td></tr>";
    echo "<tr><td id=fop>SERIJSKI BROJ</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["SERBR"]."'></td></tr>";
    echo "<tr><td id=fop>MARKA VOZILA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["MAVO"]."'></td></tr>";
    echo "<tr><td id=fop>GODINA PROIZVODNJE</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["GODPR"]."'></td></tr>";
    echo "<tr><td id=fop>KUBIKAZA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["KUBI"]."'></td></tr>";
    echo "<tr><td id=fop>DATUM REGISTRACIJE</td><td id=ftx><input id=fdtx name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'  value='".$row["DATRG"]."' readonly><input id='dgmd' type='button' value='+' onclick=kald(5)></td></tr>";
    echo "<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='vozila_izmunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
    } 
 }
 else {
  echo "<tr><td colspan=3>CORAK</td></tr>";	
 }
 mysqli_close($con);
?>