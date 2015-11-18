var app = {
    name: 'Arang',
    version: '0.0.1',
    buildName: 'Anuva',
    route: function(uri){
        $("#wrapper").load(uri);
    },
    user:{
        name : 'sandesh',
        type : 'passanger',
        premium : false,
        id : 20198,
        image : 'file:///c:/sandesh.jpg'
    },
    query:function(){
        
    },
    store:{
        function get(query){
            return (localStorage.getItem(query));
        },
        function set(query){
            localStorage.setItem(query);
        }
    }
}