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
            {chapt: 'Rachunki pamięciowe – dodawanie i odejmowanie'},
            {chapt: 'Rachunki pamięciowe – mnożenie i dzielenie'},
            {chapt: 'Dzielenie z resztą'},
            {chapt: 'Kwadraty i sześciany liczb'},
            {chapt: 'Kolejność wykonywania działań'},
            {chapt: 'Oś liczbowa'},
            {chapt: 'System dziesiątkowy'},
            {chapt: 'System rzymski'},
            {chapt: 'Dodawnie i odejmowanie liczb sposobem pisemnym'},
            {chapt: 'Mnożenie pisemne przez liczby jednocyfrowe'},
            {chapt: 'Działania łączne na liczbach naturalnych'},
            {chapt: 'Wielokrotności liczb naturalnych'},
            {chapt: 'Dzielniki liczb naturalnych'},
            {chapt: 'Prosta, półprosta, odcinek, łamana'},
            {chapt: 'Wzajemne położenie prostych i odcinków na płaszczyźnie'},
            {chapt: 'Kreslenie i mierzenie odcinków'},
            {chapt: 'Kąty'},
            {chapt: 'Mierzenie kątów'},
            {chapt: 'Prostokąty i kwadraty'},
            {chapt: 'Obwody prostokątów i kwadratów'},
            {chapt: 'Koła i okręgi'},
            {chapt: 'Połówki, ćwiartki, ósme części'},
            {chapt: 'Porównywanie ułamków'},
            {chapt: 'Liczby mieszane'},
            {chapt: 'Ułamek jako wynik dzielenia'},
            {chapt: 'Dodawanie i odejmowanie ułamków zwykłych'},
            {chapt: 'Mnożenie ułamków przez liczby naturalne'},
            {chapt: 'Dodawanie i odejmowanie ułamków dziesiętnych'},
            {chapt: 'Co to jest pole figury?'},
            {chapt: 'Jednostki pola. Pole prostokąta.'},
            {chapt: 'Opis prostopadłościanu'},
        ],
        chaptersForLvl5: [
            {chapt: 'Coś tam dalej...'},
            {chapt: 'Coś tam dalej2'},
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
          console.log("chapter: "+number);  
        },
    },
})
