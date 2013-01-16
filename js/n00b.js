/*
 * N0tificati0n Buddy
 * @author Chad Schulz
 * @version 0.1.0
 * @requires jQuery v?.?.?
 */
(function ($) {

    'use strict';

    // All attached will become the notibuddy object
    var notibuddy = {};

    // Set/get global noobies object
    window.noobies = window.noobies || [];

    // Public varibales
    notibuddy.VERSION = '0.1.0';

    // Private variables
    var idx = 0;

    /*
     * add() adds another notification to the manager
     * paramerter ? <Object> the notification specs
     */
    notibuddy.add = function() {
        // TODO some notification adding
        idx++;
    };


    // Build pre-existing notifications on the page
    var notifications = $('[class*=notification-]');

    // For each existing notification add close with event listener
    for (var i=0; i<notifications.length; i++) {

        // var close = '<a href="#" class="close">&times;</a>';
        var close = document.createElement('a');
        close.setAttribute('class', 'close');
        close.innerText = unescape('%D7');
        $(notifications[i]).append(close);

        // Attach the existing notifications
        notibuddy.add();

        close.addEventListener('click', function(e) {
            $(this).parent('[class*=notification-]').fadeOut();
            e.preventDefault();
        });
    }

})( jQuery );
