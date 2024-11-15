document.getElementById('myform').addEventListener('submit',function(event) {
    event.preventDefault();
    const first = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    if (!first || !email) {
        alert("You should fill out username and email");
        return;
    }
    if (!age || age < 18) {
        alert('You must be 18 years or older to submit this form')
    }

    const formData = {
        username: first,
        email: email,
        password: document.getElementById('password').value,

    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset-UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const responce = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = responce.message;
            document.getElementById('myForm').innerHTML ="";
        } else if (xhr.readyState === 4) {
            alert('Error sumitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    alert("I should happen last, right?")
    config.log(formData);
});