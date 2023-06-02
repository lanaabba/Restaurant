'user strict';

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


Restaurant.prototype.render=function(){
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
    // render.appendChild(id);
    // render.appendChild(fname);
    // render.appendChild(type);
    // render.appendChild(price);




};






    // let divRes=document.getElementById("div");
    // divRes.classList.add("card")
    // render.appendChild(divRes);

    // let RestName=document.createElement("h3");
    // RestName.textContent=this.FoodName;
    // divRes.appendChild(RestName);

    // let Type=document.createElement("h3");
    // Type.textContent=this.Type;
    // divRes.appendChild(Type);

    // let table=document.createElement('table');
    // render.appendChild(table);

 
    function handle(e){
        e.preventDefault();
        let FoodName=e.target.Name.value;
        let Type=e.target.Type.value;
        let Price=e.target.price.value;
    
    
        let food =new Restaurant (FoodName,Type,Price)
    
        
        food.render();
    

    
    }
    let saveValues=document.getElementById('form');
    saveValues.addEventListener('submit',handle)
    



