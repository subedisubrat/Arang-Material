$("#submitBtn").click(function(){
    //app.netInfo();
    var typese = $("#driver").is(":checked");
    var un = $("#username").val();
    var pas = $("#password").val();
    console.log("GOT USERNAME "+un+" AND PASSWORD "+pas);
    if(un && pas){
        console.log("USERNAME AND PasSWORD Non empty, checking with servers");
        // Validate with server;
        var user = Parse.Object.extend("Users");
        console.log("Extending the parse users class");
        var query = new Parse.Query(user);
        console.log('creating a new query and executing...');
        query.equalTo("Name", un);

        $("#modalBackLays").fadeIn();
        $("#modalProcess").show();
        query.find({
            success: function(data){
                $("#modalBackLays").fadeOut();
                $("#modalProcess").fadeOut();
                console.log("successful query! ");
                if(data.length == 0){
                    console.log("no users found! ");
                }
                else{
                    $("#modalBacjLays").fadeIn();
                    console.log("User found! :)");
                }
            },
            error: function(errdata){
                $("#modalBackLays").fadeOut();
                $("#modalProcess").fadeOut();
                app.netInfo();
                console.log("un - successful query!");
            }
        });
    }
    else{
        console.log("ONe of the fields appears to be empty");
        if(!un){
            console.log("username is the guilty one!");
            $("#username").addClass("animated shake");
            setTimeout(function(){
                $("#username").removeClass("shake");
            }, 1000);
        }
        else{
            console.log("password is the guilty one!");
            $("#password").addClass("animated shake");
            setTimeout(function(){
                $("#password").removeClass("shake");
            }, 1000);            
        }
    }
});