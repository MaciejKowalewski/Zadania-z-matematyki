var app = new Vue({
    el: '#app',
    data: {
        schlClasses: [
            {id: 4, link: 'Zadania dla IV klasy'},
            {id: 5, link: 'Zadania dla V klasy'},
            {id: 6, link: 'Zadania dla VI klasy'},
            {id: 7, link: 'Zadania dla VII klasy'},
            {id: 8, link: 'Zadania dla VIII klasy'},
            {id: 9, link: 'Zadania dla IX klasy'},
        ],
    },
    methods: {
        showMathChapters: function(id){
            console.log(id)
        }
    },
})
