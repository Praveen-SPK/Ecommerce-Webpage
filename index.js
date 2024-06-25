cart=[];

function add(a,b){
    cart.push({a,b});
    put();

    function put(){
        let total=0;
        const cart_item=document.getElementById("cart-item");
        const cart_total=document.getElementById("cart-total");

        cart_item.innerHTML="";
        cart.forEach(element => {
            let list=document.createElement("li");
            list.innerHTML=(`${element.a}-${element.b}`);
            cart_item.appendChild(list);
            total=total+element.b;
        });
        cart_total.textContent=("Total Cost : $ " + Math.round(total));
    }
}