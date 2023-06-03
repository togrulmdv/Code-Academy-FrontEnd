$(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'GET',
        dataType: 'json',
        success: function (posts) {
            posts.forEach(function (post) {
                var container = $('<div>').addClass('container');
                var title = $('<h3>').text(post.title);
                var id = $('<p>').text('ID: ' + post.id);
                var body = $('<p>').text(post.body);

                container.append(title, id, body);
                $('#posts-container').append(container);
            });
        },
        error: function () {
            console.log('Error retrieving posts.');
        }
    });
});
