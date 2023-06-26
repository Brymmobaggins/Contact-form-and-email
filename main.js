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

// listen for from form submit\
document.getElementById("contact-form").addEventListener("submit",submitForm)

function submitForm(e){
    e.preventDefault();
    showSuccess()

}
// function to get form values

// function getInputValue(id){
//     return document.getElementById(id).value
// }

function showSuccess(){
    // alert('Message Sent')
    

}
