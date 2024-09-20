document.getElementById('login_button').addEventListener('click', function (event) {

    // Prevent reload page in form
    event.preventDefault();

    // Get mobile number.
    const mobileNumber = document.getElementById('mobile_number_field').value;

    // Get pin number.
    const pinNumber = document.getElementById('pin_number_field').value;
    console.log(mobileNumber, pinNumber);


    // Validate phone and pin number. This is not ideal way. It's a bad way.
    if (mobileNumber === '018' && pinNumber === '123') {
        console.log('log in');
    }
    else {
        alert('Wrong mobile number or pin. Please enter correct mobile number and pin');
    }

})