/**
 4. Write a function that by a given array of animals,
 groups them by species and sorts them by number of legs
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
            new Animal('Monkey', 'Mammal', 2),
            new Animal('Owl', 'Bird', 2),
            new Animal('Snake', 'Reptiles', 0),
            new Animal('Duck', 'Bird', 2),
            new Animal('Dog', 'Mammal', 4),
            new Animal('Eagle', 'Bird', 2),
            new Animal('Lizard', 'Reptiles', 4),
            new Animal('Elephant', 'Mammal', 4)],
        groupedAnimals;

    function groupAnimalsBySpecies(animals) {
        var sortedAnimals = _.chain(animals)
            .groupBy(function (animal) {
                return animal.getSpecies();
            })
            .sortBy(function (animal) {
                return animal[0].getLegs();
            })
            .value();

        return sortedAnimals;
    }

    groupedAnimals = groupAnimalsBySpecies(animals);

    _.each(groupedAnimals, function (animal) {
        console.log(animal);
    });
}());
