document.querySelectorAll('.slides').forEach(function (element) {



    var slideSize = element.clientWidth,

        currentPosition = 0,

        intervalId,

        leftButton = document.querySelector('.left'),

        rightButton = document.querySelector('.right');





        //intervalId = setInterval(SetInt, 2000);





    rightButton.addEventListener('click', function () {



        //clearInterval(intervalId);



        

        currentPosition += slideSize;



        element.scroll({left: currentPosition, behavior: 'smooth'});

        



        //intervalId = setInterval(SetInt, 2000);





    });





    leftButton.addEventListener('click', function () {



        //clearInterval(intervalId);



        

        currentPosition -= slideSize;



        element.scroll({left: currentPosition, behavior: 'smooth'});

        



        //intervalId = setInterval(SetInt, 2000);





    });







    function SetInt() {





        currentPosition += slideSize;



        if (currentPosition >= element.scrollWidth) {





            currentPosition = 0;



        }



        element.scroll({left: currentPosition, behavior: 'smooth'});



    };





});