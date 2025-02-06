let shop_arr = [
    {
        "id": 0,
        "prod_title": "chair1",
        "price": 35,
        "image": "./images/product-1.png",
        'quantity': 1
    },
    {
        "id": 1,
        "prod_title": "chair2",
        "price": 45,
        "image": "./images/product-2.png",
         'quantity': 1
    },
    {
        "id": 2,
        "prod_title": "chair3",
        "price": 55,
        "image": "./images/product-3.png",
         'quantity': 1
    },
    {
        "id": 3,
        "prod_title": "chair4",
        "price": 75,
        "image": "./images/product-1.png",
         'quantity': 1
    },
    {
        "id": 4,
        "prod_title": "chair5",
        "price": 95,
        "image": "./images/product-2.png",
         'quantity': 1
    },
    {
     "id": 5,
        "prod_title": "chair6",
        "price": 15,
        "image": "./images/product-3.png",
        'quantity': 1
        
    },
    {
       "id": 6,
        "prod_title": "chair7",
        "price": 25,
        "image": "./images/product-1.png",
         'quantity': 1
    },
    {
        "id": 7,
        "prod_title": "chair8",
        "price": 35,
        "image": "./images/product-2.png",
         'quantity': 1
    }
]


// console.log(shop_arr);

let shop_data = document.getElementById('shopData');
// console.log(shop_data);
shop_data.innerHTML = "" ;

shop_arr.forEach(item => {
    let shopContent =  ` <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="${item.image}" class="img-fluid product-thumbnail">
							<h3 class="product-title">${item.prod_title}</h3>
							<strong class="product-price">$${item.price}</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid" onclick="addToCart(${item.id})">
							</span>
						</a>
					</div>` 

   shop_data.innerHTML +=  shopContent;
   console.log(shopContent);

});


    function addToCart(id)
    {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(shop_arr[id]);
        console.log(cart);
        
        localStorage.setItem('cart', JSON.stringify(cart));
        // console.log(cart);

        incrementQuantity()
    }

// increase quantity in badge

let value = 0;
function incrementQuantity() {
    let badgeValue = document.getElementById('badgeValue');
    value++;

    badgeValue.textContent = value;
    console.log(badgeValue);
}
