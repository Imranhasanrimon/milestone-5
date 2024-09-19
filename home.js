document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = Number(document.getElementById('input-add-money').value);
    const pin = document.getElementById('input-pin-number').value;

    if (pin === '1234') {
        const balance = Number(document.getElementById('balance').innerText);
        document.getElementById('balance').innerText = balance + amount;
        console.log('money added');
    } else {
        alert('failed to add money');
    }
})