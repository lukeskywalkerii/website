const one = document.querySelector("#one")
function oneDisappear(event) {event.target.style.visibility = "hidden"}
const two = document.querySelector("#two")
function twoAppear() {two.style.visibility = "visible"}
one.addEventListener("click", oneDisappear)
one.addEventListener("click", twoAppear)

function twoDisappear(event) {event.target.style.visibility = "hidden"}
const three = document.querySelector("#three")
function threeAppear() {three.style.visibility = "visible"}
two.addEventListener("click", twoDisappear)
two.addEventListener("click", threeAppear)

function threeDisappear(event) {event.target.style.visibility = "hidden"}
const four = document.querySelector("#four")
function fourAppear() {four.style.visibility = "visible"}
three.addEventListener("click", threeDisappear)
three.addEventListener("click", fourAppear)

function fourDisappear(event) {event.target.style.visibility = "hidden"}
function oneAppear() {one.style.visibility = "visible"}
four.addEventListener("click", fourDisappear)
four.addEventListener("click", oneAppear)