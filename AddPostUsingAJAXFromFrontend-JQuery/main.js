jQuery(document).ready(function($) {
    $('#new-post-form').submit(function(event) {
        event.preventDefault();

        var postTitle = $('#post-title').val();
        var postContent = $('#post-content').val();

        $.ajax({
            url: '/wp-json/wp/v2/posts',
            type: 'POST',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
            },
            data: {
                title: postTitle,
                content: postContent,
                status: 'publish'
            },
            success: function(response) {
                $('#response-message').html('Post created successfully!');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#response-message').html('Something went wrong: ' + errorThrown);
            }
        });
    });
});
