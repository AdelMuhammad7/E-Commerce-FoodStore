// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> slider <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true , 
        prevArrow: ".pre" , 
        nextArrow: ".next",
        responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    //   setting-name: setting-value
    });
  });
//////////////////////////////////////////////////////////////////////////////////////

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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Times Left <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
function dateLeftForTheMeals (){
    let today = new Date()
    let dateLeft = new Date("march 31, 2025")
    let dateDiffrent = (dateLeft.getDate() - today.getDate() )  - 1

    let second = (60 - today.getSeconds())
    let minute = (60 - today.getMinutes())
    let hour = (24 - today.getHours())

    hours.innerHTML = hour
    minutes.innerHTML = minute
    seconds.innerHTML = second
    days.innerHTML = dateDiffrent
}
setInterval(dateLeftForTheMeals , 1000)
/////////////////////////////////////////////////////////////////////////////////////////
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


// let data;
// if(localStorage.getItem ("cart") ){
//     data = JSON.parse(localStorage.getItem("cart"))
// }else {
//     data = []
// }
