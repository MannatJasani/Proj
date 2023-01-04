let flag = 'false'

window.onload = dataLoad;

function dataLoad() {
    let localdata = JSON.parse(localStorage.getItem("products"));
    let row = "";
    row += "<table border= 2px solid black>";
    row += "<tr>";
    row = row + "<th>" + "Id" + "</th>";
    row = row + "<th>" + " Image" + "</th>";
    row = row + "<th>" + "Name" + "</th>";
    row = row + "<th>" + "Price" + "</th>";
    row = row + "<th>" + "Quantity" + "</th>";
    row = row + "<th>" + "Buttons" + "</th>";
    row += "</tr>";


    localdata.map((d, i) => {
        row += "<tr>";
        row += "<td>" + d.id;
        row += "</td>";
        row += "<td><img src= 'Images/" + d.Picture + "' width='170px' height= '170px' >";
        row += "</td>";
        row += "<td>" + d.Name;
        row += "</td>";
        row += "<td>" + d.Price;
        row += "</td>";
        row += "<td>" + d.PriceQuantity;
        row += "</td>";
        row += "<td><button onclick = 'editinput( " + d.id + " )' >Edit</button> <button onclick = 'del( " + d.id + " )'>Delete</button></td>"
        row += "</tr>";

    })
    row += "<table>";
    document.getElementById("demo").innerHTML = row;
}

function del(id) {
    let localdata = JSON.parse(localStorage.getItem("products"));

    localdata.map((d, i) => {

        if (d.id == id) {
            localdata.splice(i, 1);
        }
    })
    localStorage.setItem("products", JSON.stringify(localdata))
    dataLoad();
}

function editinput(id) {
    let localdata = JSON.parse(localStorage.getItem("products"));

    localdata.map((d, i) => {
        if (d.id == id) {
            let pi = document.getElementById("id").disabled = true;
            let pn = document.getElementById("productName").value = d.Name;
            let pp = document.getElementById("productPrice").value = d.Price;
            let pq = document.getElementById("productQuantity").value = d.PriceQuantity;
            let ps = document.getElementById("Pic").value = d.Picture;
        }

    })
    flag = 'true';
}


function cheak() {

}

function submit1() {
    if (flag === 'true') {
        submit3();
    } else {
        let pi = document.getElementById("id").value;
        let pn = document.getElementById("productName").value;
        let pp = document.getElementById("productPrice").value;
        let pq = document.getElementById("productQuantity").value;
        let ps = document.getElementById("Pic").value;
        let obj = {
            id: pi,
            Name: pn,
            Price: pp,
            PriceQuantity: pq,
            Picture: ps
        }

        let localdata = JSON.parse(localStorage.getItem("products"));
        if (localdata !== null) {
            localdata.push(obj);
            localStorage.setItem("products", JSON.stringify(localdata));
        } else {
            localStorage.setItem("products", JSON.stringify([obj]));
        }

    }


}
function submit3() {
    let localdata = JSON.parse(localStorage.getItem("products"));
    let upi = document.getElementById("id").value;
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
 