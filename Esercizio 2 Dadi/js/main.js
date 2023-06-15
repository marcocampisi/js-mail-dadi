const bottoneGioco = document.getElementById('bottoneGioco');
const punteggioComputer = document.getElementById('punteggioComputer');
const punteggioUtente = document.getElementById('punteggioUtente');

bottoneGioco.addEventListener('click',
    function(event) {
        let dadoUtente = Math.floor(Math.random() * 6);
        let dadoComputer = Math.floor(Math.random() * 6);
        punteggioUtente.innerHTML = dadoUtente;
        punteggioComputer.innerHTML = dadoComputer;
    }
);