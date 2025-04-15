let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} added to cart!`);
}

function showCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    
    cartItems.innerHTML = ''; // Clear previous items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                ${item.name} - ${item.price} 
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(itemElement);
        });
    }
    
    modal.style.display = 'flex';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    showCart(); // Refresh cart display
}

function checkout() {
    alert('Proceed to checkout!');
    // Implement checkout functionality here
}

// Close modal if clicked outside the modal-content
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        closeCart();
    }
}
