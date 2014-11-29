/**
 3. Write a function that by a given array of students
 finds the student with highest marks
 */

(function () {
    var Student = (function () {
        function Student(firstName, lastName, age, marks) {
            this._firstName = firstName;
            this._lastName = lastName;
            this._age = age;
            this._marks = marks;
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

        Student.prototype.getMarks = function () {
            return this._marks;
        };

        Student.prototype.toString = function () {
            return 'name: ' + this.getFullName() + ', age: ' + this.getAge() + ', marks: ' + this.getMarks();
        };

        return Student;
    }());

    var students = [
            new Student('Human', 'Torch', 23, [4, 6, 2, 5]),
            new Student('Super', 'Mario', 46, [3, 3, 6, 5]),
            new Student('Green', 'Arrow', 19, [2, 6, 5, 3]),
            new Student('Iron', 'Man', 38, [4, 6, 6, 5]),
            new Student('Captain', 'America', 21, [5, 6, 3, 5]),
            new Student('Green', 'Lantern', 22, [2, 6, 2, 5]),
            new Student('Fred', 'Flintstone', 15893, [4, 5, 6, 5]),
            new Student('Barney', 'Rubble', 15891, [4, 4, 2, 2])],
        topStudents;

    function findStudentsWithHighestMarks(students, studentsCount) {
        var topStudentsCount = studentsCount || students.length,
            topStudents,
            score;

        topStudents = _.sortBy(students, function (student) {
            score = 0;

            _.each(student.getMarks(), function (mark) {
                score += mark;
            });

            return score;
        });

        return _.last(topStudents, topStudentsCount);
    }

    topStudents = findStudentsWithHighestMarks(students, 3);

    _.each(topStudents, function (student) {
        console.log(student.toString());
    });

}());
