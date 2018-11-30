(function (){

    var spoilerIcon = document.querySelectorAll('.spoiler-icon > img'),

        spoilerTitle = document.querySelectorAll('.spoiler-title'),

        spoilerContent = document.querySelectorAll('.spoiler-content');

    // Изменение вида мыши при наведении

    spoilerIcon.forEach(function (element) {


        element.onmouseover = function() {

        this.style = 'cursor: pointer';


        }


    });

    // Изменение icon, title, content при нажатии

    spoilerIcon.forEach(function (element, index) {


        element.onclick = function() {


            if (spoilerTitle[index].classList.contains('spoiler-title__current')) {


                this.setAttribute('src', 'image/spoiler-icon-plus.png');


            } else {


                this.setAttribute('src', 'image/spoiler-icon-minus.png');



            }


            spoilerTitle[index].classList.toggle('spoiler-title__current');

            spoilerContent[index].classList.toggle('spoiler-content__current');


        }


    })


})();