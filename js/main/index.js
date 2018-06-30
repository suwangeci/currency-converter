//point to the main div section with id "root" where document manipulation will begin

const root=document.getElementById('root');
root.textContent="my app ooh!";
root.className="ui button";


let innerDivision=document.createElement('div');
innerDivision.style.backgroundSize="40px";
innerDivision.style.backgroundColor="grey";
root.appendChild(innerDivision);

