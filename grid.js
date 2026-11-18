const a = document.querySelector(".a")
const b = document.querySelector(".b")
const c = document.querySelector(".c")
const d = document.querySelector(".d")
const e = document.querySelector(".e")
const f = document.querySelector(".f")

function disappear(event) {
  event.target.style.visibility = "hidden";
}

a.addEventListener("click", disappear)
b.addEventListener("click", disappear)
c.addEventListener("click", disappear)
d.addEventListener("click", disappear)
e.addEventListener("click", disappear)
f.addEventListener("click", disappear)