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
    var noob = function(opts) {

        this.defaults = {
            position: 'Ne'
        };

        this.VERSION = '0.1.0';
        this.noobies = [];

        // Notification index
        this.idx = 0;

        this.init();
    };

    noob.prototype.init = function() {

        this.notificator();

        // Grab pre-existing notifications on the page
        var notifications = $('[class*=notification-]');

        // For each existing notification add close with event listener
        for (var i=0; i<notifications.length; i++) {
            addNotification(notifications[i], this);
        }
    };

    noob.prototype.notificator = function() {
        var notificator = document.createElement('div');
        notificator.className = 'notificator';
        $('body').append(notificator);

        var loc = this.defaults.position.toLowerCase();

        if (loc === 'nw' || loc === 'ne' || loc === 'n' || loc === 's')
            $('.notificator').addClass('location-' + loc);
    };

    window.notibuddy = new noob;

    /*
     * add() adds another notification to the manager
     * paramerter ? <Object> the notification specs
     */
    noob.prototype.add = function(options) {

        var $noobie = $('<div>').addClass('notification-' + options.type).append(options.message);
        $('.notificator').append($noobie);

        addNotification($noobie, this);
    };

    function addNotification(notification, ctx) {

        var $notification = $(notification);

        // Create the close element
        var close = document.createElement('a');
        close.setAttribute('class', 'close');
        close.innerText = unescape('%D7');

        // Attach close element
        $notification.append(close);

        // Update index
        $notification.data('id', ctx.idx);
        ctx.idx++;

        // Attach event listener
        close.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('click');
            $(this).parent('[class*=notification-]').fadeOut();
        });
    };

    noob.prototype.closeAll = function() {

        $('[class*=notification-] a.close').trigger('click');
    };

})( jQuery );
