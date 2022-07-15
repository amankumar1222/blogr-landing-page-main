console.log('aasan hai');

let navMenu = document.getElementById('nav')
let bruger = document.getElementById('burger')
let cross = document.getElementById('cross')

bruger.addEventListener("click", () => {
    bruger.style.display = "none"
    cross.style.display = "block"
    navMenu.style.visibility = "visible"

})

cross.addEventListener("click", () => {
    bruger.style.display = "block"
    cross.style.display = "none"
    navMenu.style.visibility = "hidden"
})

