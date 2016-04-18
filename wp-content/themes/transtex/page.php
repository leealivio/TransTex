<?php
get_header();

global $post;
$post_slug=$post->post_name;

$bg_img = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full', false, '' );

if ( have_posts() ) : while ( have_posts() ) : the_post();
?>

    <div class="banner bg-r-overlay banner-sub" style="background-image: url('<?php echo $bg_img[0]; ?>')">
        <div class="banner_container">
            <div class="banner-caption"><?php the_title(); ?></div>
        </div>
    </div>

    <div class="section section-sub section-intro section-intro-sub section-intro-sub-<?php echo $post_slug;?>">
        <div class="container">
            <div class="content">
                <?php if($post->post_content=="") : ?>

                    <p>Content Empty!</p>

                <?php else : ?>

                    <?php the_content();?>

                <?php endif; ?>
            </div>
        </div>
    </div>

<?php endwhile;?>
<?php endif; ?>

<?php get_footer();