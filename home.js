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
})

//this is to navigate cashout 
document.getElementById('cashout').addEventListener('click', function (event) {
    document.getElementById('toggle-cashout').classList.remove('hidden')
    document.getElementById('toggle-addmoney').classList.add('hidden')
    document.getElementById('cashout').classList.add('btn-primary')
    document.getElementById('addmoney').classList.remove('btn-primary')
})
//this is to navigate addmoney 
document.getElementById('addmoney').addEventListener('click', function (event) {
    document.getElementById('toggle-cashout').classList.add('hidden')
    document.getElementById('toggle-addmoney').classList.remove('hidden')
    document.getElementById('cashout').classList.remove('btn-primary')
    document.getElementById('addmoney').classList.add('btn-primary')
})
//this is to navigate home
document.getElementById('home-btn').addEventListener('click', function (event) {
    location.href = '/index.html'
})