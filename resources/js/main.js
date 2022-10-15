$(document).ready(function(){
    // Sticky Menu
    $(".js--services-section").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    })

    // MIX IT UP ( portfolio-section)
    var mixer=mixitup('.portfolio-details');
})