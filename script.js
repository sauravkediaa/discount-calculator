function calculate() {
    const MRP = parseFloat(document.getElementById('mrp').value);
    const discountPrice = parseFloat(document.getElementById('discountPrice').value);

    if (isNaN(MRP) || isNaN(discountPrice)) {
        alert("Please enter valid numbers for Buy and Sell prices.");
        return;
    }

    const discountPercent = ((discountPrice) / MRP) * 100;

        document.getElementById('result').innerHTML = `
            <p><b>Discount Percentage: </b> ${discountPercent.toFixed(2)}%</p>
        `;
    }

function resetForm() {
    document.getElementById('mrp').value = '';
    document.getElementById('discountPrice').value = '';
    document.getElementById('result').innerHTML = '';
}

function handleEnterKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent default action of Enter key
        calculate(); // Call calculate function
    }
    if (event.keyCode === 27) {
        event.preventDefault();
        resetForm(); // Call resetForm function
    }
}

// Event listeners for input fields
document.getElementById('mrp').addEventListener('keydown', handleEnterKeyPress);
document.getElementById('discountPrice').addEventListener('keydown', handleEnterKeyPress);
document.getElementById('calculateBtn').addEventListener('click', calculate);
document.getElementById('resetBtn').addEventListener('click', resetForm);