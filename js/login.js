document.getElementById('login_button').addEventListener('click', function (event) {

    // Prevent reload page in form
    event.preventDefault();

    // Get mobile number.
    const mobileNumber = document.getElementById('mobile_number_field').value;
    console.log(mobileNumber);

})