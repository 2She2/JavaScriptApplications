// File name are control, model and view for the ease of the whoever going through the code

define(function () {
    require.config({
        paths: {
            'jquery': 'libs/jquery',
            'sammy': 'libs/sammy',
            'model': 'model',
            'view': 'view',
            'control': 'control'
        }
    });

    require(['jquery', 'sammy', 'control'], function ($, Sammy, Control) {
        'use strict';

        var url = 'http://crowd-chat.herokuapp.com/posts',
            controller = new Control(url),
            app;

        controller.setEvents();

        app = Sammy('#wrapper', function () {
            this.get('#/login-form', function () {
                if (controller.isLoggedIn()) {
                    window.location = '#/chat-form';
                    return;
                }

                controller.loadLoginForm();
            });

            this.get('#/chat-form', function () {
                if (!controller.isLoggedIn()) {
                    window.location = '#/login-form';
                    return;
                }

                window.location = '#/chat-form';
                controller.loadChat();
            });
        });

        app.run('#/login-form');
    });
});