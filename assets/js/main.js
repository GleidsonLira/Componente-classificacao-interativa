const buttons = document.querySelectorAll(".button")
const submit = document.getElementById("submit")
let select = ""

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('clicked');
    return select += this.innerText
}

buttons.forEach(button => button.addEventListener('click',toggleOpen))
submit.addEventListener("click",refresh)

function refresh(){
    const window = document.querySelector(".window")
    while (window.firstChild) {
        window.removeChild(window.firstChild);
    }