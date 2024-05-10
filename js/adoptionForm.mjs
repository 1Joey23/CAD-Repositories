
//store the successful submit banner
var adoptionFormSubmitSuccessAlert = document.getElementById('adoptionFormSubmitSuccessAlert');

//When the adoption form is submitted
$("#adoptionForm").on("submit", function returnToHome(event)
{
    //prevent the page from refreshing
    event.preventDefault();

    //Close the modal pop-up
    $('#adoptionModal').modal('hide');
    if(adoptionFormSubmitSuccessAlert.classList.contains("hidden"))
    {
        adoptionFormSubmitSuccessAlert.classList.remove("hidden")

        adoptionFormSubmitSuccessAlert.classList.add("active");
    }

    //have the window fade out the banner after 3 seconds
    setTimeout(function()
    {
        //fade out the banner by making it no longer active
        if(adoptionFormSubmitSuccessAlert.classList.contains("active"))
        {
            adoptionFormSubmitSuccessAlert.classList.remove("active");
            adoptionFormSubmitSuccessAlert.classList.add("hidden");
        }
    }, "3000");

});