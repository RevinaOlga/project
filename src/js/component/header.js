(function () {
    var headerElement = document.querySelector('.header'),
        openLinkElement = headerElement.querySelector('.header__open-link'),
        openClass = 'header_open';

    openLinkElement.addEventListener('click', function () {
        headerElement.classList.toggle(openClass);
    });

    $(headerElement).find('.header__links').on('click', '.header__link', function (event) {
        var linkSelector = $(event.target).attr('data-link'),
            scrollToElement;

        if (!linkSelector) {
            return;
        }

        scrollToElement = $(linkSelector);

        ClosedClasses.forEach(function (closedClass) {
            scrollToElement.parents('.' + closedClass)
                .toggleClass(closedClass);
        });

        $(document).scrollTop(scrollToElement.offset().top);
    });
})();
