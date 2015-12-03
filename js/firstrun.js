var clickCount = 0;
$("#max").click(function(){
    setTimeout(function(){
        $("#wrapper").load("carousel.html");
    }, 200);
});
$("#magix").click(function(){
    if(clickCount == 6){
        $("#magix").addClass("animated slideOutRight");
        setTimeout(function(){
            $("#magix").html(app.buildName + " "+ app.version);
            $("#magix").removeClass("slideOutRight");
            $("#magix").addClass("slideInLeft");
        }, 1000);
    }
    else{
        clickCount += 1;
    }
});