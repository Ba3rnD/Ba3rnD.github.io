
 reiter=new Array();

// Registerreiter eintragen.
// Die Namen m�ssen mit den Dateinamen �bereinstimmen!
 reiter[0]='aktueller Monat';
 reiter[1]='naechster Monat';
 reiter[2]='Vorschau';
 reiter[3]='laufende Termine';
 reiter[4]='Internet-TV-Radio';
 reiter[5]='';
 // reiter[6]=''; // ... Weitere Eintr�ge



 var dateiendung = ".html" //  .html   .php



// Ab hier nichts mehr �ndern
 var Eintraege = reiter.length

 document.write('<table class="tabellenfarbe" border="0" width="700" cellPadding="0" cellSpacing="0"><tr>');
  for (i=0;i<Eintraege;i++){
   if(reiter[i]+dateiendung == document.title){
    document.write('<td><a href="'+reiter[i]+'" class=reiter2 target=iframe2>'+reiter[i]+'</a></td>');
   }
   else{
    document.write('<td><a href="'+reiter[i]+'.html" class=reiter target=iframe2>'+reiter[i]+'</a></td>');
   }
  }
 document.write('</tr><tr><td class="spaltenfarbe" colspan='+Eintraege+' align="right"><b><i><a href="http://www.info-serve.de/terminserver/read.php3?User=Maikel45"class=reiter3 target=iframe2 ><font color="#FFFFFF">>>Termine selbst eintragen<<</font></a></i></b></td></tr></table>');