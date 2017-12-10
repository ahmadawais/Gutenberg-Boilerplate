/**
 * BLOCK: Basic with ESNext
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended!
 * because all of these styles will appear in `post_content`.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

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
registerBlockType( 'gb/basic-esnext-02', { // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'GB Basic ESNext', 'GB' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

	// The "edit" property must be a valid function.
	edit: function( props ) {
		// Creates a <p class='wp-block-gb-basic-esnext-02'></p>.
		return (
			<p className={ props.className }>Hello World! — from the editor (02 Basic Block ESNext).</p>
		);
	},

	// The "save" property must be specified and must be a valid function.
	save: function( props ) {
		return (
			<p className={ props.className }>Hello World! — from the frontend (02 Basic Block ESNext).</p>
		);
	},
} );
