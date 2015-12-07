if(Parse){
    var vehicles = Parse.Object.extend("vehicle");
    var vehicle = new vehicles();
    var query = new Parse.Query(vehicle);
    query.get("tBmGsy4Z9O", {
        success: function(result){
            console.log("OK query Complete!");
            var sp = result.get("ServiceOf");
            var rs = result.get("RouteStart");
            var re = result.get("RouteEnd");
            var st = result.get("Jammed");
            
            console.log(result);
            $("#sp_id").html(sp);
            $("#sp_route").html("Runs "+rs+" to "+re+"<br />");
        },
        error: function(Object, errorCode){
            console.log(errorCode);
        }
    });
}