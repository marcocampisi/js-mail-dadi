const dadoUtente = Math.floor(Math.random() * 6);
const dadoComputer = Math.floor(Math.random() * 6);
const bottoneGioco = document.getElementById('bottoneGioco');

let gioco = false;

bottoneGioco.addEventListener('click',
    function(event) {
        gioco = true;
    }
);

if (gioco) {
    
}