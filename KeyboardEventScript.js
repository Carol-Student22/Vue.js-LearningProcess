new Vue ({
    el: '#vue-app',
    data: {
        name:"",
        age:"",
    },
    methods:{
        logName: function () {
            console.log("You've entered your name");

        },
        logAge: function () {
            console.log("You've entered your age");
        }
    },
})