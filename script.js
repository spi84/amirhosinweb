let cart = [];

function addToCart(id, name, price) {
    const existing = cart.find(item => item.id === id);
    if(existing){
        existing.quantity += 1;
    } else {
        cart.push({id, name, price, quantity: 1});
    }
    alert(name + " به سبد خرید اضافه شد!");
    updateCart();
}

function updateCart() {
    const container = document.getElementById("cart-container");
    if(!container) return;
    container.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        container.innerHTML += `
            <div class="cart-item">
                <img src="images/${item.id}.jpg" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>قیمت: ${item.price} تومان</p>
                    <label>تعداد: </label>
                    <input type="number" min="1" value="${item.quantity}" onchange="changeQuantity(${item.id}, this.value)">
                    <button onclick="removeItem(${item.id})">حذف</button>
                </div>
            </div>
        `;
    });
    container.innerHTML += `<h3>جمع کل: ${total} تومان</h3>`;
}

function changeQuantity(id, qty) {
    const item = cart.find(i => i.id === id);
    if(item){
        item.quantity = parseInt(qty);
        updateCart();
    }
}

function removeItem(id){
    cart = cart.filter(i => i.id !== id);
    updateCart();
}
