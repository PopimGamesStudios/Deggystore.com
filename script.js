function addToCart() {
    const size = document.getElementById("size").value;

    if (!size) {
        alert("בחר מידה!");
        return;
    }

    const product = {
        name: "חולצת אוברסייז עם כתב יד",
        price: 50,
        size: size
    };

    localStorage.setItem("cart", JSON.stringify(product));
    alert("נוסף לסל!");
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
        document.getElementById("cart-container").innerHTML = "<p>הסל ריק</p>";
        return;
    }

    document.getElementById("cart-container").innerHTML = `
        <h2>${cart.name}</h2>
        <p>מידה: ${cart.size}</p>
        <p>מחיר: ₪${cart.price}</p>
        <button onclick="window.location.href='checkout.html'">
            אישור קנייה והמשך לתשלום
        </button>
    `;
}

function completePurchase(event) {
    event.preventDefault();
    localStorage.removeItem("cart");
    window.location.href = "thankyou.html";
}
