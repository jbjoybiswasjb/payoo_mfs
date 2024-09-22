// Add money.
document.getElementById('add_money_btn')
    .addEventListener('click', function(){
        document.getElementById('latest_payment_section').classList.add('hidden');

        document.getElementById('add_money_section').classList.remove('hidden');

        document.getElementById('cash_out_section').classList.add('hidden');
        document.getElementById('transfer_money_section').classList.add('hidden');
        document.getElementById('get_bonus_section').classList.add('hidden');
        document.getElementById('pay_bill_section').classList.add('hidden');
        document.getElementById('transactions_history_section').classList.add('hidden');
    })

// Cash out.
document.getElementById('cash_out_btn')
    .addEventListener('click', function(){
        document.getElementById('latest_payment_section').classList.add('hidden');
        document.getElementById('add_money_section').classList.add('hidden');

        document.getElementById('cash_out_section').classList.remove('hidden');
        
        document.getElementById('transfer_money_section').classList.add('hidden');
        document.getElementById('get_bonus_section').classList.add('hidden');
        document.getElementById('pay_bill_section').classList.add('hidden');
        document.getElementById('transactions_history_section').classList.add('hidden');
    })

// Transfer money.
document.getElementById('transfer_money_btn')
    .addEventListener('click', function(){
        document.getElementById('latest_payment_section').classList.add('hidden');
        document.getElementById('add_money_section').classList.add('hidden');
        document.getElementById('cash_out_section').classList.add('hidden');

        document.getElementById('transfer_money_section').classList.remove('hidden');

        document.getElementById('get_bonus_section').classList.add('hidden');        
        document.getElementById('pay_bill_section').classList.add('hidden');
        document.getElementById('transactions_history_section').classList.add('hidden');
    })

// Get bonus.
document.getElementById('get_bonus_btn')
    .addEventListener('click', function(){
        document.getElementById('latest_payment_section').classList.add('hidden');
        document.getElementById('add_money_section').classList.add('hidden');
        document.getElementById('cash_out_section').classList.add('hidden');
        document.getElementById('transfer_money_section').classList.add('hidden');

        document.getElementById('get_bonus_section').classList.remove('hidden');
        
        document.getElementById('pay_bill_section').classList.add('hidden');
        document.getElementById('transactions_history_section').classList.add('hidden');
    })

// Pay bill.
document.getElementById('pay_bill_btn')
    .addEventListener('click', function(){
        document.getElementById('latest_payment_section').classList.add('hidden');
        document.getElementById('add_money_section').classList.add('hidden');
        document.getElementById('cash_out_section').classList.add('hidden');
        document.getElementById('transfer_money_section').classList.add('hidden');
        document.getElementById('get_bonus_section').classList.add('hidden');

        document.getElementById('pay_bill_section').classList.remove('hidden');
        
        document.getElementById('transactions_history_section').classList.add('hidden');
    })
    
// Transaction History.
document.getElementById('transactions_btn')
    .addEventListener('click', function(){
        document.getElementById('latest_payment_section').classList.add('hidden');
        document.getElementById('add_money_section').classList.add('hidden');
        document.getElementById('cash_out_section').classList.add('hidden');
        document.getElementById('transfer_money_section').classList.add('hidden');
        document.getElementById('get_bonus_section').classList.add('hidden');
        document.getElementById('pay_bill_section').classList.add('hidden');

        document.getElementById('transactions_history_section').classList.remove('hidden');
    })