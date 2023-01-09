let localdata = JSON.parse(localStorage.getItem("products"));

localdata.map ((d, i) => {
    let obj = {
        id: d.id,
        Name:d.Name,
        Price:d.Price,
        Quantity:d.PriceQuantity,
        Picture:d.Picture
    }
    console.log(obj);
})



   