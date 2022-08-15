var allProducts = document.querySelectorAll(".list button")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var flower = document.querySelector("#f")
var totalPrice =  0 ;

allProducts.forEach(function (item){
     item.onclick = function (){
        
        totalPrice +=  parseInt(item.getAttribute("price")) 
        content.innerHTML += flower.textContent + "  ";
        content.style.fontSize = "24px";
        if (content.innerHTML !="   "){
            btn.style.display = "block";
         }
     }
})
btn.onclick = function(){
    window.alert("The Total Price is : " + totalPrice +" $ ");
}