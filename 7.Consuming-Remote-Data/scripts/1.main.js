/**
 1. Create a module that exposes methods for performing HTTP requests by given URL and headers
 getJSON and postJSON
 Both methods should work with promises
 */

// Don't know why, but WS thing that this url is wrong?!?
require(['scripts/1.http-requests-module.js'], function (httpRequest) {
    'use strict';

    var url = 'http://localhost:3000/students',
        headers = {
            contentType: 'application/json',
            accept: 'application/json'
        },
        pesho = {
            name: 'Pesho',
            grade: 5
        },
        gosho = {
            name: 'Gosho',
            grade: 4
        },
        sasho = {
            name: 'Sasho',
            grade: 9
        },
        misho = {
            name: 'Misho',
            grade: 7
        },
        persons,
        displayStudents;

    displayStudents = function (data) {
        var container = document.getElementById('students'),
            students = data.students,
            student,
            curStudent,
            br = document.createElement('br');

        container.innerHTML = 'students count: ' + data.count;
        container.appendChild(br.cloneNode(true));

        for (student in students) {
            curStudent = students[student];
            container.innerHTML += 'name: ' + curStudent.name + ', grade: ' + curStudent.grade + ', id: ' + curStudent.id;
            container.appendChild(br.cloneNode(true));
        }
    };

    persons = [pesho, gosho, sasho, misho];

    for (var person in persons) {
        httpRequest.postJSON(url, headers, persons[person]);
    }

    httpRequest.getJSON(url, headers)
        .then(function (data) {
            displayStudents(JSON.parse(data));
            console.log(JSON.parse(data));
        }).done();


});