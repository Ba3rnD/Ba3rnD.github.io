
 reiter=new Array();

// Registerreiter eintragen.
// Die Namen m�ssen mit den Dateinamen �bereinstimmen!
 reiter[0]='A';
 reiter[1]='B';
 reiter[2]='C';
 reiter[3]='D';
 reiter[4]='EF';
 reiter[5]='GH';
 reiter[6]='IJ';
 reiter[7]='KL';
 reiter[8]='M-O';
 reiter[9]='P-R';
 reiter[10]='S';
 reiter[11]='T';
 reiter[12]='W-Z';
 // reiter[6]=''; // ... Weitere Eintr�ge



 var dateiendung = ".html" //  .html   .php



// Ab hier nichts mehr �ndern
 var Eintraege = reiter.length

 document.write('<table class="tabellenfarbe" border="0" width="650" cellPadding="0" cellSpacing="0"><tr>');
  for (i=0;i<Eintraege;i++){
   if(reiter[i]+dateiendung == document.title+dateiendung){
    document.write('<td><a href="'+reiter[i]+'.html" class=reiter2 target=iframe2>'+reiter[i]+'</a></td>');
   }
   else{
    document.write('<td><a href="'+reiter[i]+'.html" class=reiter target=iframe2>'+reiter[i]+'</a></td>');
   }
  }
 document.write('</tr><tr><td class="spaltenfarbe" colspan='+Eintraege+'>&nbsp; </td></tr></table>');