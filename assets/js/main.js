const buttons = document.querySelectorAll(".button")
const submit = document.getElementById("submit")
let select = ""

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('clicked');
    return select += this.innerText
}