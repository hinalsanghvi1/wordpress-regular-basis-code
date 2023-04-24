<?php
get_header();
?>
<div class="wrap">
        <form id="new-post-form">
            <label for="post-title">Title:</label>
            <input type="text" id="post-title" name="post_title">

            <label for="post-content">Content:</label>
            <textarea id="post-content" name="post_content"></textarea>

            <button type="submit">Submit</button>
        </form>
        <div id="response-message"></div>
    <?php 
        if(have_posts()):
            while(have_posts()): the_post();
                the_title();
                the_content();
            endwhile;
        endif;
        ?>
</div>
<?php
get_footer();
?>