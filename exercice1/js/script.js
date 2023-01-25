let btn = document.querySelector(".add-box");
let body = document.querySelector("body");

btn.addEventListener("click", (ev) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("box");
    body.appendChild(newDiv);
})