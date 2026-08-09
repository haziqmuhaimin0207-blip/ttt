const openBtn = document.getElementById("openBtn");
const unlockBtn = document.getElementById("unlockBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");

const correctPassword = "120800";


openBtn.onclick = function () {

    page1.classList.remove("active");
    page2.classList.add("active");

};


unlockBtn.onclick = function () {

    if (passwordInput.value === correctPassword) {

        errorMessage.innerHTML = "Access Granted ❤️";

    } else {

        errorMessage.innerHTML =
            "Wrong password 🤭 Try your birthday!";

    }

};
