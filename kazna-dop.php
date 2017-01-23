<?php
 $idk=$_REQUEST["idk"];  
 require("veza.php");
 $pojm="SELECT * FROM kazpre WHERE IDKP=".$idk;
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){	
    echo "<tr><td id=fop>DATUM NESREÉE</td><td id=ftx><input id=fdtx name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["DATKP"]."' readonly><input id='dgmd' type='button' value='+' onclick=kald(0)></td></tr>";
    echo "<tr><td id=fop>RELACIJA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["RELKP"]."'></td></tr>";
    echo "<tr><td id=fop>IME I PREZIME VOZACA</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'>";
    $pojm1="SELECT * FROM vozaci";
    $ishod1=mysqli_query($con,$pojm1); 
    $brrd1=mysqli_num_rows($ishod1);
    if ($brrd1>0) {
      while($row1= mysqli_fetch_array($ishod1)){
      	if ($row1["IDVO"]==$row["IDVC"]){
         echo "<option selected value='".$row1["IDVO"]."'>".$row1["IMPR"]."</option>";      
		} 
		else {
         echo "<option value='".$row1["IDVO"]."'>".$row1["IMPR"]."</option>";       			
		}
      }  
    }
    echo "</select></td></tr>";
    echo "<tr><td id=fop>VOZILO</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'>";
    $pojm2="SELECT * FROM vozila";
    $ishod2=mysqli_query($con,$pojm2); 
    $brrd2=mysqli_num_rows($ishod2);
    if ($brrd2>0) {
      while($row2= mysqli_fetch_array($ishod2)){
      	if ($row2["IDVO"]==$row["IDVZ"]){
         echo "<option selected value='".$row2["IDVO"]."'>".$row2["REGBR"]." - ".$row2["MAVO"]."</option>";      
		} 
		else {
         echo "<option value='".$row2["IDVO"]."'>".$row2["REGBR"]." - ".$row2["MAVO"]."</option>";       			
		}
      }  
    }
    echo "</select></td></tr>";
    echo "<tr><td id=fop>OPIS</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["OPKP"]."'></td></tr>";
    echo "<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='kazna_izmunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
   } 
 }
 else {
  echo "<tr><td colspan=3>CORAK</td></tr>";	
 }
 mysqli_close($con);
?>