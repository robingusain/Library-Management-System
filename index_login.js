function func() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == 'Robin' && password == 'Robin@123') {
        window.location.assign("index.html");
    }
    else {
        alert("Invalid Usename or Password");
    }
}