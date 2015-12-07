$("#continue").click(function(){
    $("#content_wrapper").addClass("animated zoomOut");
    setTimeout(function(){
        if(app.user.type == 0){
            $("#wrapper").load("yatru.html");
        }
        else{
            $("#wrapper").load("driver.html");
        }
    }, 400);
});