/**
 5. By a given array of animals, find the total number of legs
 Each animal can have 2, 4, 6, 8 or 100 legs
 */

(function () {
    var Animal = (function () {
        function Animal(name, species, legs) {
            this._name = name;
            this._species = species;
            this._legs = legs;
        }

        Animal.prototype.getName = function () {
            return this._name;
        };

        Animal.prototype.getSpecies = function () {
            return this._species;
        };

        Animal.prototype.getLegs = function () {
            return this._legs;
        };

        Animal.prototype.toString = function () {
            return 'name: ' + this.getName() + ', species: ' + this.getSpecies() + ', legs: ' + this.getLegs();
        };

        return Animal;
    }());

    var animals = [
            new Animal('Dog', 'Mammal', 4),
            new Animal('Owl', 'Bird', 2),
            new Animal('Snake', 'Reptiles', 0),
            new Animal('Duck', 'Bird', 2),
            new Animal('Monkey', 'Mammal', 2),
            new Animal('Eagle', 'Bird', 2),
            new Animal('Lizard', 'Reptiles', 4),
            new Animal('Elephant', 'Mammal', 4)],
        totalNumberOfLegs;

    totalNumberOfLegs = _.reduce(animals, function (memo, animal) {
        return memo + animal.getLegs();
    }, 0);

    console.log('Total Number of Legs: ' + totalNumberOfLegs);
}());
