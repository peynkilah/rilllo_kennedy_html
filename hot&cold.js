function filterMenu(section) {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(sec => {
        if (section === 'all' || sec.classList.contains(section)) {
            sec.style.display = 'block';
        } else {
            sec.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const quantities = document.querySelectorAll('input.quantity');
    const button = document.getElementById('showMessageButton');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        let totalAmount = 0;
        let selectedItems = [];

        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                const quantity = quantities[index].value;
                if (quantity > 0) {
                    const itemName = checkbox.parentElement.querySelector('h2').textContent;
                    const itemPrice = parseFloat(checkbox.parentElement.querySelector('p:nth-of-type(2)').textContent);
                    const itemTotal = itemPrice * quantity;
                    totalAmount += itemTotal;
                    selectedItems.push(`${quantity} x ${itemName} ($${itemTotal.toFixed(2)})`);
                }
            }
        });

        if (selectedItems.length > 0) {
            message.innerHTML = 'Selected Items:<br>' + selectedItems.join('<br>') + '<br>Total Amount: $' + totalAmount.toFixed(2);
        } else {
            message.textContent = 'No items selected.';
        }
    });
});
