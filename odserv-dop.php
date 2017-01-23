<?php
 $ids=$_REQUEST["ids"];  
 require("veza.php");
 $pojm="SELECT * FROM servis WHERE IDSR=".$ids;
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){	
    echo "<tr><td id=fop>NAZIV SERVISA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["IZVS"]."'></td></tr>";
    echo "<tr><td id=fop>IME ODGOVORNOG LICA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["ODGL"]."'></td></tr>";
    echo "<tr><td id=fop>KONTAKT</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["KONL"]."'></td></tr>";
    echo "<tr><td id=fop>DATUM SERVISA</td><td id=ftx><input id=fdtx name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["DATS"]."' readonly><input id='dgmd' type='button' value='+' onclick=kald(3)></td></tr>";
    echo "<tr><td id=fop>OPIS</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["OPIS"]."'></td></tr>";
    echo "<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='odserv_izmunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
   } 
 }
 else {
  echo "<tr><td colspan=3>CORAK</td></tr>";	
 }
 mysqli_close($con);
?>