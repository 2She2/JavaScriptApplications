/**
 2. Write function that finds the first name and last name
 of all students with age between 18 and 24. Use Underscore.js
 */

(function () {
    var Student = (function () {
        function Student(firstName, lastName, age) {
            this._firstName = firstName;
            this._lastName = lastName;
            this._age = age;
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

        Student.prototype.getAge = function () {
            return this._age;
        };

        Student.prototype.toString = function () {
            return 'name: ' + this.getFullName() + ' age: ' + this.getAge();
        };

        return Student;
    }());

    var students = [
            new Student('Human', 'Torch', 23),
            new Student('Super', 'Mario', 46),
            new Student('Green', 'Arrow', 19),
            new Student('Iron', 'Man', 38),
            new Student('Captain', 'America', 21),
            new Student('Green', 'Lantern', 22),
            new Student('Fred', 'Flintstone', 15893),
            new Student('Barney', 'Rubble', 15891)],
        filteredStudents;

    // The condition says that the function must return only the names of the students!
    function findNameOfStudentsBetween18And24(students) {
        var filtStuds = _.chain(students)
            .filter(function (student) {
                return (18 <= student.getAge() && student.getAge() <= 24);
            })
            // If you want the whole student object, comment(or delete) this
            .map(function (student) {
                return student.getFullName();
            })
            .value();

        return filtStuds;
    }

    filteredStudents = findNameOfStudentsBetween18And24(students);
    _.each(filteredStudents, function (student) {
        console.log(student.toString());
    });

}());
