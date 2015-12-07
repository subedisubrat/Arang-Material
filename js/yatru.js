$(document).ready(function(){
$("#content_holder").load("listBuses.html");
$('ul.tabs').tabs();
var tot = window.innerHeight;
var n = tot - 220;
n = n + "px";
$("#content_holder").css({"height":n});
});

$("#settingBtn").click(function(){
    $("#modalBackLays").fadeIn();
    $("#overlay_screen").show();
    $("#overlay_screen").load("settings.html");
});