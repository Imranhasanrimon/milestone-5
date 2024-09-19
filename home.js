document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('input-add-money').value;
    const pin = document.getElementById('input-pin-number').value;
    console.log(amount, pin);
})