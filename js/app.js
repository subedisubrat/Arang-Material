var app = {
    name: 'Arang',
    version: '0.0.1',
    route: function(uri){
        $("#wrapper").load(uri);
    }
}