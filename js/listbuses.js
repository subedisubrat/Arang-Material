var vehicle = Parse.Object.extend("vehicle");
var query = new Parse.Query(vehicle);
query.get("tBmGsy4Z9O", {
    success: function(data) {
        $("#sp_route").html("Runs "+data[0].get("RouteStart")+" to "+data[0].get("RouteEnd"));
    },
    error: function(err) {
        console.log("error");
    }
});