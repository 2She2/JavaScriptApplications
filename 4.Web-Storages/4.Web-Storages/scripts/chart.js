/// <reference path="_references.js" />

function loadChart(item) {
    'use strict';

    if (item) {
        localStorage.setItem(item.name, item.score);
    }

    getAllLocalStorage();

    function getAllLocalStorage() {
        var $chart = $("#chart"),
            $list = $('<ul />'),
            $item = $('<li />'),
            $strong = $('<strong />');

        if (!localStorage.length || localStorage.length == 0) {
            $chart.html("Name:empty, Score=empty");
            return;
        }

        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i),
                value = localStorage.getItem(key),
                $curStrong = $strong.clone()
                    .html(key + ': '),
                $curItem = $item.clone()
                    .append($curStrong)
                    .append(value + ' points');

            $list.append($curItem);
        }

        $strong.html('Scores:');
        $chart.html($strong)
            .append($list);
    }
};