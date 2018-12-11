(function () {
    document.querySelectorAll('.client-radio_button input').forEach
        (function (el, index) {

            var clientBlock = document.querySelectorAll('.client_block-item');


            if (el.checked == true) {

                clientBlock[index].classList.add('client_block-item__active');

            }

            el.onclick = function () {

                for (var i = 0; i < clientBlock.length; i++) {
                
                    clientBlock[i].classList.remove('client_block-item__active');

                }

                clientBlock[index].classList.add('client_block-item__active');


            }

        })


})();
