define(['jquery', 'model', 'view'], function ($, model, view) {
    'use strict';

    var Control = (function () {
        var Control = function (url) {
            this._url = url;
            this._postsCount = 0;
        };

        Control.prototype.loadChat = function () {
            var _this = this;

            $.get('templates/chatForm.html', function (data) {
                $('#wrapper').html(data);

                $('#user-id')
                    .append(getUsername())
                    .parent()
                    .prepend('username: ');

                // Get posts on every 1 second
                _this.updateChat();
                _this.interval = setInterval(function () {
                    _this.updateChat();
                }, 1000);
            });
        };

        Control.prototype.updateChat = function () {
            var _this = this;

            model.getJSON(this._url)
                .then(function (data) {
                    // We render posts only if we have new ones!
                    if (_this._postsCount < data.length) {
                        var posts = view.processAllPosts(data);
                        $('#chat').html(posts);

                        _this._postsCount = data.length;
                    }
                }, function (error) {
                    // The is commented because we get timeout error all the time,
                    // because the sever is overloaded
//                    console.log(error);
                });
        };

        Control.prototype.setEvents = function () {
            var _this = this,
                $wrapper = $('#wrapper');

            $wrapper.on('click', '#submit', function () {
                var user = getUsername(),
                    $textBox = $('#post-text'),
                    text = $textBox.val();

                // After message is sent, remove the text from the input
                $textBox.val('');

                // If we want quicker respond after we send a message, we can just append(prepend) the message to the message box!
                model.postJSON(_this._url, {
                    user: user,
                    text: text
                })
                    .then(function () {
                        _this.updateChat();
                    }, function (error) {
                        console.log(error);
                    });
            });

            $wrapper.on('click', '#login', function () {
                var username = $('#username').val();

                setUserToSessionStorage(username);

                _this.loadChatForm();
                _this.loadChat();
                window.location = '#/chat-form';
            });

            $wrapper.on('click', '#logout', function () {
                // No longer is needed to get the posts
                clearInterval(_this.interval);
                clearUserName();

                _this.loadLoginForm();
                window.location = '#/login-form';
            });
        };

        Control.prototype.loadLoginForm = function () {
            $('#wrapper').load('templates/loginForm.html');
        };

        Control.prototype.loadChatForm = function () {
            $('#wrapper').load('templates/chatForm.html');
        };

        Control.prototype.isLoggedIn = function () {
            var username = getUsername();

            return username !== null;
        };

        function setUserToSessionStorage(username) {
            var isValidUser = isValidUsername(username);

            if (isValidUser === true) {
                sessionStorage.setItem('username', username);
            }
            else {
                sessionStorage.setItem('username', 'Anonymous');
            }
        }

        function clearUserName() {
            sessionStorage.clear();
        }

        function getUsername() {
            return sessionStorage.getItem('username');
        }

        // Validation is not useful, wrote it only to have something :)
        // If it were useful, I would take it in separate file
        function isValidUsername(username) {
            if (typeof username !== 'string') {
                return false;
            }

            if (username.length < 1) {
                return false;
            }

            return true;
        }

        return Control;
    }());

    return Control;
});