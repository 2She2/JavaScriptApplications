define(function () {
    'use strict';

    var view = (function () {
        function processAllPosts(posts) {

            var docFrag = document.createDocumentFragment(),
                i,
                min = Math.max(posts.length - 50, 0),
                post,
                postBox;

            for (i = posts.length - 1; i > min; i -= 1) {
                post = posts[i];

                postBox = makePostBox(post.by, post.text);
                docFrag.appendChild(postBox);
            }

            return docFrag;
        }

        function makePostBox(name, text) {
            var postBox = document.createElement('div'),
                strong = document.createElement('strong');
            strong.style.textDecoration = 'underline';

            strong.innerHTML = name;
            postBox.appendChild(strong);
            postBox.innerHTML += ': ' + text;

            return postBox;
        }

        return {
            processAllPosts: processAllPosts,
            makePostBox: makePostBox
        }
    }());

    return view;
});