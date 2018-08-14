var app = new Vue({
    el: '#app',
    data: {
        schlClasses: [
            {id: 0, link: 'Zadania dla IV klasy'},
            {id: 1, link: 'Zadania dla V klasy'},
            {id: 2, link: 'Zadania dla VI klasy'},
            {id: 3, link: 'Zadania dla VII klasy'},
            {id: 4, link: 'Zadania dla VIII klasy'},
            {id: 5, link: 'Zadania dla IX klasy'},
        ],
        chaptersForLvl4: [
            {chapter1: 'Rachunki pamięciowe – dodawanie i odejmowanie'},
            {chapter1: 'Rachunki pamięciowe – mnożenie i dzielenie'},
        ],
    },
    methods: {
        exitChapters: function(){
            let chapterSection = document.querySelector('.chapter-section-visible');
            chapterSection.classList.remove('chapter-section-visible');
        },
        showMathChapters: function(id){
            let chapterSection = document.querySelectorAll('.chapter-section');
            chapterSection[id].classList.add('chapter-section-visible');
        },
        showChapter: function(number){
          console.log("chapter number "+number);  
        },
    },
})
