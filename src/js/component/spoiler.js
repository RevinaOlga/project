(function () {
    var closeClass = 'spoiler_close';

    ClosedClasses.push(closeClass);
    document.querySelectorAll('.spoiler').forEach(function (spoiler) {
        

        spoiler.querySelector('.spoiler__label').addEventListener('click', function () {
           spoiler.classList.toggle(closeClass);
        });
    });
})();
