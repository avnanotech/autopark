<?php
 $idpr=$_REQUEST["idpr"];
 require("veza.php");
 $pojm="SELECT * FROM primo WHERE IDPR=".$idpr; 	
 /*if ($opvz == "0000"  and $opvc == "0000") {
 /*
 }
 if ($opvz == "0000"  and $opvc != "0000") {
  $pojm="SELECT * FROM primo WHERE IDVC=".$opvc; 	
 }
 if ($opvz != "0000"  and $opvc == "0000") {
  $pojm="SELECT * FROM primo WHERE IDVZ=".$opvz; 
 }
 if ($opvz != "0000"  and $opvc != "0000") {
  $pojm="SELECT * FROM primo WHERE IDVZ=".$opvz." AND IDVC=".$opvc; 
 }
 */
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 while($row= mysqli_fetch_array($ishod)){	
  echo "<tr><td id=fop>DATUM PRIMOPREDAJE</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' onclick=kald(0) type='text' value='".$row["DATPR"]."'></td></tr>";
  echo "<tr><td id=fop>VOZILO</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'>";
  $pojm1="SELECT * FROM vozila"; 	
  $ishod1=mysqli_query($con,$pojm1);
  while($row1= mysqli_fetch_array($ishod1)){ 
    if ($row1["IDVO"]==$row["IDVZ"]) {
   	 echo "<option value='".$row1["IDVO"]."' selected>".$row1["REGBR"]." - ".$row1["MAVO"]."</option>";
    }
    else {
   	 echo "<option value='".$row1["IDVO"]."'>".$row1["REGBR"]." - ".$row1["MAVO"]."</option>";   	
    }
  }
  echo "</select></td></tr>";
  echo "<tr><td id=fop>VOZAC KOJI PREDAJE</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'>";
  $pojm1="SELECT * FROM vozaci"; 	
  $ishod1=mysqli_query($con,$pojm1);
  while($row1=mysqli_fetch_array($ishod1)){ 
   if ($row1["IDVO"]==$row["IDVI"]) {
   	echo "<option value='".$row1["IDVO"]."' selected>".$row1["IMPR"]."</option>";
   }
   else {
   	echo "<option value='".$row1["IDVO"]."'>".$row1["IMPR"]."</option>"; 
   }
  } 
  echo "</select></td></tr>";
  echo "<tr><td id=fop>VOZAC KOJI PREUZIMA</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'>";
  $pojm1="SELECT * FROM vozaci"; 	
  $ishod1=mysqli_query($con,$pojm1);
  while($row1=mysqli_fetch_array($ishod1)){ 
   if ($row1["IDVO"]==$row["IDVU"]) {
   	echo "<option value='".$row1["IDVO"]."' selected>".$row1["IMPR"]."</option>";
   }
   else {
   	echo "<option value='".$row1["IDVO"]."'>".$row1["IMPR"]."</option>"; 
   }
  } 
  echo "</select></td></tr>";
  echo "<tr><td id=fop>STANJE BROJACA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["STAB"]."'></td></tr>";
  echo "<tr><td id=fop>STANJE GORIVA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' value='".$row["STAG"]."'></td></tr>";
  echo "<tr><td id=fop colspan=2>OPREMA</td></tr>";
  echo "<tr><td id=ftxt colspan=2>";
  $pojm1="SELECT * FROM oprema WHERE IDPR=".$idpr; 	
  $ishod1=mysqli_query($con,$pojm1);
  while($row1= mysqli_fetch_array($ishod1)){ 
    echo "<input type=checkbox name=obopr id=obopr value='".$row1["REZ"]."' onclick=primoop(0)"; 
    if ($row1["REZ"]=='1'){
      echo " checked>REZERVNI TOCAK";		
	}
	else {
      echo ">REZERVNI TOCAK";				
	}
    echo "<input type=checkbox name=obopr id=obopr value='".$row1["APA"]."' onclick=primoop(1)" ;
    if ($row1["APA"]=='1'){
      echo " checked>APARAT ZA GASENJE POZARA";		
	}
	else {
      echo ">APARAT ZA GASENJE POZARA";				
	}
    echo "<input type=checkbox name=obopr id=obopr value='".$row1["TRO"]."' onclick=primoop(2)"; 
    if ($row1["TRO"]=='1'){
      echo " checked>SIGURNOSNI TROUGAO<BR>";		
	}
	else {
      echo ">SIGURNOSNI TROUGAO<BR>";				
	}
    echo "<input type=checkbox name=obopr id=obopr value='".$row1["PRP"]."' onclick=primoop(3)"; 
    if ($row1["PRP"]=='1'){
      echo " checked>REZERVNI TOCAK";		
	}
	else {
      echo ">REZERVNI TOCAK";				
	}
    echo "<input type=checkbox name=obopr id=obopr value='".$row1["KLP"]."' onclick=primoop(4)"; 
    if ($row1["KLP"]=='1'){
      echo " checked>KLINASTI PODMETACI";		
	}
	else {
      echo ">KLINASTI PODMETACI";				
	}
    echo "<input type=checkbox name=obopr id=obopr value='".$row1["CEK"]."' onclick=primoop(5)"; 
    if ($row1["CEK"]=='1'){
      echo " checked>CEKIC ZA LOMLJENJE PROZORA<BR>";		
	}
	else {
      echo ">CEKIC ZA LOMLJENJE PROZORA<BR>";				
	}
    echo "<input type=checkbox name=obopr id=obopr value='".$row1["PRS"]."' onclick=primoop(6)"; 
    if ($row1["PRS"]=='1'){
      echo " checked>SVETLOODBOJNI PRSLUK";		
	}
	else {
      echo ">SVETLOODBOJNI PRSLUK";				
	}
    echo "<input type=checkbox name=obopr id=obopr value='".$row1["UZE"]."' onclick=primoop(7)";
    if ($row1["UZE"]=='1'){
      echo " checked>UZE/POLUGA ZA VUCU";		
	}
	else {
      echo ">UZE/POLUGA ZA VUCU";				
	}
  }  
  echo "</td></tr>";
  echo "<tr><td id=fop colspan=2>PRIMEDBA VOZACA KOJI PREDAJE</td></tr>";
  echo "<tr><td colspan=2><textarea id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'  rows='3' cols='100'>".$row["PRII"]."</textarea></td></tr>";
  echo "<tr><td id=fop colspan=2>PRIMEDBA VOZACA KOJI PREUZIMA</td></tr>";
  echo "<tr><td colspan=2><textarea id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'  rows='3' cols='100'>".$row["PRIU"]."</textarea></td></tr>";
  echo "<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='primo_izmunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
 }
 mysqli_close($con);
?>