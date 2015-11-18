$("#backBtn").click(function(){
    $("#content_wrapper").removeClass("fadeInLeft");
    $("#content_wrapper").addClass("fadeOutRight");
    setTimeout(function(){
        $("#wrapper").load('yatru.html');
    }, 400);
});