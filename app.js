'user strict';
function foodId() {
    let ID= Math.floor(Math.random() * 9000) + 1000;
    return ID;

}

function Restaurant(ID,FoodName,Type,Price)
{
    this.foodId=ID;
    this.FoodName=Name;
    this.Type=Type;
    this.Price=Price;
}
// let render =document.getElementById('render');


 Restaurant.prototype.renderfood = function (){
let render =document.getElementById('render');

 let table=document.createElement('table');
 render.appendChild(table);

    let row = document.createElement("tr");
    let id = document.createElement("td");
    id.textContent = this.foodId;
    row.appendChild(id);
    let name = document.createElement("td");
    name.textContent = this.FoodName;
    row.appendChild(name);
    let type = document.createElement("td");
    type.textContent = this.Type;
    row.appendChild(type);
    let price = document.createElement("td");
    price.textContent = `${this.Price } $ JD`;
 }
 function handle(e){
    e.preventDefault();
    let FoodName=e.target.Name.value;
    let Type=e.target.Type.value;
    let Price=e.target.price.value;

    let food=new Restaurant (foodId(),FoodName,Type,Price)
    food.renderfood();

    food.foodId();
    food.renderfood();

    FoodName.value="";
    Type.value="";
    Price .value="";


}
let saveValues=document.getElementById('form');
saveValues.addEventListener('submit',handle);




