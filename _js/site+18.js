//     POP-UP (site+18_2)

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//    BOTÃO SIM E NÃO NO +18

function positivo() {    
    window.location.assign("formulario.html"); // ASSIGN para ter opçao de voltar para página, mas poderia ser REPLACE
}
function negativo () {
    alert("Você não pode participar da promoção atualmente.");

}