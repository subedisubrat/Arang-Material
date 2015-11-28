$("#max").click(function(){
    setTimeout(function(){
        $("#wrapper").load("carousel.html");
    }, 200);
});
if(!navigator.onLine){/*
    $("#modalBackLays").fadeIn();
    $("#modal_noclose_err").show();*/
}