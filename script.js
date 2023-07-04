import productList from "./product.js";



const newProductArray = productList.map((el) => el);
console.log(newProductArray);
newProductArray.forEach(item => {
    document.getElementById('itemList').innerHTML += (
      ` 
       <div class="card" style="width:200px;margin-bottom:5px;">
            <img class="card-img-top" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${item.name}</h4>
                <p class="card-text">Price: ${item.price}</p>
                <td><button class='btn btn-warning'  onclick="addItem('${item['id']}')">+ Add To Cart</button></td> 
            </div>
        </div>
        
      `
    );
   });




 
 


