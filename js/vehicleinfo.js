var current = 0;
$("#nextCarousel").click(function(){
    if(current == 0 && $("#perLocVal").val()){
        $("#perLoc").slideUp();
        $("#desLoc").slideDown();
        $("#nextCarousel").css({"transform":"rotate(90deg);"});
        $(".hero .dot:nth-child(1)").css({"background":"none"});
        $(".hero .dot:nth-child(2)").css({"background":"grey"});
        $("#nextCarousel").attr({"src":"img/checked-24.png"});
        current = 1;
    }
    else{
        //Validate
    }
});
$("#closeModal").click(function(){
    $("#modalBackLays").fadeOut();
})