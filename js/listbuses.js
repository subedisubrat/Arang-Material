if(Parse){
    var userLat = 0;
    var userLng = 0;
    var geo = navigator.geoLocation.getCurrentPosition(setPosition);
    function setPosition(geoData){
        userLat = geoData.coords.latitude;
        userLng = geoData.coords.longitude;
    }
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
            
            var from = new google.maps.LatLng(27.700769, 85.300140);
            var to   = new google.maps.LatLng(27.6833333, 84.4333333);
            var dist = google.maps.geometry.spherical.computeDistanceBetween(from, to);
            dist = dist / 1000;
            dist = Math.floor(dist);
            console.log(dist);
            
            
            console.log(result);
            $("#sp_id").html(sp);
            $("#sp_route").html("Runs "+rs+" to "+re+"<br />");
            $("#distance").html(dist+" km far from You.");
        },
        error: function(Object, errorCode){
            console.log(errorCode);
        }
    });
}