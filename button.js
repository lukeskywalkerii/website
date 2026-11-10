const body = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    if (body.style.backgroundColor === "yellow") {
        body.style.backgroundColor = "#d0d0d0";
    } else {
        body.style.backgroundColor = "yellow";
    }
});