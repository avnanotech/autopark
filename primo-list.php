<?php
 $opvz=$_REQUEST["opvz"];
 require("veza.php");
 if ($opvz == "0000" ) {
   $pojm="SELECT * FROM primo"; 	
 }
 else  {
  $pojm="SELECT * FROM primo WHERE IDVZ=".$opvz; 	
 }
 $ishod=mysqli_query($con,$pojm); 
 $brrd=mysqli_num_rows($ishod);
 echo "<td colspan='10'><table id=stbl><tr><td id=blll colspan=4>";
 echo "<input type='button' id=dgm value='NOVI UNOS' onclick='primo_dianov()'></td></tr>";
 if ($brrd>0) {
   while($row= mysqli_fetch_array($ishod)){	
    echo "<tr><td colspan=4><hr></td></tr>";
    echo "<tr><td id=sop>DATUM PRIMOPREDAJE</td><td id=stx>".$row["DATPR"]."</td>";
    echo "<td id=sop>REGISTARSKI BROJ VOZILA</td>";
    $pojm1="SELECT * FROM vozila WHERE IDVO=".$row{"IDVZ"};
    $ishod1=mysqli_query($con,$pojm1); 
    while($row1= mysqli_fetch_array($ishod1)){	
     echo "<td id=stx>".$row1["REGBR"]."</td>";
    } 
    echo "</tr><tr><td id=sop>VOZAC KOJI PREDAJE</td>";
    $pojm2="SELECT * FROM vozaci WHERE IDVO=".$row{"IDVI"};
    $ishod2=mysqli_query($con,$pojm2); 
    while($row2= mysqli_fetch_array($ishod2)){	
     echo "<td id=stx>".$row2["IMPR"]."</td>";
    } 
    echo "<td id=sop>VOZAC KOJI PREUZIMA</td>";
    $pojm3="SELECT * FROM vozaci WHERE IDVO=".$row{"IDVU"};
    $ishod3=mysqli_query($con,$pojm3); 
    while($row3= mysqli_fetch_array($ishod3)){	
     echo "<td id=stx>".$row3["IMPR"]."</td>";
    } 
    echo "</tr><tr><td id=sop>STANJE BROJACA</td><td id=stx>".$row{"STAB"}."</td>";
    echo "<td id=sop>STANJE GORIVA</td><td id=txt>".$row{"STAG"}."</td></tr>";
    echo "<tr><td id=sop>OPREMA</td><td colspan=3>";
    echo "<table id=tbop>";
    $pojm4="SELECT * FROM oprema WHERE IDPR=".$row{"IDPR"};
    $ishod4=mysqli_query($con,$pojm4); 
    while($row4= mysqli_fetch_array($ishod4)){	
      echo "<tr>";
      echo "<td id=stxx>";
      if ($row4["REZ"]=="1") {
        echo "<div id=aje>+</div> REZERVNI TOCAK</td>";	  	
	  }
	  else {
        echo "<div id=ano>x</div> REZERVNI TOCAK</td>";	  		  	
	  }
      echo "<td id=stxx>";
      if ($row4["APA"]=="1") {
        echo "<div id=aje>+</div> APARAT ZA GASENJE POZARA</td>";	  	
	  }
	  else {
        echo "<div id=ano>x</div> APARAT ZA GASENJE POZARA</td>";	  		  	
	  }
      echo "<td id=stxx>";
      if ($row4["TRO"]=="1") {
        echo "<div id=aje>+</div> SIGURNOSNI TROUGAO</td>";	  	
	  }
	  else {
        echo "<div id=ano>x</div> SIGURNOSNI TROUGAO</td>";	  		  	
	  }
      echo "<td id=stxx>";
      if ($row4["PRP"]=="1") {
        echo "<div id=aje>+</div> PRVA POMOC</td></tr>";	  	
	  }
	  else {
        echo "<div id=ano>x</div> PRVA POMOC</td></tr>";	  		  	
	  }
      echo "<tr><td id=stxx>";
      if ($row4["KLP"]=="1") {
        echo "<div id=aje>+</div> KLINASTI PODMETACI</td>";	  	
	  }
	  else {
        echo "<div id=ano>x</div> KLINASTI PODMETACI</td>";	  		  	
	  }
	  echo "<td id=stxx>";
      if ($row4["CEK"]=="1") {
        echo "<div id=aje>+</div> CEKIC ZA RAZBIJANJE STAKLA</td>";	  	
	  }
	  else {
        echo "<div id=ano>x</div> CEKIC ZA RAZBIJANJE STAKLA</td>";	  		  	
	  }
	  echo "<td id=stxx>";
      if ($row4["PRS"]=="1") {
        echo "<div id=aje>+</div> SVETLOODBOJNI PRSLUK</td>";	  	
	  }
	  else {
        echo "<div id=ano>x</div> SVETLOODBOJNI PRLSUK</td>";	  		  	
	  }
	  echo "<td id=stxx>";
      if ($row4["UZE"]=="1") {
        echo "<div id=aje>+</div> UZE/POLUGA ZA VUCU</td>";	  	
	  }
	  else {
        echo "<div id=ano>x</div> UZE/POLUGA ZA VUCU</td>";	  		  	
	  }
    }
    echo "</table></td></tr>";
    echo "<tr><td colspan=2 id=sop>PRIMEDBA VOZACA KOJI PREDAJE</td><td colspan=2 id=sop>PRIMEDBA VOZACA KOJI PREUZIMA</td></tr>";
    echo "<tr><td colspan=2 id=stx>".$row{"PRII"}."</td><td colspan=2 id=stx>".$row{"PRIU"}."</td></tr>";
    echo "<tr><td colspan=4 id=blll><input type='button' id=dgm value='IZMENA' onclick=primo_diaizm('".$row["IDPR"]."')><input type='button'  id=dgm value='BRISANJE' onclick=primo_bris('".$row["IDPR"]."')></td></tr>";
   } 
 }
 echo "</table></td>";
 mysqli_close($con);
?>