(function (){

    var spoilerIcon = document.querySelectorAll('.spoiler_header-icon > img'),

        spoilerTitle = document.querySelectorAll('.spoiler_header-title'),

        spoilerContent = document.querySelectorAll('.spoiler_content');

    // Изменение вида мыши при наведении

    spoilerIcon.forEach(function (element) {


        element.onmouseover = function() {

        this.style = 'cursor: pointer';


        }


    });

    // Изменение icon, title, content при нажатии

    spoilerIcon.forEach(function (element, index) {


        element.onclick = function() {


            if (spoilerTitle[index].classList.contains('spoiler_header-title__current')) {


                this.setAttribute('src', 'image/spoiler-icon-plus.png');


            } else {


                this.setAttribute('src', 'image/spoiler-icon-minus.png');



            }


            spoilerTitle[index].classList.toggle('spoiler_header-title__current');

            spoilerContent[index].classList.toggle('spoiler_content__current');


        }


    })


})();