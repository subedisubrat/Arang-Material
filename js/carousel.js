$("#continue").click(function(){
    $("#content_wrapper").addClass("animated zoomOut");
    setTimeout(function(){
        app.route('setup.html');
    }, 400);
});
$("#exitbtn").click(function(){
    if(navigator.app){
        navigator.app.exitApp();
    }
    else{
        alert("Not in Cordova mode! :(");
    }
});