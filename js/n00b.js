/*
 * notification buddy js
 * Freely distributed under the MIT license.
 * @author Chad Schulz
 * @version 0.1.0
 * @requires jQuery v?.?.?
 */
(function ($) {

    'use strict';


    // All attached will become the noob object
    var noob = function() { };

    //
    noob.prototype.VERSION = '0.1.0';
    noob.prototype.noobies = noob.noobies || [];

    // Set/get global noobies object
    window.notibuddy = window.notibuddy || new noob;

    // Notification index
    var idx = 0;

    /*
     * add() adds another notification to the manager
     * paramerter ? <Object> the notification specs
     */
    noob.prototype.add = function(options) {
        /*
        options.title;
        options.message;

        <div class="notification-general">
            <h5>General Notification</h5>
            <p>Notification information in the form of a paragraph.</p>
        </div>
        */

        var $noobie = $('<div>').addClass('notification-' + options.type).append(options.message);
        $('.notificator').append($noobie);

        // Not DRY
        var close = document.createElement('a');
        close.setAttribute('class', 'close');
        close.innerText = unescape('%D7');
        $noobie.append(close);

        close.addEventListener('click', function(e) {
            $(this).parent('[class*=notification-]').fadeOut();
            e.preventDefault();
        });

        // TODO: some notification adding
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

        // TODO: Attach the existing notifications

        close.addEventListener('click', function(e) {
            $(this).parent('[class*=notification-]').fadeOut();
            e.preventDefault();
        });
    }

})( jQuery );
