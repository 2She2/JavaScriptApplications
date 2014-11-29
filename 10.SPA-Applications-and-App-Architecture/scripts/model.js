// This is very simple for "model", but this is all the functionality of the app!

define(['jquery'], function ($) {
    'use strict';

    var model = (function () {
        function makeHttRequest(url, type, data) {
            return $.ajax({
                url: url,
                type: type,
                data: data ? JSON.stringify(data) : "",
                contentType: "application/json",
                timeout: 5000
            });
        }

        function getJSON(url) {
            return makeHttRequest(url, 'GET');
        }

        function postJSON(url, data) {
            return makeHttRequest(url, 'POST', data);
        }

        return {
            getJSON: getJSON,
            postJSON: postJSON
        }
    }());

    return model;
});