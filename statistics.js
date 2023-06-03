'use strict'
function Restaurant(Name,Type,price)
{
    this.FoodName=Name;
    this.Type=Type;
    this.Price=price;
    this.foodId=foodId();
}

function foodId() {
    let ID= Math.floor(Math.random() * 9000) + 1000;
    return ID;

}
// function gRandom (min,max){
//     return Math.floor(Math.random()*(max-min+1) +min);
// };
function readFromLocalStorage()
{
    let jsonArray=window.localStorage.getItem("Restaurant");
    let objArray=JSON.parse(jsonArray);
    console.log( "Array after read from LS befor ")
    for (let i = 0; i < objArray.length; i++)


{
    let render =document.getElementById('tbody');
    let row = document.createElement("tr");
    let id = document.createElement("td");
    id.textContent =this.foodId;
    row.appendChild(id);
    let fname = document.createElement("td");
    fname.textContent = this.FoodName;
    row.appendChild(fname);
    let type = document.createElement("td");
    type.textContent = this.Type;
    row.appendChild(type);
    let price = document.createElement("td");
    price.textContent = `${this.Price }  JD`;

    row.appendChild(price);
    render.appendChild(row);
}
};
readFromLocalStorage();
