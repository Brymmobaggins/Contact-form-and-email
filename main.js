let popup = document.getElementById('popup')
const input = document.querySelector('input')
const form = document.getElementById('contact-form')

form.addEventListener("submit", function (e) {
    e.preventDefault() // prevent submission
    openPopUp()
    // validateForm()
    closeform()
    // displayError(message)
})

function validateForm() {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    let phone = document.getElementById("phone").value


    if (!name || !email || !message || !phone) {
        return false
    }
    return true
}


function displayError(message) {
    let errorEl = document.getElementById('error')
    errorEl.innerHTML = message
    errorEl.style.display = "block"
}


function openPopUp() {
    popup.classList.add("open-popup")
    setTimeout(() => {
        popup.classList.remove("open-popup")
    }, 2000);
}

function closeform() {
    document.getElementById("contact-form").style.display = "none"
}
