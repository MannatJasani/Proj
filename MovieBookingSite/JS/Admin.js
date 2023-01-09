window.onload = table;
let flag = false;

function table() {
    let localdata = JSON.parse(localStorage.getItem("movie"));
    let row = "";
    row += "<table border= 2px solid black>";
    row += "<tr>";
    row = row + "<th>" + " Image" + "</th>";
    row = row + "<th>" + "Name" + "</th>";
    row = row + "<th>" + "Price" + "</th>";
    row = row + "<th>" + "Quantity" + "</th>";
    row = row + "<th>" + "Buttons" + "</th>";
    row += "</tr>";


    localdata.map((d) => {
        row += "<tr>";
        row += "<td><img src= 'Images/" + d.Picture + "' width='170px' height= '170px' >";
        row += "</td>";
        row += "<td>" + d.Name;
        row += "</td>";
        row += "<td>" + d.Price;
        row += "</td>";
        row += "<td>" + d.Seats;
        row += "</td>";
        row += "<td><button onclick = 'edit( " + d.Id + " )' >Edit</button> <button onclick = 'del( " + d.Id + " )'>Delete</button></td>"
        row += "</tr>";


    })
    row += "<table>";
    document.getElementById("table").innerHTML = row;
}

function submit1() {
    if (flag == true) {
        edit1()
    } else {

    let id = Math.floor(Math.random()*1000);
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let seat = document.getElementById("seats").value
    let pic = document.getElementById("pic").value    

    let obj = {
        Id: id,
        Name: name,
        Price: price,
        Seats: seat,
        Picture: pic
    }
    let localdata = JSON.parse(localStorage.getItem("movie"))
    
    if (localdata !== null) {
        localdata.push(obj);
        localStorage.setItem("movie", JSON.stringify(localdata));
    } else {
        localStorage.setItem("movie", JSON.stringify([obj]));
    }
    }
}

function del(id) {
    let localdata = JSON.parse(localStorage.getItem("movie"));
    console.log(id);
    localdata.map((d, i) => {

        if (d.Id == id) {
            localdata.splice(i, 1);
        }
    })
    localStorage.setItem("movie", JSON.stringify(localdata))
    table();
}

function edit(id) {
    flag = true;
}

function edit1(params) {
    let localdata = JSON.parse(localStorage.getItem("products"));
    
    let upn = document.getElementById("productName").value;
    let upp = document.getElementById("productPrice").value;
    let upq = document.getElementById("productQuantity").value;
    let pic = document.getElementById("Pic").value;
    localdata.map((d, i) => {
        if (d.id == upi) {
            // arr.splice(i, 1);
            let obj = {
                id: upi,
                Name: upn,
                Price: upp,
                PriceQuantity: upq,
                Picture: pic
            }
            // arr.splice(i, 0, obj);
            localdata[i] = obj;

        }


    })
    localStorage.setItem("products", JSON.stringify(localdata));
}