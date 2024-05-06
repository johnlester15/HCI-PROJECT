function func() {
    var email = document.getElementById("Username").value;
    var pass = document.getElementById("Password").value;
    if ((email === "BSIT@gmail.com" && pass === "123") || (email === "John.defensor@hcdc.edu.ph" && pass === "123") || (email === "admin" && pass === "123")) {
        window.location.assign("index.html");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
