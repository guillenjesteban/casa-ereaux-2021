


// age verification popup

window.onload = function () {
    let yes = document.getElementById("yes-btn");
    let no = document.getElementById("no-btn");
    let desc = document.querySelector(".age-modal-description");
    let backdrop = document.querySelector(".age-backdrop");
    yes.addEventListener("click", function () {
    backdrop.style.display = "none";
    desc.innerHTML = "Thank you, wait a few seconds please...";
    });
    no.addEventListener("click", function () {
    desc.innerHTML = "Sorry you can not enter";
    });
    };
