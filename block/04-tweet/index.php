<?php
/**
 * BLOCK: Tweet
 *
 * Gutenberg Custom Block assets.
 *
 * @since   1.0.0
 * @package GB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'gb_block_04_tweet_editor_assets' );

/**
 * Enqueue the block's assets for the editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function gb_block_04_tweet_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'gb-block-04-tweet', // Handle.
		plugins_url( 'block.js', __FILE__ ), // Block.js: We register the block here.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // filemtime — Gets file modification time.
	);

	// Styles.
	wp_enqueue_style(
		'gb-block-04-tweet-editor', // Handle.
		plugins_url( 'editor.css', __FILE__ ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it — CSS for wp-edit-blocks.
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
	);
} // End function gb_block_04_tweet_editor_assets().


// Only frontend.
if ( ! is_admin() ) {
	// Hook: Frontend assets.
	add_action( 'enqueue_block_assets', 'gb_block_04_tweet_block_assets' );

	/**
	 * Enqueue the block's assets for the frontend.
	 *
	 * `wp-blocks`: includes basic styles built out of Gutenberg through `npm build`.
	 *
	 * @since 1.0.0
	 */
	function gb_block_04_tweet_block_assets() {
		// Styles.
		wp_enqueue_style(
			'gb-block-04-tweet-frontend', // Handle.
			plugins_url( 'style.css', __FILE__ ), // Block frontend CSS.
			array( 'wp-blocks' ), // Dependency to include the CSS after it.
			filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
		);
	} // End function gb_block_04_tweet_block_assets().
} // End is_admin().
