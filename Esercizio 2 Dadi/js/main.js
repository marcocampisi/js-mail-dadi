const dadoUtente = Math.floor(Math.random() * 6);
const dadoComputer = Math.floor(Math.random() * 6);
const bottoneGioco = document.getElementById('bottoneGioco');
const punteggioComputer = document.getElementById('punteggioComputer');
const punteggioUtente = document.getElementById('punteggioUtente');

bottoneGioco.addEventListener('click',
    function(event) {
        punteggioUtente.innerHTML = dadoUtente;
        punteggioComputer.innerHTML = dadoComputer;
        
    }
);