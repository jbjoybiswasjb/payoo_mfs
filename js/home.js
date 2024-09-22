document.getElementById('latest_payment_section').classList.remove('hidden');

document.getElementById('add_money_section').classList.add('hidden');
document.getElementById('cash_out_section').classList.add('hidden');
document.getElementById('transfer_money_section').classList.add('hidden');
document.getElementById('get_bonus_section').classList.add('hidden');
document.getElementById('pay_bill_section').classList.add('hidden');
document.getElementById('transactions_history_section').classList.add('hidden');

    // Log out.
document.getElementById('log_out_button')
    .addEventListener('click', function(){

        // Go to log in page or index page.
        window.location.href = "/index.html";
    })