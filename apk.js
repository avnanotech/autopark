 var idss="";
 var islk="";
 var kldd=0; 
 var kldid=0; 
 var kldm=0;
 var kldg=0;
 var klrd=0;
 var izbo=0;
 var rbs=0;

 /* EVIDENCIJA VOZILA - skup funkcija */


 function vozila(){
 obomnu(0);	
 spis="<div id=mek>";
 spis=spis+"<table id=vozl>";
 spis=spis+"</table></div>";
 document.getElementById("aprk").innerHTML=spis;
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("vozl").innerHTML=xmlhttp.responseText;
   }
 }
  xmlhttp.open("GET","vozl-list.php",true);
  xmlhttp.send();	
}

function vozila_dianov(){
 var okfor = document.createElement("div") ;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="250px";
 document.getElementById('okno').style.position="fixed";
 var okvis=document.getElementById('okno').style.height/2;
 var okdug=document.getElementById('okno').style.width /2;
 document.getElementById('okno').style.top=(screen.height/2)-okvis+"px";
 document.getElementById('okno').style.left=(screen.width/2)-okdug+"px";
 document.getElementById('okno').style.zIndex=10001;
 spis="<table id=ftbl>";
 spis=spis+"<tr><td id=fop>REGISTARSKI BROJ</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>SERIJSKI BROJ</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>MARKA VOZILA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>GODINA PROIZVODNJE</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>KUBIKAZA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>DATUM REGISTRACIJE</td><td id=ftx><input id=fdtx name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' readonly><input id='dgmd' type='button' value='+' onclick=kald(5)></td></tr>";
 spis=spis+"<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='vozila_novunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
} 

function vozila_novunos(){
 var sada = new Date();	
 var dd = sada.getDate();
 var ms = sada.getMonth();
 var gg = sada.getFullYear();
 var cs = sada.getHours();
 var mn = sada.getMinutes();
 var ss = sada.getSeconds();

 var ggl=String(gg);
 var ggg=ggl.slice(2,4);

 var ddd = String(dd);
 if (ddd.length==1) {
  ddd="0"+ddd; 	
 }

 ms=ms+1;
 var mms = String(ms);
 if (mms.length==1) {
  mms="0"+mms; 	
 }

 var ccs = String(cs);
 if (ccs.length==1) {
  ccs="0"+ccs; 	
 }

 var mmn = String(mn);
 if (mmn.length==1) {
  mmn="0"+mmn; 	
 }

 var sss = String(ss);
 if (sss.length==1) {
  sss="0"+sss; 	
 }
 
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() { 
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     diapot("NOVI PODACI UNETI U BAZU");		
     document.getElementById('zavesa').style.visibility="hidden";
     vozila();
     document.getElementById('zavesa').style.visibility="visible";
     document.getElementsByName('ftxt')[0].value="";
     document.getElementsByName('ftxt')[1].value="";
     document.getElementsByName('ftxt')[2].value="";
     document.getElementsByName('ftxt')[3].value="";
     document.getElementsByName('ftxt')[4].value="";
     document.getElementsByName('ftxt')[5].value="";
   }
 }
 spis="idv='"+ggg+mms+ddd+ccs+mmn+sss;
 spis=spis+"'&reg='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&ser='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&mav='"+document.getElementsByName('ftxt')[2].value;  
 spis=spis+"'&gpr='"+document.getElementsByName('ftxt')[3].value;  
 spis=spis+"'&kub='"+document.getElementsByName('ftxt')[4].value;  
 spis=spis+"'&drg='"+document.getElementsByName('ftxt')[5].value+"'";  
 xmlhttp.open("GET","vozl-unos.php?"+spis,true);
 xmlhttp.send();
}

function vozila_diaizm(idv){
 var okfor = document.createElement("div") ;
 idss=idv;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="250px";
 document.getElementById('okno').style.position="fixed";
 var okvis=document.getElementById('okno').style.height/2;
 var okdug=document.getElementById('okno').style.width /2;
 document.getElementById('okno').style.top=(screen.height/2)-okvis+"px";
 document.getElementById('okno').style.left=(screen.width/2)-okdug+"px";
 document.getElementById('okno').style.zIndex=10001;	
 spis="<table id=ftbl>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("ftbl").innerHTML=xmlhttp.responseText;
  	 document.getElementById('okno').style.visibility="visible";
   }
 }
 xmlhttp.open("GET","vozl-dop.php?idv='"+idv+"'",true);
 xmlhttp.send();	
}

function vozila_izmunos(){
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     diapot("IZVRSENA IZMENA PODATAKA");		
     vozila();
     diaout();
   }
 }
 spis="idv='"+idss;  
 spis=spis+"'&reg='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&ser='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&mav='"+document.getElementsByName('ftxt')[2].value;  
 spis=spis+"'&gpr='"+document.getElementsByName('ftxt')[3].value;  
 spis=spis+"'&kub='"+document.getElementsByName('ftxt')[4].value;  
 spis=spis+"'&drg='"+document.getElementsByName('ftxt')[5].value+"'";  
 xmlhttp.open("GET","vozl-izm.php?"+spis,true);
 xmlhttp.send();	
}

 function vozila_bris(idv){
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 vozila();
   }
  }
  xmlhttp.open("GET","vozl-bris.php?idv='"+idv+"'",true);
  xmlhttp.send();	
}


 /* EVIDENCIJA VOZACA - skup funkcija */
 
 
 function vozaci(){
 obomnu(1);	
 spis="<div id=mek>";
 spis=spis+"<table id=vozl>";
 spis=spis+"</table></div>";
 document.getElementById("aprk").innerHTML=spis;
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("vozl").innerHTML=xmlhttp.responseText;
   }
 }
  xmlhttp.open("GET","vozc-list.php",true);
  xmlhttp.send();	
}

function vozaci_dianov(){
 var okfor = document.createElement("div") ;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="250px";
 document.getElementById('okno').style.position="fixed";
 var okvis=document.getElementById('okno').style.height/2;
 var okdug=document.getElementById('okno').style.width /2;
 document.getElementById('okno').style.top=(screen.height/2)-okvis+"px";
 document.getElementById('okno').style.left=(screen.width/2)-okdug+"px";
 document.getElementById('okno').style.zIndex=10001;
 spis="<table id=ftbl>";
 spis=spis+"<tr><td id=fop>IME I PREZIME</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>DATUM RODJENJA</td><td id=ftx><input id=fdtx name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' readonly><input id='dgmd' type='button' value='+' onclick=kald(1)></td></tr>";
 spis=spis+"<tr><td id=fop>BROJ LICNE KARTE</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>BROJ VOZACKE DOZVOLE</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>MUP</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>ROD</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'><option value='M'>MUSKI</option><option zenski='Z'>ZENSKI</option></select>" 
 spis=spis+"</td></tr>"; 
 spis=spis+"<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='vozaci_novunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
} 

function vozaci_novunos(){
 var sada = new Date();	
 var dd = sada.getDate();
 var ms = sada.getMonth();
 var gg = sada.getFullYear();
 var cs = sada.getHours();
 var mn = sada.getMinutes();
 var ss = sada.getSeconds();

 var ggg=String(gg);
 ggg=ggg.slice(2,4);

 var ddd = String(dd);
 if (ddd.length==1) {
  ddd="0"+ddd; 	
 }

 ms=ms+1;
 var mms = String(ms);
 if (mms.length==1) {
  mms="0"+mms; 	
 }

 var ccs = String(cs);
 if (ccs.length==1) {
  ccs="0"+ccs; 	
 }

 var mmn = String(mn);
 if (mmn.length==1) {
  mmn="0"+mmn; 	
 }

 var sss = String(ss);
 if (sss.length==1) {
  sss="0"+sss; 	
 }
 
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     diapot("NOVI PODACI UNETI U BAZU")	
     document.getElementById('okno').style.visibility="hidden";
  	 vozaci();
     document.getElementById('okno').style.visibility="visible";
     document.getElementsByName('ftxt')[0].value="";
     document.getElementsByName('ftxt')[1].value="";
     document.getElementsByName('ftxt')[2].value="";
     document.getElementsByName('ftxt')[3].value="";
     document.getElementsByName('ftxt')[4].value="";
     document.getElementsByName('ftxt')[5].value="";
   }
 }
  spis="idv='"+ggg+mms+ddd+ccs+mmn+sss; 
  spis=spis+"'&imp='"+document.getElementsByName('ftxt')[0].value;  
  spis=spis+"'&drd='"+document.getElementsByName('ftxt')[1].value;  
  spis=spis+"'&blk='"+document.getElementsByName('ftxt')[2].value;  
  spis=spis+"'&bvd='"+document.getElementsByName('ftxt')[3].value;  
  spis=spis+"'&mup='"+document.getElementsByName('ftxt')[4].value;  
  spis=spis+"'&slk='"+document.getElementsByName('ftxt')[5].value+"'";  
  xmlhttp.open("GET","vozc-unos.php?"+spis,true);
  xmlhttp.send();	
}

function vozaci_diaizm(idv){
 var okfor = document.createElement("div") ;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="250px";
 document.getElementById('okno').style.position="fixed";
 var okvis=document.getElementById('okno').style.height/2;
 var okdug=document.getElementById('okno').style.width /2;
 document.getElementById('okno').style.top=(screen.height/2)-okvis+"px";
 document.getElementById('okno').style.left=(screen.width/2)-okdug+"px";
 document.getElementById('okno').style.zIndex=10001;
 spis="<table id=ftbl>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("ftbl").innerHTML=xmlhttp.responseText;
  	 document.getElementById('okno').style.visibility="visible";
   }
 }
 xmlhttp.open("GET","vozc-dop.php?idv='"+idv+"'",true);
 xmlhttp.send();	
}

function vozaci_izmunos(){
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     diapot("IZVRSENA IZMENA PODATAKA");	
     vozaci();
     diaout();   
   }
 }
 spis="idv='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&imp='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&drd='"+document.getElementsByName('ftxt')[2].value;  
 spis=spis+"'&blk='"+document.getElementsByName('ftxt')[3].value;  
 spis=spis+"'&bvd='"+document.getElementsByName('ftxt')[4].value;  
 spis=spis+"'&mup='"+document.getElementsByName('ftxt')[5].value+"'";  
 xmlhttp.open("GET","vozc-izm.php?"+spis,true);
 xmlhttp.send();	
}
 
 function vozaci_bris(idv){
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 vozaci();
   }
  }
  xmlhttp.open("GET","vozc-bris.php?idv='"+idv+"'",true);
  xmlhttp.send();	
}


 /* ODRZAVANJE VOZNOG PARKA - skup funkcija */


 function odrzi(){
 obomnu(2);		
 spis="<div id=mek>";
 spis=spis+"<table id=vozl>";
 spis=spis+"</table></div>";
 document.getElementById("aprk").innerHTML=spis;
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("vozl").innerHTML=xmlhttp.responseText;
   }
 }
  xmlhttp.open("GET","odrzi-start.php",true);
  xmlhttp.send();	
}

 /* ODRZAVANJE - SERVIS - skup funkcija */

function odservtab(){
  var idv=document.getElementsByName("vozopt")[0].value;	
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("servek").innerHTML=xmlhttp.responseText;
   	 document.getElementsByName("mnn")[0].style.color="#000000";
    	 document.getElementsByName("mnn")[0].style.background="linear-gradient(#666666,#aaaaaa,#aaaaaa,#aaaaaa,#666666)";
   	 document.getElementsByName("mnn")[1].style.color="#ffffff";
   	 document.getElementsByName("mnn")[1].style.background="linear-gradient(#111111,#666666,#666666,#666666,#111111)";
   }
  }
  xmlhttp.open("GET","odserv-list.php?idv='"+idv+"'",true);
  xmlhttp.send();	
}

function odserv_dianov(){
 var okfor = document.createElement("div") ;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="300px";
 document.getElementById('okno').style.position="fixed";
 document.getElementById('okno').style.top=(screen.height/2)-250+"px";
 document.getElementById('okno').style.left=(screen.width/2)-250+"px";
 spis="<table id=ftbl>";
 spis=spis+"<tr><td id=fop>NAZIV SERVISA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>IME ODGOVORNOG LICA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>KONTAKT</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>DATUM SERVISA</td><td id=ftx><input id=fdtx name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' readonly><input id='dgmd' type='button' value='+' onclick=kald(3)></td></tr>";
 spis=spis+"<tr><td id=fop>OPIS</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='odserv_novunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
} 

function odserv_novunos(){
 var idv=document.getElementsByName('vozopt')[0].value;	
 var sada = new Date();	
 var dd = sada.getDate();
 var ms = sada.getMonth();
 var gg = sada.getFullYear();
 var cs = sada.getHours();
 var mn = sada.getMinutes();
 var ss = sada.getSeconds();

 var ggg=String(gg);
 ggg=ggg.slice(2,4);

 var ddd = String(dd);
 if (ddd.length==1) {
  ddd="0"+ddd; 	
 }

 ms=ms+1;
 var mms = String(ms);
 if (mms.length==1) {
  mms="0"+mms; 	
 }

 var ccs = String(cs);
 if (ccs.length==1) {
  ccs="0"+ccs; 	
 }

 var mmn = String(mn);
 if (mmn.length==1) {
  mmn="0"+mmn; 	
 }

 var sss = String(ss);
 if (sss.length==1) {
  sss="0"+sss; 	
 }
 	
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     diapot("NOVI PODACI UNETI U BAZU");	
     document.getElementById('okno').style.visibility="hidden";
  	 odservtab();
     document.getElementById('okno').style.visibility="visible";
     document.getElementsByName('ftxt')[0].value="";
     document.getElementsByName('ftxt')[1].value="";
     document.getElementsByName('ftxt')[2].value="";
     document.getElementsByName('ftxt')[3].value="";
     document.getElementsByName('ftxt')[4].value="";
   }
 }
 spis="ids='"+ggg+mms+ddd+ccs+mmn+sss;  
 spis=spis+"'&idv='"+idv;
 spis=spis+"'&izvs='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&odgs='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&kons='"+document.getElementsByName('ftxt')[2].value;  
 spis=spis+"'&dats='"+document.getElementsByName('ftxt')[3].value;  
 spis=spis+"'&opis='"+document.getElementsByName('ftxt')[4].value+"'";  
 xmlhttp.open("GET","odserv-unos.php?"+spis,true);
 xmlhttp.send();	
}

function odserv_diaizm(ids){
 var okfor = document.createElement("div");
 idss=ids;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="300px";
 document.getElementById('okno').style.position="fixed";
 document.getElementById('okno').style.top=(screen.height/2)-250+"px";
 document.getElementById('okno').style.left=(screen.width/2)-250+"px";
 spis="<table id=ftbl>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("ftbl").innerHTML=xmlhttp.responseText;
  	 document.getElementById('okno').style.visibility="visible";
   }
 }
 xmlhttp.open("GET","odserv-dop.php?ids='"+idss+"'",true);
 xmlhttp.send();	
}
 
function odserv_izmunos(){
 var idv=document.getElementsByName('vozopt')[0].value;	
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      diapot("IZVRSENA IZMENA PODATAKA");		
      odservtab();
      diaout();   
   }
 }
 spis="idss='"+idss;
 spis=spis+"'&idv='"+idv;
 spis=spis+"'&izvs='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&odgs='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&kons='"+document.getElementsByName('ftxt')[2].value;  
 spis=spis+"'&dats='"+document.getElementsByName('ftxt')[3].value;  
 spis=spis+"'&opis='"+document.getElementsByName('ftxt')[4].value+"'";  
 xmlhttp.open("GET","odserv-izm.php?"+spis,true);
 xmlhttp.send();	
}
 
function odserv_bris(ids){
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	odservtab();
   }
  }
  xmlhttp.open("GET","odserv-bris.php?ids='"+ids+"'",true);
  xmlhttp.send();	
}

 /* ODRZAVANJE - TEHNICKI PREGLED - skup funkcija */


function odtehptab(){
  var idv=document.getElementsByName("vozopt")[0].value;	
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("servek").innerHTML=xmlhttp.responseText;
   	 document.getElementsByName("mnn")[0].style.color="#ffffff";
   	 document.getElementsByName("mnn")[0].style.background="linear-gradient(#111111,#666666,#666666,#666666,#111111)";
   	 document.getElementsByName("mnn")[1].style.color="#000000";
   	 document.getElementsByName("mnn")[1].style.background="linear-gradient(#666666,#aaaaaa,#aaaaaa,#aaaaaa,#666666)";
   }
  }
  xmlhttp.open("GET","odtehp-list.php?idv='"+idv+"'",true);
  xmlhttp.send();	
}

function odtehp_dianov(){
 var okfor = document.createElement("div") ;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="300px";
 document.getElementById('okno').style.position="fixed";
 document.getElementById('okno').style.top=(screen.height/2)-250+"px";
 document.getElementById('okno').style.left=(screen.width/2)-250+"px";
 spis="<table id=ftbl>";
 spis=spis+"<tr><td id=fop>NAZIV SERVISA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>DATUM TEHNICKOG PREGLEDA</td><td id=ftx><input id=fdtx name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' readonly><input id='dgmd' type='button' value='+' onclick=kald(1)></tr>";
 spis=spis+"<tr><td id=fop>OPIS</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='odtehp_novunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
}

function odtehp_novunos(){
 var idv=document.getElementsByName('vozopt')[0].value;	
 var sada = new Date();	
 var dd = sada.getDate();
 var ms = sada.getMonth();
 var gg = sada.getFullYear();
 var cs = sada.getHours();
 var mn = sada.getMinutes();
 var ss = sada.getSeconds();

 var ggg=String(gg);
 ggg=ggg.slice(2,4);

 var ddd = String(dd);
 if (ddd.length==1) {
  ddd="0"+ddd; 	
 }

 ms=ms+1;
 var mms = String(ms);
 if (mms.length==1) {
  mms="0"+mms; 	
 }

 var ccs = String(cs);
 if (ccs.length==1) {
  ccs="0"+ccs; 	
 }

 var mmn = String(mn);
 if (mmn.length==1) {
  mmn="0"+mmn; 	
 }

 var sss = String(ss);
 if (sss.length==1) {
  sss="0"+sss; 	
 }
 	
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     diapot("NOVI PODACI UNETI U BAZU");		
     document.getElementById('okno').style.visibility="hidden";
     odtehptab();
     document.getElementById('okno').style.visibility="visible";
     document.getElementsByName('ftxt')[0].value="";
     document.getElementsByName('ftxt')[1].value="";
     document.getElementsByName('ftxt')[2].value="";
   }
 }
 spis="ids='"+ggg+mms+ddd+ccs+mmn+sss;  
 spis=spis+"'&idv='"+idv;
 spis=spis+"'&izvs='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&dats='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&opis='"+document.getElementsByName('ftxt')[2].value+"'";  
 xmlhttp.open("GET","odtehp-unos.php?"+spis,true);
 xmlhttp.send();	
} 

function odtehp_diaizm(ids){
 var okfor = document.createElement("div") ;
 idss=ids;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="300px";
 document.getElementById('okno').style.position="fixed";
 document.getElementById('okno').style.top=(screen.height/2)-250+"px";
 document.getElementById('okno').style.left=(screen.width/2)-250+"px";
 spis="<table id=ftbl>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("ftbl").innerHTML=xmlhttp.responseText;
  	 document.getElementById('okno').style.visibility="visible";
   }
 }
 xmlhttp.open("GET","odtehp-dop.php?ids='"+idss+"'",true);
 xmlhttp.send();	
}

function odtehp_izmunos(){
 var idv=document.getElementsByName('vozopt')[0].value;	
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     diapot("IZVRSENA IZMENA PODATAKA");		
     odtehptab();
     diaout();   
   }
 }
 spis="idss='"+idss;
 spis=spis+"'&idv='"+idv;
 spis=spis+"'&izvs='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&dats='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&opis='"+document.getElementsByName('ftxt')[2].value+"'";  
 xmlhttp.open("GET","odtehp-izm.php?"+spis,true);
 xmlhttp.send();	
}

function odtehp_bris(ids){
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	  odtehptab();
   }
  }
  xmlhttp.open("GET","odtehp-bris.php?ids='"+ids+"'",true);
  xmlhttp.send();	
}


 /* ODRZAVANJE - POTROŠNJA GORIVA - skup funkcija */


function odgortab(){
  var idv=document.getElementsByName("vozopt")[0].value;	
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("servek").innerHTML=xmlhttp.responseText;
   	 document.getElementsByName("mnn")[0].style.color="#ffffff";
   	 document.getElementsByName("mnn")[0].style.background="linear-gradient(#111111,#666666,#666666,#666666,#111111)";
   	 document.getElementsByName("mnn")[1].style.color="#000000";
   	 document.getElementsByName("mnn")[1].style.background="linear-gradient(#666666,#aaaaaa,#aaaaaa,#aaaaaa,#666666)";
   }
  }
  xmlhttp.open("GET","odgor-list.php?idv='"+idv+"'",true);
  xmlhttp.send();	
}

function odgor_dianov(){
 var okfor = document.createElement("div") ;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="300px";
 document.getElementById('okno').style.position="fixed";
 document.getElementById('okno').style.top=(screen.height/2)-250+"px";
 document.getElementById('okno').style.left=(screen.width/2)-250+"px";
 spis="<table id=ftbl>";
 spis=spis+"<tr><td id=fop>NAZIV SERVISA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>DATUM TEHNICKOG PREGLEDA</td><td id=ftx><input id=fdtx name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' readonly><input id='dgmd' type='button' value='+' onclick=kald(1)></tr>";
 spis=spis+"<tr><td id=fop>OPIS</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='odtehp_novunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
}

function odgor_novunos(){
 var idv=document.getElementsByName('vozopt')[0].value;	
 var sada = new Date();	
 var dd = sada.getDate();
 var ms = sada.getMonth();
 var gg = sada.getFullYear();
 var cs = sada.getHours();
 var mn = sada.getMinutes();
 var ss = sada.getSeconds();

 var ggg=String(gg);
 ggg=ggg.slice(2,4);

 var ddd = String(dd);
 if (ddd.length==1) {
  ddd="0"+ddd; 	
 }

 ms=ms+1;
 var mms = String(ms);
 if (mms.length==1) {
  mms="0"+mms; 	
 }

 var ccs = String(cs);
 if (ccs.length==1) {
  ccs="0"+ccs; 	
 }

 var mmn = String(mn);
 if (mmn.length==1) {
  mmn="0"+mmn; 	
 }

 var sss = String(ss);
 if (sss.length==1) {
  sss="0"+sss; 	
 }
 	
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     diapot("NOVI PODACI UNETI U BAZU");		
     document.getElementById('okno').style.visibility="hidden";
     odtehptab();
     document.getElementById('okno').style.visibility="visible";
     document.getElementsByName('ftxt')[0].value="";
     document.getElementsByName('ftxt')[1].value="";
     document.getElementsByName('ftxt')[2].value="";
   }
 }
 spis="ids='"+ggg+mms+ddd+ccs+mmn+sss;  
 spis=spis+"'&idv='"+idv;
 spis=spis+"'&izvs='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&dats='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&opis='"+document.getElementsByName('ftxt')[2].value+"'";  
 xmlhttp.open("GET","odtehp-unos.php?"+spis,true);
 xmlhttp.send();	
} 

function odgor_diaizm(ids){
 var okfor = document.createElement("div") ;
 idss=ids;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="300px";
 document.getElementById('okno').style.position="fixed";
 document.getElementById('okno').style.top=(screen.height/2)-250+"px";
 document.getElementById('okno').style.left=(screen.width/2)-250+"px";
 spis="<table id=ftbl>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("ftbl").innerHTML=xmlhttp.responseText;
  	 document.getElementById('okno').style.visibility="visible";
   }
 }
 xmlhttp.open("GET","odtehp-dop.php?ids='"+idss+"'",true);
 xmlhttp.send();	
}

function odgor_izmunos(){
 var idv=document.getElementsByName('vozopt')[0].value;	
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     diapot("IZVRSENA IZMENA PODATAKA");		
     odtehptab();
     diaout();   
   }
 }
 spis="idss='"+idss;
 spis=spis+"'&idv='"+idv;
 spis=spis+"'&izvs='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&dats='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&opis='"+document.getElementsByName('ftxt')[2].value+"'";  
 xmlhttp.open("GET","odtehp-izm.php?"+spis,true);
 xmlhttp.send();	
}

function odgor_bris(ids){
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	  odtehptab();
   }
  }
  xmlhttp.open("GET","odtehp-bris.php?ids='"+ids+"'",true);
  xmlhttp.send();	
}



 /* KAZNE I PREKRSAJI - skup funkcija */


 function kazna(){
  obomnu(3);		
  spis="<div id=mek>";
  spis=spis+"<table id=vozl>";
  spis=spis+"<tr id=gmek></tr>";
  spis=spis+"<tr id=dmek></tr>";
  spis=spis+"</table></div>";
  document.getElementById("aprk").innerHTML=spis;

  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
   	 document.getElementById("gmek").innerHTML=xmlhttp.responseText;
   	 kaznatab()
    }
  }
  xmlhttp.open("GET","kazna-opt.php",true);
  xmlhttp.send();
} 

function kaznatab(){
 var opvz=document.getElementsByName('vzlopt')[0].value;	
 var opvc=document.getElementsByName('vzcopt')[0].value;	
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("dmek").innerHTML=xmlhttp.responseText;
   }
 }
 spis="opvz="+opvz;
 spis=spis+"&opvc="+opvc;
 xmlhttp.open("GET","kazna-list.php?"+spis,true);
 xmlhttp.send();	
}

function kazna_dianov(){
 var okfor = document.createElement("div") ;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="300px";
 document.getElementById('okno').style.position="fixed";
 document.getElementById('okno').style.top=(screen.height/2)-250+"px";
 document.getElementById('okno').style.left=(screen.width/2)-250+"px";
 spis="<table id=ftbl>";
 spis=spis+"<tr><td id=fop>DATUM NESREĆE</td><td id=ftx><input id=fdtx name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' readonly><input id='dgmd' type='button' value='+' onclick=kald(0)></td></tr>";
 spis=spis+"<tr><td id=fop>RELACIJA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>IME I PREZIME VOZACA</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'></select></td></tr>";
 spis=spis+"<tr><td id=fop>REGISTARSKI BROJA VOZILA</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'></select></td></tr>";
 spis=spis+"<tr><td id=fop>OPIS</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='kazna_novunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
 diaoptvz(3); 
 diaoptvc(2); 
}

function kazna_novunos(){
 var sada = new Date();	
 var dd = sada.getDate();
 var ms = sada.getMonth();
 var gg = sada.getFullYear();
 var cs = sada.getHours();
 var mn = sada.getMinutes();
 var ss = sada.getSeconds();

 var ggg=String(gg);
 ggg=ggg.slice(2,4);

 var ddd = String(dd);
 if (ddd.length==1) {
  ddd="0"+ddd; 	
 }

 ms=ms+1;
 var mms = String(ms);
 if (mms.length==1) {
  mms="0"+mms; 	
 }

 var ccs = String(cs);
 if (ccs.length==1) {
  ccs="0"+ccs; 	
 }

 var mmn = String(mn);
 if (mmn.length==1) {
  mmn="0"+mmn; 	
 }

 var sss = String(ss);
 if (sss.length==1) {
  sss="0"+sss; 	
 }
 	
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById('okno').style.visibility="hidden";
      diapot("IZVRSENA IZMENA PODATAKA");		
  	 kaznatab();
     document.getElementById('okno').style.visibility="visible";
     document.getElementsByName('ftxt')[0].value="";
     document.getElementsByName('ftxt')[1].value="";
     document.getElementsByName('ftxt')[2].value="0";
     document.getElementsByName('ftxt')[3].value="0";
     document.getElementsByName('ftxt')[4].value="";
   }
 }
 spis="idkp='"+ggg+mms+ddd+ccs+mmn+sss;  
 spis=spis+"'&idvz='"+document.getElementsByName('ftxt')[3].value;
 spis=spis+"'&idvc='"+document.getElementsByName('ftxt')[2].value;  
 spis=spis+"'&relk='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&datk='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&opis='"+document.getElementsByName('ftxt')[4].value+"'";  
 xmlhttp.open("GET","kazna-unos.php?"+spis,true);
 xmlhttp.send();	
} 

function kazna_diaizm(idk){
 var okfor = document.createElement("div") ;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="600px";
 document.getElementById('okno').style.height="300px";
 document.getElementById('okno').style.position="fixed";
 document.getElementById('okno').style.top=(screen.height/2)-250+"px";
 document.getElementById('okno').style.left=(screen.width/2)-250+"px";
 idss=idk;
 spis="<table id=ftbl>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("ftbl").innerHTML=xmlhttp.responseText;
  	 document.getElementById('okno').style.visibility="visible";
   }
 }
 xmlhttp.open("GET","kazna-dop.php?idk="+idss,true);
 xmlhttp.send();	 
}

function kazna_izmunos(){
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 kaznatab();
   	 diaout();
   }
 }
 spis="idkp='"+idss;  
 spis=spis+"'&idvz='"+document.getElementsByName('ftxt')[3].value;
 spis=spis+"'&idvc='"+document.getElementsByName('ftxt')[2].value;  
 spis=spis+"'&relk='"+document.getElementsByName('ftxt')[1].value;  
 spis=spis+"'&datk='"+document.getElementsByName('ftxt')[0].value;  
 spis=spis+"'&opis='"+document.getElementsByName('ftxt')[4].value+"'";  
 xmlhttp.open("GET","kazna-izm.php?"+spis,true);
 xmlhttp.send();	
} 

function kazna_bris(ids){
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 kaznatab();
   }
  }
  xmlhttp.open("GET","kazna-bris.php?ids='"+ids+"'",true);
  xmlhttp.send();	
}


 /* PRIMOPREDAJA VOZILA - skup funkcija */


 function primo(){
  obomnu(4);		
  spis=" <div id=mek>";
  spis=spis+"<table id=vozl>";
  spis=spis+"<tr id=gmek></tr>";
  spis=spis+"<tr id=dmek></tr>";
  spis=spis+"</table></div>";
  document.getElementById("aprk").innerHTML=spis

  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
   	 document.getElementById("gmek").innerHTML=xmlhttp.responseText;
   	 primotab();
    }
  }
  xmlhttp.open("GET","primo-opt.php",true);
  xmlhttp.send();
 }  

function primotab(){
 var opvz=document.getElementsByName('vzlopt')[0].value;	
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("dmek").innerHTML=xmlhttp.responseText;
   }
 }
 spis="opvz="+opvz;
 xmlhttp.open("GET","primo-list.php?"+spis,true);
 xmlhttp.send();	
}

function primo_dianov(){
 var okfor = document.createElement("div") ;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="700px";
 document.getElementById('okno').style.height="400px";
 document.getElementById('okno').style.position="fixed";
 document.getElementById('okno').style.top=(screen.height/2)-200+"px";
 document.getElementById('okno').style.left=(screen.width/2)-300+"px";

 spis="<table id=ftbl>";
 spis=spis+"<tr><td id=fop>DATUM PRIMOPREDAJE</td><td id=ftx><input id=fdtx name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text' readonly><input id='dgmd' type='button' value='+' onclick=kald(0)></td></tr>";
 spis=spis+"<tr><td id=fop>VOZILO</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'></select></td></tr>";
 spis=spis+"<tr><td id=fop>VOZAC KOJI PREDAJE</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'></select></td></tr>";
 spis=spis+"<tr><td id=fop>VOZAC KOJI PREUZIMA</td><td id=ftx><select id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'></select></td></tr>";
 spis=spis+"<tr><td id=fop>STANJE BROJACA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop>STANJE GORIVA</td><td id=ftx><input id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)' type='text'></td></tr>";
 spis=spis+"<tr><td id=fop colspan=2>OPREMA</td></tr>";
 spis=spis+"<tr><td id=ftxt colspan=2>";
 spis=spis+"<input type=checkbox name=obopr value='1' onclick=primoop(0) checked>REZERVNI TOCAK";
 spis=spis+"<input type=checkbox name=obopr value='1' onclick=primoop(1)  checked>APARAT ZA GASENJE POZARA";
 spis=spis+"<input type=checkbox name=obopr value='1' onclick=primoop(2)  checked>SIGURNOSNI TROUGAO<BR>";
 spis=spis+"<input type=checkbox name=obopr value='1' onclick=primoop(3)  checked>PRVA POMOC";
 spis=spis+"<input type=checkbox name=obopr value='1' onclick=primoop(4)  checked>KLINASTI PODMETACI";
 spis=spis+"<input type=checkbox name=obopr value='1' onclick=primoop(5)  checked>CEKIC ZA LOMLJENJE PROZORA<BR>";
 spis=spis+"<input type=checkbox name=obopr value='1' onclick=primoop(6)  checked>SVETLOODBOJNI PRSLUK";
 spis=spis+"<input type=checkbox name=obopr value='1' onclick=primoop(7)  checked>UZE/POLUGA ZA VUCU";
 spis=spis+"</td></tr>";
 spis=spis+"<tr><td id=fop colspan=2>PRIMEDBA VOZACA KOJI PREDAJE</td></tr>";
 spis=spis+"<tr><td colspan=2><textarea id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'  rows='3' cols='100'></textarea></td></tr>";
 spis=spis+"<tr><td id=fop colspan=2>PRIMEDBA VOZACA KOJI PREUZIMA</td></tr>";
 spis=spis+"<tr><td colspan=2><textarea id=ftxt name=ftxt  onfocus='oboji(this)' onfocusout='oboju(this)'  rows='3' cols='100'></textarea></td></tr>";
 spis=spis+"<tr><td colspan=2><center><input type='button' id='dgm' value='UNOS' onclick='primo_novunos()'><input id='dgm' type='button' value='IZLAZ' onclick='diaout()'></center></td></tr>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
 diaoptvz(1); 
 diaoptvc(2);
 diaoptvc(3); 
}

function primo_novunos(){
 var sada = new Date();	
 var dd = sada.getDate();
 var ms = sada.getMonth();
 var gg = sada.getFullYear();
 var cs = sada.getHours();
 var mn = sada.getMinutes();
 var ss = sada.getSeconds();

 var ggg=String(gg);
 ggg=ggg.slice(2,4);

 var ddd = String(dd);
 if (ddd.length==1) {
  ddd="0"+ddd; 	
 }

 ms=ms+1;
 var mms = String(ms);
 if (mms.length==1) {
  mms="0"+mms; 	
 }

 var ccs = String(cs);
 if (ccs.length==1) {
  ccs="0"+ccs; 	
 }

 var mmn = String(mn);
 if (mmn.length==1) {
  mmn="0"+mmn; 	
 }

 var sss = String(ss);
 if (sss.length==1) {
  sss="0"+sss; 	
 }
 	
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     diapot("NOVI PODACI UNETI U BAZU");		 	
     document.getElementById('okno').style.visibility="hidden";
     primotab();
     document.getElementById('okno').style.visibility="visible";
     document.getElementsByName('ftxt')[0].value="";
     document.getElementsByName('ftxt')[1].value="0000";
     document.getElementsByName('ftxt')[2].value="0000";
     document.getElementsByName('ftxt')[3].value="0000";
     document.getElementsByName('ftxt')[4].value="";
     document.getElementsByName('ftxt')[5].value="";
     document.getElementsByName('ftxt')[6].value="";
     document.getElementsByName('ftxt')[7].value="";
   }
 }
 spis="idpr='"+ggg+mms+ddd+ccs+mmn+sss;  
 spis=spis+"'&datp='"+document.getElementsByName('ftxt')[0].value;
 spis=spis+"'&idvz='"+document.getElementsByName('ftxt')[1].value;
 spis=spis+"'&idvi='"+document.getElementsByName('ftxt')[2].value;  
 spis=spis+"'&idvu='"+document.getElementsByName('ftxt')[3].value;  
 spis=spis+"'&stab='"+document.getElementsByName('ftxt')[4].value;  
 spis=spis+"'&stag='"+document.getElementsByName('ftxt')[5].value;
 spis=spis+"'&prii='"+document.getElementsByName('ftxt')[6].value;
 spis=spis+"'&priu='"+document.getElementsByName('ftxt')[7].value;
 spis=spis+"'&rezt='"+document.getElementsByName('obopr')[0].value;
 spis=spis+"'&apar='"+document.getElementsByName('obopr')[1].value;
 spis=spis+"'&trou='"+document.getElementsByName('obopr')[2].value;  
 spis=spis+"'&prpo='"+document.getElementsByName('obopr')[3].value;  
 spis=spis+"'&klpo='"+document.getElementsByName('obopr')[4].value;  
 spis=spis+"'&ceki='"+document.getElementsByName('obopr')[5].value;
 spis=spis+"'&prsl='"+document.getElementsByName('obopr')[6].value;
 spis=spis+"'&uzep='"+document.getElementsByName('obopr')[7].value+"'";
 xmlhttp.open("GET","primo-unos.php?"+spis,true);
 xmlhttp.send();	
} 

function primo_diaizm(idk){
 idss=idk;
 var okfor = document.createElement("div") ;
 document.body.appendChild(okfor);
 okfor.id="zavesa";
 document.getElementById("zavesa").innerHTML="<div id=okno></div>";
 document.getElementById('okno').style.visibility="visible";
 document.getElementById('okno').style.width="700px";
 document.getElementById('okno').style.height="400px";
 document.getElementById('okno').style.position="fixed";
 document.getElementById('okno').style.top=(screen.height/2)-200+"px";
 document.getElementById('okno').style.left=(screen.width/2)-300+"px";
spis="<table id=ftbl>";
 spis=spis+"</table>"; 	
 document.getElementById("okno").innerHTML=spis;
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("ftbl").innerHTML=xmlhttp.responseText;
   }
 }
 xmlhttp.open("GET","primo-dop.php?idpr="+idss,true);
 xmlhttp.send();	 	
}

function primo_izmunos() {
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 primotab();
  	 diaout();
   }
 }
 spis="idpr='"+idss;  
 spis=spis+"'&datp='"+document.getElementsByName('ftxt')[0].value;
 spis=spis+"'&idvz='"+document.getElementsByName('ftxt')[1].value;
 spis=spis+"'&idvi='"+document.getElementsByName('ftxt')[2].value;  
 spis=spis+"'&idvu='"+document.getElementsByName('ftxt')[3].value;  
 spis=spis+"'&stab='"+document.getElementsByName('ftxt')[4].value;  
 spis=spis+"'&stag='"+document.getElementsByName('ftxt')[5].value;
 spis=spis+"'&prii='"+document.getElementsByName('ftxt')[6].value;
 spis=spis+"'&priu='"+document.getElementsByName('ftxt')[7].value;
 spis=spis+"'&rezt='"+document.getElementsByName('obopr')[0].value;
 spis=spis+"'&apar='"+document.getElementsByName('obopr')[1].value;
 spis=spis+"'&trou='"+document.getElementsByName('obopr')[2].value;  
 spis=spis+"'&prpo='"+document.getElementsByName('obopr')[3].value;  
 spis=spis+"'&klpo='"+document.getElementsByName('obopr')[4].value;  
 spis=spis+"'&ceki='"+document.getElementsByName('obopr')[5].value;
 spis=spis+"'&prsl='"+document.getElementsByName('obopr')[6].value;
 spis=spis+"'&uzep='"+document.getElementsByName('obopr')[7].value+"'";
 xmlhttp.open("GET","primo-izm.php?"+spis,true);
 xmlhttp.send();	
}

function primo_bris(ids){
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 primotab();
   }
  }
  xmlhttp.open("GET","primo-bris.php?ids='"+ids+"'",true);
  xmlhttp.send();	
}

function primoop(rdb){
 if (document.getElementsByName('obopr')[rdb].value=='1') {
 	document.getElementsByName('obopr')[rdb].checked=false;
 	document.getElementsByName('obopr')[rdb].value='0';
 }	
 else {
 	document.getElementsByName('obopr')[rdb].checked=true;
 	document.getElementsByName('obopr')[rdb].value='1'; 
 }	
}


/* PODESAVANJE  - skup funkcija*/


 function podseti(){
  obomnu(5);		
  spis="<div id=mek>";
  spis=spis+"<table id=vozl>";
  spis=spis+"<tr><td>JEZIK</td><td><select>";
  spis=spis+"<option value='0' data-image='srf.png'> SRPSKI</option>";
  spis=spis+"<option value='1' data-image='ukf.png'> ENGLISH</option>";
  spis=spis+"<option value='2' data-image='def.png'> DEUTCH</option>";
  spis=spis+"<option value='3' data-image='chf.png'> 中国</option>";
  spis=spis+"</select></td></tr>";
  spis=spis+"<tr><td></td><td></td></tr>";
  spis=spis+"</table></div>";
  document.getElementById("aprk").innerHTML=spis
 }         


/* KALENDAR - skup funkcija */


function kald(id){
 var dtm=new Date();	
 kldd=dtm.getDate(); 
 kldm=dtm.getMonth()+1;
 kldg=dtm.getFullYear();
 var dasa = new Date(kldg,kldm-1,1);
  var dasa = new Date(kldg,kldm-1,1);
  klrd=dasa.getDay();
  if (klrd==0){
  	klrd=6;
  }	
  else {
  	klrd--;  	
  }
 izbo=id;
 var okfor = document.createElement("div");
 document.body.appendChild(okfor);
 okfor.id="okno1";
 document.getElementById('okno1').style.visibility="visible";	
 document.getElementById('okno1').style.zIndex=10002;
 spis="<table id=kdtb><tr><td id=kdgp onclick='kalgod(0)'> < </td><td id=kdn name=kdg colspan='5'> 2014 </td><td  id=kdgn onclick='kalgod(1)'> > </td> </tr>";
 spis=spis+"<tr><td id=kdmp onclick='kalmes(0)'> < </td><td id=kdn name=kdm colspan='5'> april </td><td id=kdmn onclick='kalmes(1)'> > </td></tr>";
 spis=spis+"<tr><td id=kdnn>PON</td><td id=kdnn>UTO</td><td id=kdnn>SRE</td><td id=kdnn>CET</td><td id=kdnn>PET</td><td id=kdnn>SUB</td><td id=kdnn>NED</td></tr>";
 spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";
 spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";	
 spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";	
 spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";
 spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";
 spis=spis+"<tr><td id=kdn name=kdn onclick='daniz(this)'>1</td><td id=kdn name=kdn onclick='daniz(this)'>2</td><td id=kdn name=kdn onclick='daniz(this)'>3</td><td id=kdn name=kdn onclick='daniz(this)'>4</td><td id=kdn name=kdn onclick='daniz(this)'>5</td><td id=kdn name=kdn onclick='daniz(this)'>6</td><td id=kdn name=kdn onclick='daniz(this)'>7</td></tr>";
 spis=spis+"<td id=kdn colspan=7><input type='button' id='dgm' value='UNOS' onclick='datun()'><input id='dgm' type='button' value='IZLAZ' onclick='diaoutk()'></td></table>"; 
 document.getElementById("okno1").innerHTML=spis;
 kalendar();
}

function kalendar(){
 
 document.getElementsByName("kdg")[0].innerHTML=kldg;
 switch (kldm) {
    case 1:
        day = "Januar";
        break;
    case 2:
        day = "Februar";
        break;
    case 3:
        day = "Mart";
        break;
    case 4:
        day = "April";
        break;
    case 5:
        day = "Maj";
        break;
    case 6:
        day = "Jun";
        break;
    case 7:
        day = "Jul";
        break;
    case 8:
        day = "August";
        break;
    case 9:
        day = "Septembar";
        break;
    case 10:
        day = "Oktobar";
        break;
    case 11:
        day = "Novembar";
        break;
    case 12:
        day = "Decembar";
        break;
  }	
  document.getElementsByName("kdm")[0].innerHTML=day;
  for (ll=0;ll<=5;ll++){
    for (kk=0;kk<=6;kk++){
       kl=ll*7+kk;
       if (kl>=klrd && kl<=klrd+30){
        document.getElementsByName("kdn")[kl].innerHTML=kl-klrd+1;	   	
       }
       else {
        document.getElementsByName("kdn")[kl].innerHTML="*";
        document.getElementsByName("kdn")[kl].style.color="#000099";	   	
	   }	
    }
  }     
  for (ll=0;ll<=5;ll++){
    for (kk=0;kk<=6;kk++){
       kl=ll*7+kk;
       if (kl>=klrd && kl<=klrd+30){
         dnn=kl-klrd+1;
         if(dnn==kldd){
          document.getElementsByName("kdn")[kl].style.color="#ff0000";	   	
    	 }
	     else {	
          document.getElementsByName("kdn")[kl].style.color="#000099";	   	
         } 
 	   } 
	   
    }
  }
}

function kalgod(id){
  if(id==0){
   kldg--;  	
  }
  else {
   kldg++;  	   	
  }
  var dasa = new Date(kldg,kldm-1,1);
  klrd=dasa.getDay();
  if (klrd==0){
  	klrd=6;
  }	
  else {
  	klrd--;  	
  }
  kalendar();
}

function kalmes(id){
  if(id==0){
   kldm--;
   if(kldm==0){
   	kldm=12;
   	kldg--;
   }  	
  }
  else {
   kldm++;  	   	
   if(kldm==13){
   	kldm=1;
   	kldg++;
   }  	
  }
  var dasa = new Date(kldg,kldm-1,1);
  klrd=dasa.getDay();
  if (klrd==0){
  	klrd=6;
  }	
  else {
  	klrd--;  	
  }
  kalendar(); 
}

function daniz(obj){
 kldd=parseInt(obj.innerHTML);
 kalendar();
}

function datun(){
 var klddd = String(kldd);
 if (klddd.length==1) {
  klddd="0"+klddd; 	
 }

 var kldms = String(kldm);
 if (kldms.length==1) {
  kldms="0"+kldms; 	
 }	
 
 document.getElementsByName("ftxt")[izbo].value=klddd+"."+kldms+"."+kldg; 	
 document.body.removeChild(document.getElementById("okno1"));	
}

/* DIJALOZI  - skup funkcija */


function diaout(){
 document.body.removeChild(document.getElementById("zavesa"));	
}

function diaoutk(){
 document.body.removeChild(document.getElementById("okno1"));	
}

function diapot(ditx) {
 var okfor = document.createElement("div");
 document.body.appendChild(okfor);
 okfor.id="okno1";
 spis="<table id=kdtb onclick='diaoutk()'><tr><td><img src='image/flag.jpg'> </td></tr>";
 spis=spis+"<tr><td id=potx><center>"+ditx+"<center></td></tr></table>"
 document.getElementById("okno1").innerHTML=spis;
  document.getElementById('okno1').style.position="fixed";
 var okvis=document.getElementById('okno1').style.height/2;
 var okdug=document.getElementById('okno1').style.width /2;
 document.getElementById('okno1').style.top=screen.height/3+"px";
 document.getElementById('okno1').style.left=screen.width/3+"px";
 document.getElementById('okno1').style.visibility="visible";	
 document.getElementById('okno1').style.zIndex=10002;
}

function diapotsl() {
 filedia()
 var okfor = document.createElement("div");
 document.body.appendChild(okfor);
 okfor.id="okno1";
 document.getElementById('okno1').style.visibility="visible";	
 spis="<center><img src=´´>";
 spis=spis+"<p>UČITAVAMO SLIKU . </p></center>"
 document.getElementById("okno1").innerHTML=spis;
 var myVar=setInterval(function () {diavrtt()}, 1000);
 slika_unos(ggg+mms+ddd+ccs+mmn+sss,document.getElementsByName('ftxt')[5].value);
}
function diavrtt() {
 rbs++;
 if (rbs==5) {
  rbs=1;
 }	
 spis="<center><img src=´image/toc"+rbs+".jpg´>";
 spis=spis+"<p>UČITAVAMO SLIKU . </p></center>"
 document.getElementById("okno1").innerHTML=spis;
}
function diaoptvz(id){
 var xmlhttp=new XMLHttpRequest();
 var aopt="0";
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementsByName("ftxt")[id].innerHTML=xmlhttp.responseText;
  }	 
 }
 xmlhttp.open("GET","kazna-optt.php?uopt="+aopt,true);
 xmlhttp.send();		
}

function diaoptvc(id){
 var xmlhttp=new XMLHttpRequest();
 var aopt="1";
 xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementsByName("ftxt")[id].innerHTML=xmlhttp.responseText;
  }	 
 }
 xmlhttp.open("GET","kazna-optt.php?uopt="+aopt,true);
 xmlhttp.send();		
}

function oboji(obj){
  obj.style.backgroundColor="#84D784"; 	
}

function oboju(obj){
  obj.style.backgroundColor="#ffffff";
}

function obomnu(rb){
  for(ll=0;ll<=4;ll++) {
    if(ll==rb){
      document.getElementsByName("mnu")[ll].style.background="linear-gradient(to bottom right,#666666,#bbbbbb,#666666)"; 
      document.getElementsByName("mnu")[ll].style.color="#000000";  	
    }	
    else{
      document.getElementsByName("mnu")[ll].style.background="linear-gradient(to bottom right,#111111,#666666,#111111)"; 
      document.getElementsByName("mnu")[ll].style.color="#ffffff";
    }	
  }	
}

function logos(){
  var  kljuc1= document.getElementsByName('ftxt')[0].value	
  var  kljuc2= document.getElementsByName('ftxt')[1].value	
  if (kljuc1=="demo" && kljuc2=="demo") {
   gldia();	
 }
 else {
  diapot("PODACI NISU ISPRAVNI");
 }	
}

function gldia() {
 spis="<tr><td id=nas colspan=10><table id=nass>";
 spis=spis+"<tr><td>";
 spis=spis+"<P id=lognass>";
 spis=spis+"AUTOPARK";
 spis=spis+"</P>";
 spis=spis+"<P id=lognas>";
 spis=spis+"MADE BY ALEKSANDAR VUCKOVIC";
 spis=spis+"</P>";
 spis=spis+"</td></tr>";
 spis=spis+"<tr>";
 spis=spis+"<td>";
 spis=spis+"</td></tr>";
 spis=spis+"</table>";
 spis=spis+"</td>";
 spis=spis+"</tr>";
 spis=spis+"<tr>";
 spis=spis+"<td id=mnu name=mnu onclick='vozila()'>";
 spis=spis+"VOZILA";
 spis=spis+"</td>";
 spis=spis+"<td id=mnu name=mnu onclick='vozaci()'>";
 spis=spis+"VOZACI";
 spis=spis+"</td>";
 spis=spis+"<td id=mnu name=mnu onclick='odrzi()'>";
 spis=spis+"ODRŽAVANJE</td>"
 spis=spis+"<td id=mnu name=mnu onclick='kazna()'>";
 spis=spis+"KAZNE I PREKRŠAJI";
 spis=spis+"</td>";
 spis=spis+"<td id=mnu name=mnu onclick= 'primo() '>";
 spis=spis+"PRIMOPREDAJA";
 spis=spis+"</td>";
 spis=spis+"<td id=bltb>";
 spis=spis+"</td>";
 spis=spis+"<td id=bltb>";
 spis=spis+"</td>";
 spis=spis+"<td id=bltb>";
 spis=spis+"</td>";
 spis=spis+"<td id=bltb>";
 spis=spis+"</td>";
 spis=spis+"<td id=bltb>";
 spis=spis+"</td>";
 spis=spis+"</tr>";
 spis=spis+"<tr>";
 spis=spis+"<td id=aprk colspan=10>";
 spis=spis+"</td>";
 spis=spis+"</tr>";
 document.getElementById("gltb").innerHTML=spis;
 
 }

/* UCITANJE SLIKE - skup funkcija*/


function slika_unos(){
 var slk=document.getElementsByName('ftxt')[5].value
 var xmlhttp=new XMLHttpRequest();
 xmlhttp.onreadystatechange=function() { 
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    spis="<table id=kdtb onclick='diaoutk()'><tr><td><img src='image/flag.jpg'> </td></tr>";
    spis=spis+"<tr><td id=potx><center>PODACI SU UNETI U BAZU<center></td></tr></table>"
    document.getElementById("okno1").innerHTML=spis;
  }
 }
 var dzn=slk.length;
 var ekste=slk.substr(dzn-4,4);
 var islk="000000000000"; 
 if (ekste==".jpg"){
  islk="image/"+id+".jpg";	
 }
 if (ekste==".gif"){
  islk="image/"+id+".gif";	
 }
 if (ekste==".png"){
  islk="image/"+id+".png";	
 }
 if (ekste==".bmp"){
  islk="image/"+id+".bmp";	
 }
 spis="idl="+islk;
 spis=spis+"&slk="+slk;
 xmlhttp.open("GET","slika-unos.php?"+spis,true);
 xmlhttp.send();
}

function filedia(){
 var lnks=document.getElementsByName("ftxt")[5].value;
 document.getElementById("slvoz").src=lnks; 	
 
}

 








/*

function izbserv(idv){
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
   if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  	 document.getElementById("servek").innerHTML=xmlhttp.responseText;
   }
  }
  xmlhttp.open("GET","izblist-serv.php?idv='"+idv+"'",true);
  xmlhttp.send();	
}
*/














