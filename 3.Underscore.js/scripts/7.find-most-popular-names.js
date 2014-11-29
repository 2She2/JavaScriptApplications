/**
 7.By an array of people find the most common
 first and last name. Use underscore.
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
            new Student('Wilma', 'Flintstone')],
        mostCommonFirstName,
        mostCommonLastName;


    mostCommonFirstName = _.chain(students)
        .groupBy(function (student) {
            return student.getFirstName();
        })
        .max(function (value) {
            return value.length;
        })
        .value()[0].getFirstName();

    mostCommonLastName = _.chain(students)
        .groupBy(function (student) {
            return student.getLastName();
        })
        .max(function (value) {
            return value.length;
        })
        .value()[0].getLastName();

    console.log('Most Common First Name is: ' + mostCommonFirstName);
    console.log('Most Common Last Name is: ' + mostCommonLastName);

}());
