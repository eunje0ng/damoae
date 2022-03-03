function open_mailer(){
    let modal = document.querySelector("#modal")
    modal.style.display = "block"
}
function close_mailer(){
    let close = document.querySelector(".close-modal")
    let modal = document.querySelector("#modal")
    close.addEventListener("click", function(){
        modal.style.display = "none"
    })
}
close_mailer();

function address_find(){
    alert("안됑!")
}