
 reiter=new Array();

// Registerreiter eintragen.
// Die Namen müssen mit den Dateinamen übereinstimmen!
 reiter[0]='Sudoku';
 reiter[1]='Kakuro';
 reiter[2]='Tetris';
 reiter[3]='Mahjong';
 // reiter[6]=''; // ... Weitere Einträge



 var dateiendung = ".html" //  .html   .php



// Ab hier nichts mehr ändern
 var Eintraege = reiter.length

 document.write('<table class="tabellenfarbe" border="0" width="700" cellPadding="0" cellSpacing="0"><tr>');
  for (i=0;i<Eintraege;i++){
   if(reiter[i]+dateiendung == document.title+dateiendung){
    document.write('<td><a href="'+reiter[i]+'.html" class=reiter2 target=iframe2>'+reiter[i]+'</a></td>');
   }
   else{
    document.write('<td><a href="'+reiter[i]+'.html" class=reiter target=iframe2>'+reiter[i]+'</a></td>');
   }
  }
 document.write('</tr><tr><td class="spaltenfarbe" colspan='+Eintraege+'>&nbsp; </td></tr></table>');