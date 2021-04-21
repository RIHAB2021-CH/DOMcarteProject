document.addEventListener('DOMContentLoaded', function() {
    Sum()
}, false);
//btn remove
var removeCartItemButtons=document.getElementsByClassName('delete-btn')
console.log(removeCartItemButtons)
for(var i=0;i<removeCartItemButtons.length;i++){
    var button=removeCartItemButtons[i]
    button.addEventListener('click',removeCartItem)
    
}

function removeCartItem(event){
    var buttonClicked= event.target
    buttonClicked.parentElement.parentElement.remove()
Sum()
}

//btn plus

let btnPlus=Array.from(document.querySelectorAll('.plus-btn'))

console.log(btnPlus)

for(let plus of btnPlus){
   plus.addEventListener('click',function(){
    let num= parseInt((plus.nextElementSibling.innerHTML));
    num++
    if(num>100){
        plus.nextElementSibling.innerHTML="100";
    }
    else{
        plus.nextElementSibling.innerHTML= num;
    }
    
  Sum()
  })
  
}
//btn minus

let btnMin=Array.from(document.querySelectorAll('.minus-btn'))

console.log(btnMin)

for(let min of btnMin){
   min.addEventListener('click',function(){
    let num= parseInt((min.previousElementSibling.innerHTML)[0]);
    num--
    if(num <0){
        min.previousElementSibling.innerHTML="0";
    }
    else{
        min.previousElementSibling.innerHTML= num;
    }
    
  Sum()
  })

}
//like-heart
let hearts=document.getElementsByClassName('fa-heart')
console.log(hearts)
for(let heart of hearts){
heart.addEventListener('click',function(){

        heart.classList.toggle('myClass')
    

})
}
//Total-cart
function Sum(){
let qtt=Array.from(document.querySelectorAll('.quantity_input'))

let price=Array.from(document.querySelectorAll('.total-price'))
let s=0;
for (let i=0;i<qtt.length;i++){
   s+=(parseInt(qtt[i].innerHTML)*parseInt(price[i].innerHTML));

}
let V=s.toString()

return (document.getElementById('total-cart').innerHTML ='Prix Totale: '+V+' TND');
}
//submit-button


