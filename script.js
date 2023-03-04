const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let addToCart = document.querySelector('add-cart');

// Remove Items from cart

let removeItem = document.getElementsByClassName('remove-item')

function removeCartItem(event) {
    var buttonclicked = event.target
    buttonclicked.remove()
}
console.log(removeItem)
for (var i = 0; i < removeItem.length; i++) {
    var button = removeItem[i]
    button.addEventListener('click', removeCartItem)
}