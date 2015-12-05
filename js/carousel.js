$("#continue").click(function(){
    $("#content_wrapper").addClass("animated zoomOut");
    setTimeout(function(){
        $("#wrapper").load("setup.html");
    }, 400);
});