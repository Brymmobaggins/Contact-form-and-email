// firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDZDtsrIvrMB5Ek8tYLmpQZ3VbZkVmHp2Y",
    authDomain: "tutorial-5988c.firebaseapp.com",
    projectId: "tutorial-5988c",
    storageBucket: "tutorial-5988c.appspot.com",
    messagingSenderId: "1053997992028",
    appId: "1:1053997992028:web:5b3b6588e3a41cbfe73e99",
    measurementId: "G-NN4SZNCJZH"
};

//  intialized datbase
firebase.initializeApp(firebaseConfig)

// reference your database
let contactFormDB = firebase.database().ref("contactForm")


// listen for from form submit\
document.getElementById("contact-form").addEventListener("submit",submitForm)

function submitForm(e){
    e.preventDefault();

    // get value
    let name = getInputValue('name')
    let email = getInputValue('email')
    let message = getInputValue('message')
    
    console.log(name)
    console.log(email)
    console.log(message)
    
    // alert message

    
}
// function to get form values

function getInputValue(id){
    return document.getElementById(id).value
}

// save message to firebase
function saveMessage(name, company, email, phone,message){
    
}