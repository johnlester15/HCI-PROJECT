window.onload = function() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-items');
    let totalItemsElement = document.getElementById('total-items');
    let totalPesoElement = document.getElementById('total-peso');
    let totalItems = 0;
    let totalPeso = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>No item</p>";
    } else {
        cartItems.forEach(function(item, index) {
            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})"><i class="fas fa-eraser"></i> Remove</button>
            `;
            cartContainer.appendChild(cartItem);
            totalItems++;
            totalPeso += parseInt(item.price.replace('₱', '').replace(',', ''));
        });
    }

    totalItemsElement.textContent = `Total Items: ${totalItems}`;
    totalPesoElement.textContent = `Total Peso: ₱${totalPeso.toLocaleString()}`;

    // Function to display the message when the "Place Order" button is clicked
    document.getElementById('place-order-btn').addEventListener('click', function() {
        // Display message container
        document.getElementById('message-container').style.display = 'block';
        // Add class to body to hide scrollbar
        document.body.classList.add('modal-open');
    });

    // Function to close the message container when the close button is clicked
    document.getElementById('close-btn').addEventListener('click', function() {
        // Hide message container
        document.getElementById('message-container').style.display = 'none';
        // Remove class from body to show scrollbar
        document.body.classList.remove('modal-open');
    });
};

function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    location.reload(); // Refresh the page to reflect the changes
}

// Add event listener to the "Remove All Items" button
document.getElementById('remove-all-btn').addEventListener('click', function() {
    // Clear the cart in localStorage
    localStorage.removeItem('cart');
    // Reload the page to reflect the changes
    location.reload();
});






