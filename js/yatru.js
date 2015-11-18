$(".button-collapse").sideNav();
$("#sidenav-overlay").remove();
$(".button-collapse").click(function(){
    $("#sidenav-overlay").remove();
});
$("#content_holder").load("listBuses.html");
$('ul.tabs').tabs();
var tot = window.innerHeight;
var n = tot - 220;
n = n + "px";
$("#content_holder").css({"height":n});

$("#settingBtn").click(function(){
    $("#content_wrapper").addClass("animated fadeOut");
    setTimeout(function(){
        $("#wrapper").load('settings.html');
    }, 400);
});