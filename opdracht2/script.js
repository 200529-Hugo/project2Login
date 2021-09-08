const form = document.getElementById('form');
const mail = document.getElementById('mail');
const pass = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const mailValue = mail.value.trim();
	const passValue = pass.value.trim();
    var x = 0;

    if (mailValue == '') {
        document.getElementById('mailError').innerHTML = "E-mail can't be nothing!"
    } else if (!isEmail(mailValue)){
        document.getElementById('mailError').innerHTML = "This is not a valid e-mail!"
    } else{
        document.getElementById('mailError').innerHTML = ""
        x++
    }

    if (passValue == '') {
        document.getElementById('passError').innerHTML = "Password can't be nothing!"
    } else{
        document.getElementById('passError').innerHTML = ""
        x++
    }

    if (x == '2'){
        document.getElementById("overlay").style.width = "100%";
    }
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
