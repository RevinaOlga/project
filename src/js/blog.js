(function () {
    document.querySelectorAll('.post_button').forEach 
        (function (element, index) {
            var imageLayer = document.querySelectorAll('.image-layer')
            console.log(imageLayer);
            element.onmouseover = function () {
                imageLayer[index].style = 'opacity: 0.5';

            }


            element.onmouseout = function () {
                imageLayer[index].style = 'opacity: 1';
            }
    });


    var buttonDropDown = document.querySelector('.blog_drop-down'),
        buttonDropDownImage = document.querySelector('.blog_drop-down img'),
        button = document.querySelector('.blog_wrap__closed'),
        openBlog = 'blog_wrap__opened',
        buttonTransform = 'blog_drop-down__current';

    buttonDropDown.onmouseover = function () {
        buttonDropDownImage.setAttribute('src', '/assets/image/main/left-active.png');
    };

     buttonDropDown.onmouseout = function () {
        buttonDropDownImage.setAttribute('src', '/assets/image/main/left.png');
    };

    buttonDropDown.onclick = function () {
        button.classList.toggle(openBlog);
        buttonDropDown.classList.toggle(buttonTransform);
    };
})();