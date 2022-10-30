/* Add your JavaScript to this file */


var form = document.getElementsByTagName("form");
var email = document.getElementById("email").value;
var message = document.getElementsByClassName("message");

var pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


function validation(){
    if (email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        message.innerHTML = "Thank you! Your email address has been added to our mailing list!";
        message.style.color = "#00ff00" ;
    }
    else{
        form.classList.remove("valid");
        form.classsList.add("invalid");
        message.innerHTML = "Please enter a valid email address";
        message.style.color = "ff0000";
    }
    if (email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        message.innerHTML = "";
        message.style.color = "#00ff00" ;
    }
}