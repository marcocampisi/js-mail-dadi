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
const bottoneLogin = document.getElementById('bottoneLogin');
let mailUtente = inputMail.value;
let mailValida = false;

bottoneLogin.addEventListener('click',
    function(event) {
        event.preventDefault();
        for (let i = 0; i < mailAutorizzate.length; i++) {
            if (mailUtente == mailAutorizzate[i]) {
                mailValida = true;
            }
        }

        if (mailValida) {
            alert('Mail autorizzata, login consentito')
        } else {
            alert('Mail negata, login non consentito')
        }
    }
);