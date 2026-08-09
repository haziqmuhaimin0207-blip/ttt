// ==========================================
// BIRTHDAY SURPRISE - PART 3
// Basic navigation + password system
// ==========================================


// ---------- PAGE ELEMENTS ----------

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const openBtn = document.getElementById("openBtn");
const unlockBtn = document.getElementById("unlockBtn");

const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");


// ---------- CORRECT PASSWORD ----------

const correctPassword = "120800";


// ---------- CHANGE PAGE FUNCTION ----------

function showPage(pageToShow) {

    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show selected page
    pageToShow.classList.add("active");
}


// ---------- OPEN BUTTON ----------

openBtn.addEventListener("click", () => {

    showPage(page2);

    // Automatically focus password box
    setTimeout(() => {
        passwordInput.focus();
    }, 500);

});


// ---------- UNLOCK BUTTON ----------

unlockBtn.addEventListener("click", checkPassword);


// ---------- ENTER KEY ----------

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        checkPassword();
    }

});


// ---------- PASSWORD CHECK ----------

function checkPassword() {

    const enteredPassword = passwordInput.value.trim();


    // Correct password
    if (enteredPassword === correctPassword) {

        errorMessage.textContent = "";

        // Disable button temporarily
        unlockBtn.disabled = true;

        unlockBtn.innerHTML = "Access Granted ❤️";

        // Small delay before next stage
        setTimeout(() => {

            // For now, return to first page.
            // Part 4 will replace this with
            // the loading + surprise screen.

            alert("Password correct ❤️");

            unlockBtn.disabled = false;
            unlockBtn.innerHTML = "Unlock ❤️";

        }, 700);


    } else {

        // Wrong password
        errorMessage.textContent =
            "Hmm... try remembering your birthday 🤭❤️";

        // Shake password box
        passwordInput.classList.add("shake");

        setTimeout(() => {
            passwordInput.classList.remove("shake");
        }, 500);

    }

}
