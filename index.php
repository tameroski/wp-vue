<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <?php wp_head(); ?>
    </head>
    <body>
        <div id="content">
            <?php
            if ( have_posts() ) :

                if ( is_home() && ! is_front_page() ) {
                    echo '<h1>' . single_post_title( '', false ) . '</h1>';
                }

                while ( have_posts() ) : the_post();

                    if ( is_singular() ) {
                        the_title( '<h1>', '</h1>' );
                    } else {
                        the_title( '<h2><a href="' . esc_url( get_permalink() ) . '">', '</a></h2>' );
                    }

                    the_content();

                endwhile;

            endif;
            ?>
        </div>

        <div id="app"></div>

        <?php wp_footer(); ?>
    </body>
</html>