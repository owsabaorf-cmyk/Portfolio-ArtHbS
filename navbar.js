fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#navbar-container").innerHTML = data;
    })
    .catch(error => console.error("Không thể tải navbar:", error));
