function formData() {
    let u = document.getElementById("userId").value;
    let i = document.getElementById("email").value;
    let n = document.getElementById("password").value;

    let obj = {
        userId : u,
        email : i,
        password : n,
    }

    let localData = JSON.parse(localStorage.getItem("products"));
    if (localData !== null) {
        localData.push(obj);
        localStorage.setItem("products", JSON.stringify(localData));
    } else {
        localStorage.setItem("products", JSON.stringify([obj]))
    }
}
