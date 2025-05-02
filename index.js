

//1st parrt



var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },


});

//swiper-slide
var swiper = new Swiper(".luxury-container", {

  spaceBetween:20,
  //loop:true,

 freeMode: true,

 //speed:1000,

 // pagination: {
  //  el: ".swiper-pagination",
   // clickable: true,
 // },
  //centeredSlides:true,


  breakpoints: {
    0: {
      slidesPerView:0,
      
    },
    568: {
      slidesPerView: 3,
      
    },
    768: {
      slidesPerView: 4,
    
    },
    968: {
      slidesPerView:5,
      
    },
   
  },
  keyboard:true,
 // mousewheel:true,





  //navigation: {
    //nextEl: ".swiper-button-next",
   // prevEl: ".swiper-button-prev",
 // },

});


let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');
if(bar){

  bar.addEventListener('click',() => {
    nav.classList.add('active');
  });
}

if(close){
  close.addEventListener('click',() => {
  
  nav.classList.remove('active');

  });
 
};

let bag = document.getElementById('bag');
let cartbag = document.getElementsByClassName('cart1')[0];
let closebar = document.getElementById('close-cart');


bag.onclick = function() {
  cartbag.classList.add("active");

}
closebar.onclick = function() {
  cartbag.classList.remove("active");

};






//2nd

//cart working
if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded",ready);
}
else{
    ready();
  }


  function ready(){
   
 


   
   

 }

  // button working
  document.getElementsByClassName('btn-buy')[0].addEventListener('click',buyButtonClicked);

 
  function buyButtonClicked()
  {
    alert("your order is placed")
    var cartContent = document.getElementsByClassName('cart-content')[0]
  while(cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild)
  }
  updatetotal();
}
  

    

 

   
  
 
  




     // quantity chnage
     var quantityInputs = document.getElementsByClassName("cart-quantity");
     for(var i =0; i< quantityInputs.length;i++ ){
       var input = quantityInputs[i];
       input.addEventListener("change",quantityChanged);
     }

 
     function quantityChanged(event){
      var input = event.target;
      if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
      }
     updatetotal();
    }




  //remove item

  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons)
   for(var i =0; i<removeCartButtons.length;i++ ){
     var button =  removeCartButtons[i]
     button.addEventListener("click", removeCartItem)
   }


    // function remove and delete
       function removeCartItem(event){
       var buttonClicked = event.target.parentElement;
        buttonClicked.remove();
        updatetotal();

    }
  

 








  
  
  


   // addto cart
   var addCart = document.getElementsByClassName('cart')
   for(var i=0; i<addCart.length; i++){
     var button = addCart[i];
     button.addEventListener("click",addCartClicked);
   }



  //add to cart

  function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
                   
    var tittle = shopProducts.getElementsByClassName("product-tittle")[0].innerText;
    //var tittle1 = shopProducts.getElementsByClassName("product-tittle1")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("pro-img")[0].src;
    

    addProductToCart(tittle, price, productImg);
     updatetotal();
   
  }



  function  addProductToCart(tittle, price,productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    //cart product tittle to check repeated product
    var cartItemsNames = document.getElementsByClassName('cart-product-tittle');
    for(var i=0; i<cartItemsNames.length; i++){
      if(cartItemsNames[i].innerText == tittle ){
        alert("already added to cart");
        return;

      }
    }



    var cartBoxContent = ` 
                          <div><img src="${productImg}" alt="" class="cart-img"> </div>
                <div class="details-box">

              <div class="cart-product-tittle">
               ${tittle}
              </div>
              <div class="cart-price">${price}</div>
             <input type="number" value="1" class="cart-quantity">

              </div>
            <i class='bx bxs-trash-alt cart-remove'></i>
               
                         
                           `;
    
                          


         cartShopBox.innerHTML = cartBoxContent;
          cartItems.append(cartShopBox);
       cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener('click', removeCartItem);
      cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener('change', quantityChanged);



  }
      
   
    
                       

   

 




  

  


   //update total
   function updatetotal(){
    var cartContent = document.getElementById("cart-content");
    var cartBoxes = document.getElementsByClassName("cart-box");
    var total = 0;
    for(var i =0; i< cartBoxes.length;i++ ){
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];// ek hi class hai to [0] lag ajyega last me
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      var price = parseFloat(priceElement.innerText.replace("$",""));
      var quantity = quantityElement.value;
      total = total + price * quantity;
    }
      total = Math.round(total * 100) / 100;

      document.getElementsByClassName("total-price")[0].innerText = "$" + total;

    
  }















