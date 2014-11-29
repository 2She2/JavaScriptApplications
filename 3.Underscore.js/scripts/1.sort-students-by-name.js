/**
 1. Write a method that from a given array of students finds all students whose first name
 is before its last name alphabetically. Print the students in descending order by full name.
 Use Underscore.js
 */

(function () {
    var Student = (function () {
        function Student(firstName, lastName) {
            this._firstName = firstName;
            this._lastName = lastName;
        }

        Student.prototype.getFirstName = function () {
            return this._firstName;
        };

        Student.prototype.getLastName = function () {
            return this._lastName;
        };

        Student.prototype.getFullName = function () {
            return this._firstName + ' ' + this._lastName;
        };

        return Student;
    }());

    var students = [
        new Student('Human', 'Torch'),
        new Student('Super', 'Mario'),
        new Student('Green', 'Arrow'),
        new Student('Iron', 'Man'),
        new Student('Captain', 'America'),
        new Student('Green', 'Lantern'),
        new Student('Fred', 'Flintstone'),
        new Student('Barney', 'Rubble')];

    _.chain(students)
        .filter(function (student) {
            return student.getFirstName() < student.getLastName();
        })
        .sortBy(function (student) {
            return student.getFullName();
        })
        .reverse()
        .each(function (student) {
            console.log(student.getFullName());
        });

}());
