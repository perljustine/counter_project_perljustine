let body = document.querySelector('body');
let Montitre = document.createElement('h1');
let textemontitre = document.createTextNode ('Counter');
let div = document.createElement('div');
body.appendChild(div);

Montitre.appendChild(textemontitre);
div.appendChild(Montitre);

let counterlabel = document.createElement ('label');
let textecounterlabel = document.createTextNode (0);
counterlabel.appendChild(textecounterlabel);
div.appendChild(counterlabel);

let counter = 0;

let countermoins = document.createElement('button');
let textemoncountermoins = document.createTextNode ('-');

countermoins.appendChild(textemoncountermoins); 
body.appendChild(countermoins);

let reset = document.createElement('button');
let textereset= document.createTextNode ('reset');

reset.appendChild(textereset); 
body.appendChild(reset);

let counterplus = document.createElement('button');
let textemoncounterplus = document.createTextNode ('+');

counterplus.appendChild(textemoncounterplus); 
body.appendChild(counterplus);


