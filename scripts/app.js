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
        chaptersForLvl4: [
            {chapter: 'Rachunki pamięciowe – dodawanie i odejmowanie'},
        ],
    },
    methods: {
        exitChapters: function(){
            let chapterSection = document.querySelector('.chapter-section');
            chapterSection.classList.remove(chapterSection.classList[2]);
            chapterSection.classList.remove('chapter-section-visible');
        },
        showMathChapters: function(id){
            let chapterSection = document.querySelector('.chapter-section');
            chapterSection.classList.add('chapter-section-visible');
            chapterSection.classList.add('class'+id);
        },
    },
})
