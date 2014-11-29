/**
 6. By a given collection of books, find the most popular author
 (the author with the highest number of books)
 */

(function () {
    var Book = (function () {
        function Book(title, author) {
            this._title = title;
            this._author = author;
        }

        Book.prototype.getTitle = function () {
            return this._title;
        };

        Book.prototype.getAuthor = function () {
            return this._author;
        };

        Book.prototype.toString = function () {
            return 'title: ' + this.getTitle() + ', author: ' + this.getAuthor();
        };

        return Book;
    }());

    var books = [
            new Book('The Hunger Games', 'Suzanne Collins'),
            new Book('Harry Potter and the Order of the Phoenix', 'J.K. Rowling'),
            new Book('Harry Potter and the Goblet of Fire', 'J.K. Rowling'),
            new Book('Harry Potter and the Prisoner of Azkaban', 'J.K. Rowling'),
            new Book('Twilight', 'Stephenie Meyer'),
            new Book('Harry Potter and the Half-Blood Prince', 'J.K. Rowling'),
            new Book('To Kill a Mockingbird', 'Harper Lee'),
            new Book('Harry Potter and the Deathly Hallows', 'J.K. Rowling'),
            new Book('Catching Fire', 'Suzanne Collins')],
        mostPopularAuthor;

    mostPopularAuthor = _.chain(books)
        .groupBy(function (book) {
            return book.getAuthor();
        })
        .max(function (value) {
            return value.length;
        })
        .value()[0].getAuthor();

    console.log('Most popular author is: ' + mostPopularAuthor);

}());
