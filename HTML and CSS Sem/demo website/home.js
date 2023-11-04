const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// JavaScript functions for handling cart and buy now actions (same as before)
let cart = [];

function addToCart(productId, productName, productImage, productPrice) {
    cart.push({ id: productId, name: productName, image: productImage, price: productPrice });
    updateCartDisplay();
    alert("Item added to cart!");
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Clear previous cart content

    cart.forEach((item) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;

        const name = document.createElement("p");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = "Price: $" + item.price;

        cartItemDiv.appendChild(image);
        cartItemDiv.appendChild(name);
        cartItemDiv.appendChild(price);

        cartItems.appendChild(cartItemDiv);
    });
}

function buyNow(productId) {
    // Your buy now functionality here
    // Collect information such as name, address, etc.
    let name = prompt("Enter your name:");
    let address = prompt("Enter your address:");

    // Display a thank you message (same as before)
    let product = cart.find((item) => item.id === productId);
    if (product) {
        let message = `Thank you for purchasing ${product.name}!\n\n`;
        message += `Name: ${name}\nAddress: ${address}`;
        alert(message);
    }
}
