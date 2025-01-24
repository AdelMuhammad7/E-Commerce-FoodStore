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
let ProductsContainer = document.querySelector(".ProductsContainer")
let productsCards = document.querySelector(".productsCards")
let alert = document.querySelector(".alert")
let alertP = document.querySelector("#alertP")

let counterItems = document.querySelector(".counterItems")
let total = document.querySelector("#total")
let empty = document.querySelector("#empty")

let deleteAlert = document.querySelector(".deleteAlert")
let yes = document.querySelector("#yes")
let no = document.querySelector("#no")

open.addEventListener("click" , function(){
    cartItems.style.display = "flex"
})
close.addEventListener("click" , function(){
    cartItems.style.display = "none"
})
// let products = [
//     {
//         id : 1,
//         img : "../imags/donut-transparent.png",
//         name : "Fresh vagies",
//         price : 30,
//         quantity : 0,
//         totall:30,
//     },
//     {
//         id : 2,
//         img : "../imags/yogurt.png",
//         name : "Yogurt",
//         price : 35,
//         quantity : 0,
//         totall:35,
//     },
//     {
//         id : 3,
//         img : "../imags/plate-1.png",
//         name : "Summer salad",
//         price : 40,
//         quantity : 0,
//         totall:40,
//     },
//     {
//         id : 4,
//         img : "../imags/plate-2.png",
//         name : "Cottage dish",
//         price : 45,
//         quantity : 0,
//          totall:45,
//     },
//     {
//         id : 5,
//         img : "../imags/plate-3.png",
//         name : "Greek salad",
//         price : 50,
//         quantity : 0,
//          totall:50,
//     },
//     {
//         id : 6,
//         img : "../imags/salad-table.jpg",
//         name : "paradise dish",
//         price : 55,
//         quantity : 0,
//          totall:55,
//     },
//     {
//         id : 7,
//         img : "../imags/coffee.jpg",
//         name : "Coffee time",
//         price : 60,
//         quantity : 0,
//          totall:60,
//     },
//     {
//         id : 8,
//         img : "../imags/food-table.jpg",
//         name : "Dinner time",
//         price : 70,
//         quantity : 0,
//          totall:70,
//     },
//     {
//         id : 9,
//         img : "../imags/jars.jpg",
//         name : "After dinner ",
//         price : 100,
//         quantity : 0,
//          totall:100,
//     },
//     {
//         id : 10,
//         img : "../imags/cupcake.png",
//         name : "Cup cake",
//         price : 110,
//         quantity : 0,
//          totall:110,
//     },
// ]

let products = [
    {   
        productName : "product one",
        productPrice : 10,
        price : 10,
        productPhoto : "imags/plate-1.png",
        quantity : 1,
        id : 1
    },
    {
        productName : "product two",
        productPrice : 20,
        price : 20,
        productPhoto : "imags/plate-2.png",
        quantity : 1,
        id : 2
    },
    {
        productName : "product three",
        productPrice : 30,
        price : 30,
        productPhoto : "imags/plate-3.png",
        quantity : 1,
        id : 3
    },
    {
        productName : "product four",
        productPrice : 40,
        price : 40,
        productPhoto : "imags/plate-1.png",
        quantity : 1,
        id : 4
    },
    {
        productName : "product five",
        productPrice : 50,
        price : 50,
        productPhoto : "imags/plate-2.png",
        quantity : 1,
        id : 5
    },
    {
        productName : "product six",
        productPrice : 60,
        price : 60,
        productPhoto : "imags/plate-3.png",
        quantity : 1,
        id : 6
    },
    {
        productName : "product seven",
        productPrice : 70,
        price : 70,
        productPhoto : "imags/plate-1.png",
        quantity : 1,
        id : 7
    },
    {
        productName : "product eight",
        productPrice : 80,
        price : 80,
        productPhoto : "imags/plate-2.png",
        quantity : 1,
        id : 8
    },
    {
        productName : "product nine",
        productPrice : 90,
        price : 90,
        productPhoto : "imags/plate-3.png",
        quantity : 1,
        id : 9
    },
    {
        productName : "product ten",
        productPrice : 100,
        price : 100,
        productPhoto : "imags/plate-1.png",
        quantity : 1,
        id : 10
    }
]

// function to add items to Html Page
function productsContainers (){
    let item = ""
    for(let i = 0; i < products.length; i++){
        item += `
        <div class="productCard">
            <div>
                <img src="${products[i].productPhoto}" alt="">
            </div>
            <b>${products[i].productName}</b>
            <span>$${products[i].productPrice}</span>
            <button onclick = "addToCart(${i})">Add to cart</button>
        </div>
        `
        ProductsContainer.innerHTML = item
    }
}
productsContainers ()

// localStorage and make array of data
let data;
if(localStorage.getItem ("cart") ){
    data = JSON.parse(localStorage.getItem("cart"))
}else {
    data = []
}
// function for add to cart
function addToCart(num){
    products[num].quantity = 1
    products[num].price = products[num].productPrice
    if(data.includes(products[num]) || productsCards.innerHTML.includes(products[num].productName)){
        alert.style.display = "block"
        alertP.innerHTML = `This Product Is Added To The Cart`
        setTimeout(function(){
            alert.style.display = "none"
        }, 3000)    
    }else {
        data.push(products[num])  
        localStorage.setItem( "cart" , JSON.stringify( data ))

        alert.style.display = "block"
        alertP.innerHTML = `Your <span> ${products[num].productName} </span> Add to Cart successfully`
            setTimeout(function(){
                alert.style.display = "none"
            }, 3000)     
    }
    displayProducts () 
}
// function to display in cart
function displayProducts (){
   
    let totalPrice = 0
    let item = ""

    data.map((el , index ) => {
        totalPrice += el.price
        
       return item += `
        <div class="cards">
            <img src="${el.productPhoto}" alt="">
            <div class="title">
                <p>${el.productName}</p>
                <span>$${el.price}</span>
            </div>
            <div class="counter">
                <i class="fa-solid fa-plus" onclick="changeProducts(${index} , ${el.quantity + 1} , ${el.id})"></i>
                <div class="count">${el.quantity}</div>
                <i class="fa-solid fa-minus" onclick="changeProducts(${index} , ${el.quantity - 1} , ${el.id})"></i>
            </div>
            <i class="fa-solid fa-trash" onclick="deleteProducts(${index})"></i>
        </div>`
    })
    
    total.innerHTML = `$${totalPrice}.00`
    console.log(data)
    productsCards.innerHTML = item
    counterItems.innerHTML = data.length
    // style number and paragarph
    if(data.length > 0){
        empty.style.display = "none"
        counterItems.style.color = "white"
    }else {
        empty.style.display = "block"
        counterItems.style.color = "red"
    }
    // width
    if(data.length > 5){
        cartItems.classList.add("row")
        productsCards.classList.add("multi")
    }else {
        cartItems.classList.remove("row")
        productsCards.classList.remove("multi")
    } 
}
displayProducts ()
// function to delete items
function deleteProducts(index){
    deleteAlert.style.display = "block"
    yes.onclick = function(){
        data.splice(index , 1)
        displayProducts()
        deleteAlert.style.display = "none"
        localStorage.setItem( "cart" , JSON.stringify( data ))
    
    }
    no.onclick = function(){
    deleteAlert.style.display = "none"
    }
}
// function increment and decrement
function changeProducts (index , quantity) {
    if(quantity < 1){

    }else{
        data[index].quantity = quantity ;        
        data[index].price = quantity * data[index].productPrice;
        localStorage.setItem( "cart" , JSON.stringify( data ))
    }
    displayProducts()
}