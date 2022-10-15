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

function openNav(){
    document.getElementById("myNav").style.width="100%";   
    document.getElementById("myNav").style.display="block";   
    // document.getElementsByClassName("overlay").style.display="block";
    // document.getElementsByClassName("overlay").style.display="block";
    // console.log(1)
}

function closeNav(){
    document.getElementById("myNav").style.width="0%";
}