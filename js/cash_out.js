document.getElementById('withdraw_money_btn')
    .addEventListener('click', function (event) {
        // Prevent loading in form.
        event.preventDefault();

        const pin = document.getElementById('cash_out_pin_number_field').value;

        // Pin verification.
        if (pin === '123') {
            
            // Get main balance.
            const mainBalance = document.getElementById('main_balance_amount').innerText;
            const mainBalanceNumber = parseFloat(mainBalance);

            // Get cash out amount.
            const cashOut = document.getElementById('amount_to_withdraw').value;
            const cashOutNumber = parseFloat(cashOut);

            // Main balance after cash out.
            const afterCashOutBalance = mainBalanceNumber - cashOutNumber;
            document.getElementById('main_balance_amount').innerText = afterCashOutBalance;
        
        }

        else {
            alert('Please try again later.');
        }

    })