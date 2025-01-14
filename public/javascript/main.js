let body = document.querySelector('body');
let Montitre = document.createElement('h1');
let textemontitre = document.createTextNode ('Counter');
let div = document.createElement('div');

body.appendChild(div);

Montitre.appendChild(textemontitre);
div.appendChild(Montitre);

let Counterlabel = document.createElement ('label');
let textecounterlabel = document.createTextNode (0);
Counterlabel.appendChild(textecounterlabel);
div.appendChild(Counterlabel);

let Countermoins = document.createElement('button');
let textemoncountermoins = document.createTextNode ('-');

Countermoins.appendChild(textemoncountermoins); 
body.appendChild(Countermoins);

let Reset = document.createElement('button');
let textereset= document.createTextNode ('reset');

Reset.appendChild(textereset); 
body.appendChild(Reset);

let Counterplus = document.createElement('button');
let textemoncounterplus = document.createTextNode ('+');

Counterplus.appendChild(textemoncounterplus); 
body.appendChild(Counterplus);





