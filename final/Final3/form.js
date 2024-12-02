document.getElementById('myform').addEventListener('submit',function(event) {
    event.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const id = document.getElementById('id').value;
    const age = document.getElementById('age').value;
    if (!name || !email || !id) {
        alert("You should fill out username, email, and ID");
        return;
    }
    if (isNaN(age) || age < 18 || age > 29 ) {
        alert("You should be between 18 - 29 years old");
        return;
    }

    const formData = {
        username: name,
        email: email,
        age: age,

    }

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myform').innerHTML ="";
        } else if (xhr.readyState === 4) {
            alert('Error sumitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    
});