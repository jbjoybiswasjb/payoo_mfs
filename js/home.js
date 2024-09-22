// Add money section.
document.getElementById('add_money_button')
    .addEventListener('click', function (event) {

        // prevent reading page in form.
        event.preventDefault();

        // Get pin number.
        const pinNumber = document.getElementById('pin_number_field').value;

        const amountToAddString = document.getElementById('amount_to_add').value;
        console.log(typeof amountToAddString);

        // Wrong way to valdate pin number.
        if (pinNumber === '123') {

            // Get main balance.
            const mainBalanceString = document.getElementById('main_balance_amount').innerText;
            const mainBalanceNumber = parseFloat(mainBalanceString);

            // Get amount to add.
            const amountToAddString = document.getElementById('amount_to_add').value;
            const amountToAddNumber = parseFloat(amountToAddString);


            const afterAddMoney = mainBalanceNumber + amountToAddNumber;

            document.getElementById('main_balance_amount').innerText = afterAddMoney;
        }

        else {
            alert('Failed to add money. Please try again later.');
            location.reload();
        }

    })