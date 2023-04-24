<?php
get_header();
?>
<div class="wrap">
    <?php if(current_user_can('administrator')) : ?>
        <div class="admin-quick-add">
        <h3>Quick Add Post</h3>
        <input type="text" name="title" placeholder="Title">
        <textarea name="content" placeholder="Content"></textarea>
        <button id="quick-add-button">Create Post</button>
        </div>
    <?php endif; ?>
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

