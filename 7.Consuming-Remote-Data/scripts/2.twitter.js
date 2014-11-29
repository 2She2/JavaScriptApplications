/**
 2.Read the developer documentation of Twitter
 Create a simple application that visualizes all public tweets for a given user (maybe from a textbox)

 */

require(['jquery', 'oauth'], function ($) {
    'use strict';

    var getAuthPromise = function () {

        OAuth.initialize('Vq32JBzhWwpRljhmwh0uShSwP2c');

        var authPromise = OAuth.popup('twitter', {
            cache: true
        });

        return authPromise;
    };

    $('#authorize').on('click', function () {
        getAuthPromise()
            .done(function () {
                console.log('Authenticated successfully. Your login authorization has been cached.');
            })
            .fail(function (err) {
                console.log(err);
            });
    });

    $('#get-user').on('click', function () {
        var username = $('#username').val(),
            messageCount = parseInt($('#msg-count').val()),
            requestUrl;

        requestUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?count=' + messageCount + '&screen_name=' + username;

        getAuthPromise()
            .done(function (result) {
                result.get(requestUrl)
                    .done(function (response) {
                        console.log('User messages recieved succesfully.');
                        console.log(response);

                        displayTweets(username, response);
                    })
                    .fail(function (error) {
                        console.log(error);
                    });
            })
    });

    function displayTweets(user, tweets) {
        var tweet,
            $br = $('<br/>'),
            $strong = $('<strong/>'),
            $container = $('#user-twitters');

        $strong.append(user);
        $container.append($strong)
            .append($br.clone());

        for (tweet in tweets) {
            $container.append(tweets[tweet].text);
            $container.append($br.clone());
        }
    }
});