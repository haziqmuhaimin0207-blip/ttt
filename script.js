const openBtn = document.getElementById("openBtn");
const unlockBtn = document.getElementById("unlockBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");

const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");

const nextBtn = document.getElementById("nextBtn");
const revealBtn = document.getElementById("revealBtn");

const loadingProgress =
    document.getElementById("loadingProgress");

const loadingPercent =
    document.getElementById("loadingPercent");

const loadingText =
    document.getElementById("loadingText");


const correctPassword = "120800";


// ================= PAGE FUNCTION =================

function showPage(page) {

    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    page.classList.add("active");

}


// ================= OPEN =================

openBtn.onclick = function () {

    showPage(page2);

    setTimeout(() => {
        passwordInput.focus();
    }, 300);

};


// ================= PASSWORD =================

unlockBtn.onclick = function () {

    if (passwordInput.value === correctPassword) {

        errorMessage.innerHTML = "";

        startLoading();

    } else {

        errorMessage.innerHTML =
            "Wrong password 🤭 Try your birthday!";

    }

};


// ================= ENTER KEY =================

passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        unlockBtn.click();

    }

});


// ================= LOADING =================

function startLoading() {

    showPage(page3);

    let progress = 0;

    const messages = [
        "Preparing something special...",
        "Checking your birthday...",
        "Unlocking your surprise...",
        "Almost there...",
        "Welcome, Birthday Girl ❤️"
    ];

    const interval = setInterval(() => {

        progress += 2;

        loadingProgress.style.width =
            progress + "%";

        loadingPercent.innerHTML =
            progress + "%";


        if (progress < 25) {

            loadingText.innerHTML =
                messages[0];

        } else if (progress < 50) {

            loadingText.innerHTML =
                messages[1];

        } else if (progress < 75) {

            loadingText.innerHTML =
                messages[2];

        } else if (progress < 95) {

            loadingText.innerHTML =
                messages[3];

        } else {

            loadingText.innerHTML =
                messages[4];

        }


        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                showPage(page4);

            }, 700);

        }

    }, 50);

}


// ================= NEXT =================

nextBtn.onclick = function () {

    showPage(page5);

};


// ================= REVEAL =================

revealBtn.onclick = function () {

    alert("Birthday plan unlocked ❤️");

const revealBtn = document.getElementById("revealBtn");

if (revealBtn) {
    revealBtn.addEventListener("click", () => {

        document.getElementById("page5").classList.remove("active");

        document.getElementById("page6").classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

};
