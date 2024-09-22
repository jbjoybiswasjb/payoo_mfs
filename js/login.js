document.getElementById('login_button')
    .addEventListener('click', function (event) {

    // Prevent reload page in form
    event.preventDefault();

    // Get mobile number.
    const mobileNumber = document.getElementById('mobile_number_field').value;

    // Get pin number.
    const pinNumber = document.getElementById('pin_number_field').value;


    // Validate phone and pin number. This is not ideal way. It's a bad way.
    if (mobileNumber === '018' && pinNumber === '123') {

        // Go to homepage.
        window.location.href = "/home_page.html";
    }
    else {
        alert('Wrong mobile number or pin. Please enter correct mobile number and pin');
    }

})