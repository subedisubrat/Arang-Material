$("#max").click(function(){
    setTimeout(function(){
        $("#wrapper").load("carousel.html");
    }, 200);
});
if(!navigator.onLine){
    alert("offline?");
}