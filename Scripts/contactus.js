// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> open Links <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let linkbarBTN = document.querySelector(".fa-bars")
let links = document.querySelector("nav .bot-nav ul")
function openLinks () {
    linkbarBTN.addEventListener("click" , function(){
      links.classList.toggle("open")
      linkbarBTN.classList.toggle("rotate")
    })
}
openLinks ()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Arrow Up <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let arrowUp = document.querySelector(".fa-circle-arrow-up")
window.onscroll = () => {
    if(scrollY < 500){
        arrowUp.style.display = "none"
    }else {
        arrowUp.style.display = "flex"
        arrowUp.addEventListener("click" , function(){
            window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
        })
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Cart <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let open = document.querySelector(".fa-cart-shopping")
let close = document.querySelector(".fa-circle-xmark")
let cartItems = document.querySelector(".cart-items")

open.addEventListener("click" , function(){
    cartItems.style.display = "flex"
})
close.addEventListener("click" , function(){
    cartItems.style.display = "none"
})

//////////////////////////////////////////////////////////////////////////////////////////////

let userName = document.querySelector("#userName")
let password = document.querySelector("#password")
let email = document.querySelector("#email")
let submit = document.querySelector("#submit")

let msgAlert = document.querySelector(".msgAlert")
let msgUser = document.querySelector(".msgUser")
let msgPass = document.querySelector(".msgPass")
let msgEmail = document.querySelector(".msgEmail")
let accSucceflly = document.querySelector(".accSucceflly")

userName.addEventListener("change" ,function(){

    let userRe = /^[A-Z]{1}[a-zA-Z]{3,}/
    if(userName.value.match(userRe)){

    }else {
        msgAlert.style.display = "block"
        msgUser.style.display = "block"
        setTimeout(function(){
            msgAlert.style.display = "none"
            msgUser.style.display = "none"
        }, 4000)
    }
})

password.addEventListener("change" ,function(){

    let passRe = /^[A-Z]{1}\w{7}/
    if(password.value.match(passRe)){

    }else {
        msgAlert.style.display = "block"
        msgPass.style.display = "block"
        setTimeout(function(){
            msgAlert.style.display = "none"
            msgPass.style.display = "none"
        }, 4000)
    }
})

email.addEventListener("change" ,function(){

    let emailRe = /\w{2,}@\w{2,}.(com|net)/
    if(email.value.match(emailRe)){

    }else {
        msgAlert.style.display = "block"
        msgEmail.style.display = "block"
        setTimeout(function(){
            msgAlert.style.display = "none"
            msgEmail.style.display = "none"
        }, 4000)
    }
})

submit.addEventListener("click" ,function(){
    if(userName.value == "" ){

        msgAlert.style.display = "block"
        msgUser.style.display = "block"
        setTimeout(function(){
            msgAlert.style.display = "none"
            msgUser.style.display = "none"
        }, 3000)
        

    }else if (password.value == ""){

        msgAlert.style.display = "block"
        msgPass.style.display = "block"
        setTimeout(function(){
            msgAlert.style.display = "none"
            msgPass.style.display = "none"
        }, 3000)
        

    }else if (email.value == ""){

        msgAlert.style.display = "block"
        msgEmail.style.display = "block"
        setTimeout(function(){
            msgAlert.style.display = "none"
            msgEmail.style.display = "none"
        }, 3000)
        

    }else {

        msgAlert.style.display = "block"
        accSucceflly.style.display = "block"
        setTimeout(function(){
            msgAlert.style.display = "none"
            accSucceflly.style.display = "none"
        }, 5000)
        clearInputs()
    }
})

function clearInputs (){
    userName.value = ""
    password.value = ""
    email.value = ""
}


