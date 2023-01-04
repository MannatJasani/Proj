function ch() {
    let x = document.getElementById("email").value;
        let y = document.getElementById("pass").value;
        let localData = JSON.parse(localStorage.getItem("products"));
        let check = false;
        localData.map((d, i) => {
            if (d.email == x && d.password == y) {
                check = true;
            }

        })
        if (check == true) {
            alert('success');
            window.location = "Home.html"            

        } else {
            alert('invalid');

        }
        
}