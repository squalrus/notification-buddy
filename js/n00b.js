(function ($) {

    var notifications = $('[class*=notification-]');

    for (var i=0; i<notifications.length; i++) {
        // var close = '<a href="#" class="close">&times;</a>';
        var close = document.createElement('a');
        close.setAttribute('class', 'close');
        close.innerText = unescape('%D7');

        $(notifications[i]).append(close);

        close.addEventListener('click', function(e) {
            $(this).parent('[class*=notification-]').fadeOut();
            e.preventDefault();
        });
    }

    // alert( notifications );
})( jQuery );
