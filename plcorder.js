document.getElementById('place-order-btn').addEventListener('click', function() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        document.querySelector('.message-text').innerHTML = '<i class="fas fa-exclamation-circle"></i> Invalid! Cart is empty';
        document.getElementById('message-container').style.backgroundColor = 'red'; // Light red color
        document.getElementById('message-container').style.display = 'block';
        document.body.classList.add('modal-open');
    } else {
        localStorage.removeItem('cart');
        document.getElementById('cart-items').innerHTML = "<p>No item</p>";
        document.getElementById('total-items').textContent = 'Total Items: 0';
        document.getElementById('total-peso').textContent = 'Total Peso: ₱0';
        document.querySelector('.message-text').innerHTML = '<i class="fas fa-check-circle"></i> Your order has been placed. Thank you for choosing us!';
        document.getElementById('message-container').style.backgroundColor = '';
        document.getElementById('message-container').style.display = 'block';
        document.body.classList.add('modal-open');
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('message-container').style.display = 'none';
    document.body.classList.remove('modal-open');
});