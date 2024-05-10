// Taken from the previous project on the career page.
$(document).ready(function() {
    // Validation which displays the bootstrap banner upon successful submission
    $(document).on("click", "#submit", function(event) {

        // Prevent the default form submission behavior until the user has completely filled out the form.
        event.preventDefault();
        
        // Check if all fields are completed
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var message = document.getElementById("message").value;

        // Grab the element to display the messages when validation fails.
        var resultWindow = document.getElementById("resultWindow");

        // Validation for Name field
        // if the name is empty, the name doesn't include a length of two with a space between, or non alphabetical letters are included, fail validation.
        if (name.trim() === '' || name.trim().split(' ').length !== 2 || !/^[a-zA-Z\s]*$/.test(name.trim())) {
            resultWindow.textContent = "*Please provide your first and last name separated by a space, using only alphabetical letters.";
            
            // Do not submit the form if validation fails
            return false;
        }        
        
        // Validation for the email.
        else if (email == '' ){//||
            resultWindow.textContent = "*Please complete your email";

            // Do not submit the form if validation fails
            return false;
        }

        // Validation for the phone number.
        else if (phoneNumber.length < 12 || !/^\d+(-\d+)*$/.test(phoneNumber)) {
            resultWindow.textContent = "*Please enter your phone number using numerical numbers only."
        }

        else if (message == ''){
            resultWindow.textContent = "*Please enter a message";

            // Do not submit the form if validation fails.
            return false;
        }
        
        else {
            // Submit the form if validation passes.
            $(".applicationForm").submit();

            // Hide the modal after submission
            $('#adoptionModal').modal('hide');
        }
    });

    // Grab the ol numbah
    var phoneNumberElement = document.getElementById("phoneNumber");

    // Add dashes in phone number form. https://codepen.io/alphaborel/pen/GxVGpR 
    phoneNumberElement.addEventListener("keyup", function(event){
        if (event.key !== "Backspace" && (phoneNumberElement.value.length === 3 || phoneNumberElement.value.length === 7)){
            phoneNumberElement.value += "-";
        }
    });
});