document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = Number(document.getElementById('input-add-money').value);
    const pin = document.getElementById('input-pin-number').value;

    if (pin === '1234') {
        const balance = Number(document.getElementById('balance').innerText);
        document.getElementById('balance').innerText = balance + amount;
    } else {
        alert('failed to add money');
    }
})


//this is for cash out
document.getElementById('btn-cashOut').addEventListener('click', function (event) {
    event.preventDefault();
    const amountCashOut = parseFloat(document.getElementById('input-cashout').value);
    const currenBalance = parseFloat(document.getElementById('balance').innerText);
    if (document.getElementById('input-pin-cashout').value === '1234') {
        document.getElementById('balance').innerText = currenBalance - amountCashOut;

    } else {
        alert('wrong password')
    }
    console.log(amountCashOut, currenBalance);
})