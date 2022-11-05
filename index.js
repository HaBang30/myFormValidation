document.getElementById("submit").addEventListener('click', function(event) {
    event.preventDefault();
    checkBox();
});

var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

function checkBox() {
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();


    if (usernameValue == '') {
        setError(username, "Username can't be blank.");
    } else {
        setSuccess(username);
    }

    if (emailValue == "") {
        setError(email, "Email can't be blank.");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Email isn't valid" )
    } else {
        setSuccess(email);
    }

    if (passwordValue == "") {
        setError(password, "Password can't be blank.");
    } else if (passwordValue < 8) {
        setError (password, "Password must be at least character.");
    }else {
        setSuccess(password);
    }

    if (password2Value == "") {
        setError(password2, "Password2 can't be blank.");
    } else if (password2Value !== passwordValue) {
        setError (password2, "Password2 the same password1");
    }else {
        setSuccess(password2);
    }
    
}

function isValidEmail(e){
    var reg =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(e);
}

function setError(u, msg) {
    var parentBox = u.parentElement;
    parentBox.className ="input-field error";
    var span = parentBox.querySelector('span');
    span.innerText = msg;
    var fa = parentBox.querySelector('.fa');
    fa.className = "fa fa-exclamation-circle";
}

function setSuccess(u) {
    var parentBox = u.parentElement;
    parentBox.className ="input-field success";
    var fa = parentBox.querySelector('.fa');
    fa.className = "fa fa-check-circle";
}