var clickCount = 0;
$("#max").click(function(){
    setTimeout(function(){
        $("#wrapper").load("carousel.html");
    }, 200);
});
$("#magix").click(function(){
    if(clickCount == 6){
        $("#magix").addClass("animated zoomOut");
        setTimeout(function(){
            $("#magix").html(app.buildName);
            $("#magix").removeClass("zoomOut");
            $("#magix").addClass("zoomIn");
        }, 1000);
    }
    else{
        clickCount += 1;
    }
});