/**
 * BLOCK: Basic
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Styles:
 *        editor.css — Editor styles for the block.
 *        style.css — Frontend styles for the block.
 */
( function() {
	var __ = wp.i18n.__;
	var el = wp.element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;

	/**
	 * Register Basic Block.
	 *
	 * Registers a new block provided a unique name and an object defining its
	 * behavior. Once registered, the block is made available as an option to any
	 * editor interface where blocks are implemented.
	 *
	 * @param  {string}   name     Block name.
	 * @param  {Object}   settings Block settings.
	 * @return {?WPBlock}          The block, if it has been successfully
	 *                             registered; otherwise `undefined`.
	 */
	registerBlockType( 'gb/01-basic', { // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		title: __( 'Basic', 'GB' ), // Block title.
		icon: 'shield-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
		category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

		// The "edit" property must be a valid function.
		edit: function( props ) {
			// Creates a <p class='wp-block-gb-01-basic'></p>.
			return el(
				'p', // Tag type.
				{ className: props.className }, // The class="wp-block-gb-01-basic" : The class name is generated using the block's name prefixed with wp-block-, replacing the / namespace separator with a single -.
				'Hello World! — from the editor (01 Basic Block).' // Content inside the tag.
			);
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			return el(
				'p', // Tag type.
				{ className: props.className }, // The class="wp-block-gb-01-basic" : The class name is generated using the block's name prefixed with wp-block-, replacing the / namespace separator with a single -.
				'Hello World! — from the frontend (01 Basic Block).' // Content inside the tag.
			);
		},
	} );
})();
