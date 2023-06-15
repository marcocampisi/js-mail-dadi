const mailAutorizzate = [
    'pippo@boolean.careers', 
    'marco@boolean.careers', 
    'utente1@boolean.careers', 
    'utente2@boolean.careers', 
    'utente3@boolean.careers', 
    'utente4@boolean.careers', 
    'utente5@boolean.careers'
];

const inputMail = document.getElementById('inputMail');
const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit',
    function(event) {
        event.preventDefault();
        let mailUtente = inputMail.value;
        let mailValida = false;
        for (let i = 0; i < mailAutorizzate.length; i++) {
            if (mailUtente == mailAutorizzate[i]) {
                mailValida = true;
                break;
            }
        }

        if (mailValida) {
            alert('Mail autorizzata, login consentito')
        } else {
            alert('Mail negata, login non consentito')
        }
    }
);