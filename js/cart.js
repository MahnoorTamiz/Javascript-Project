let cartDiv = document.getElementById('cartDiv');
console.log(cartDiv);

let getData = JSON.parse(localStorage.getItem('cart')) || [];
console.log(getData);

let checkoutData = document.getElementById('checkoutData');

let total_price = 0;

getData.forEach(item => {

  total_price = (item.price * item.quantity);
    let cartContent =  ` 
    <tr id="row-${item.id}">
    <td class="product-thumbnail">
                              <img src=${item.image} alt="Image" class="img-fluid">
                            </td>
                            <td class="product-name">
                              <h2 class="h5 text-black">${item.prod_title}</h2>
                            </td>
                            <td>$${item.price * item.quantity}</td>
                            <td>
  
                             <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                                <div class="input-group-prepend">
                                  <button class="btn btn-outline-black decrease" type="button" onclick="changeQuantity(${item.id}, -1)">&minus;</button>
                                </div>
                                <input type="text" id="contentField" class="form-control text-center quantity-amount" value='${item.quantity}' placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                <div class="input-group-append">
                                  <button class="btn btn-outline-black increase" type="button" onclick="changeQuantity(${item.id}, 1)">&plus;</button>
                                </div>
                              </div>
                                </td>
                            <td>$${item.price * item.quantity}</td>
                            <td><a class="btn btn-black btn-sm" onclick="deleteItem(${item.id})">X</a></td>
                          </tr>
                        
          `
          cartDiv.innerHTML += cartContent;
          // console.log(cartContent);
  });


  checkoutData.innerHTML = `
  <div class="row">
                        <div class="col-md-12 text-right border-bottom mb-5">
                          <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <span class="text-black">Subtotal</span>
                        </div>
                        <div class="col-md-6 text-right">
                          <strong class="text-black">$230.00</strong>
                        </div>
                      </div>
                      <div class="row mb-5">
                        <div class="col-md-6">
                          <span class="text-black">Total</span>
                        </div>
                        <div class="col-md-6 text-right">
                          <strong class="text-black">$${total_price.toFixed(2)}</strong>
                        </div>
                      </div>
        
                      <div class="row">
                        <div class="col-md-12">
                          <button class="btn btn-black btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                        </div>
                      </div>
  `

function deleteItem(id) {
  let getData = JSON.parse(localStorage.getItem('cart')) || [];
  let updatedData = getData.filter(item => item.id !== id);
  console.log(updatedData);

  localStorage.setItem('cart', JSON.stringify(updatedData));
  location.reload();
}

function changeQuantity(id,change) 
{
  
  let getData = JSON.parse(localStorage.getItem('cart')) || [];
  // console.log(getData);

  let item = getData.find(item => item.id === id)
    if(item)
    {
      item.quantity += change;

      // if(item.quantity <= 0)
      // {
      //   let getItem = getData.filter(item => item.id !== id);
      //  let row = document.getElementById('row-${id}');

      //  if(row)
      //  {
      //   row.remove();
      //  }
      
      // }
    }
  
  localStorage.setItem('cart', JSON.stringify(getData));

  location.reload();
  }

  


























// function quantityChange(id,change)
// {
//   let quantityInput = document.getElementById('quantityInput');
//   let getData = JSON.parse(localStorage.getItem('cart')) || [];
//   let item = getData.find(item => item.id === id);

//   if(item){
//     item.quantity += change;
//   }

//   localStorage.setItem('cart', JSON.stringify(getData));
// }
































// access the product using id then display data

// let disp_cart = JSON.parse(localStorage.getItem('shopping_cart')) || [] ;

// console.log(JSON.parse(localStorage.getItem('shopping_cart')));

    // let cart = document.getElementById('cart');
    // let display_data =  disp_cart.map(item => 
    //     ` <td class="product-thumbnail">
    //                         <img src="${item.image}" alt="Image" class="img-fluid">
    //                       </td>
    //                       <td class="product-name">
    //                         <h2 class="h5 text-black">${item.prod_title}</h2>
    //                       </td>
    //                       <td>${item.price}</td>
    //                       <td>
    //                         <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
    //                           <div class="input-group-prepend">
    //                             <button class="btn btn-outline-black decrease" type="button">&minus;</button>
    //                           </div>
    //                           <input type="text" class="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
    //                           <div class="input-group-append">
    //                             <button class="btn btn-outline-black increase" type="button">&plus;</button>
    //                           </div>
    //                         </div>
        
    //                       </td>
    //                       <td>$49.00</td>
    //                       <td><a href="#" class="btn btn-black btn-sm">X</a></td>`

    // ).join('');

    // cart.innerHTML = display_data;

    // console.log(disp_cart);
