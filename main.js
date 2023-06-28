let popup = document.getElementById('popup')
const input = document.querySelector('input')
const form = document.getElementById('contact-form')

form.addEventListener("submit", function (e) {
    e.preventDefault() // prevent submission
    // openPopUp()
    inputValue()
    // closeform()
})

function inputValue(phonenumber, message) {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value

    if (!name || !email) {
        return false

    }
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
