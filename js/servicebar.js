document.addEventListener("DOMContentLoaded", function() {
        
    //Store the navbar HTML as a variable so we can inject it into the document automatically
    var navBarHTML = 
    `<!-- banner -->
    <div id="banner" class="banner d-flex justify-content-center align-items-center">
        <h1 class="display-4">Our Services</h1>
    </div>

    <style>
    #banner {
        background-image: url(../media/promo/dog_with_ball.png);
        height: 300px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    </style>

    <!--Secondary nav bar for services -->
    <nav class="navbar navbar-expand-lg" style="background-image: linear-gradient(to right, rgb(255,176,189), rgb(254,194,160));
    width:100%;
    ">
       <div class="container-fluid justify-content-between">

           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleServices" style="text-align: right;">
               <span class="navbar-toggler-icon"></span>
           </button>

           <div class="collapse navbar-collapse  justify-content-end" id="collapsibleServices">
               
               <ul class="navbar-nav mx-auto h4">

                    <li class="nav-item"> 
                        <a id="servicesNavItem" class="nav-link mx-5" href="../html/services.html">Our Services</a> 
                    </li>

                   <li class="nav-item"> 
                       <a id="cremationNavItem" class="nav-link mx-5" href="../html/cremation.html">Cremation</a> 
                   </li>

                   <li class="nav-item"> 
                       <a id="vaccinationNavItem" class="nav-link mx-5" href="#">Vaccination</a> 
                   </li>

                   <li class="nav-item"> 
                       <a id="neuteringNavItem" class="nav-link mx-5" href="#">Neutering and Spaying</a> 
                   </li>

               </ul>
           </div>
       </div>
    </nav>`

     //Insert the navbar at the top of the page
    document.body.insertAdjacentHTML("afterbegin", navBarHTML);
});