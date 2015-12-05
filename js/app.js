var app = {
    name: 'Arang',
    version: '1.0',
    buildName: 'Anuva',
    user: {
        name : localStorage.getItem('user_name'),
        type : localStorage.getItem('user_type'),
        premium : localStorage.getItem('user_premium'),
        id : localStorage.getItem('user_id')
    },
    netInfo: function(){
        if(!navigator.onLine){
            $("#modalBackLays").fadeIn();
            $("#modal_noclose_err").show();
        }
    }
};