'use strict';

// TinyMCE
tinymce.init({
	selector: '#Rich-TextEditor',
	theme: 'modern',
	width: 1040,
	height: 500,
	a_plugin_option: true,
	a_configuration_option: 400,
	// lang japanese
	language : "ja",
	// plugins
	plugins: [
		'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
		'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
		'save table contextmenu directionality emoticons template paste textcolor importcss'
	],
	// menubar & toolbar
	menubar: 'file edit insert view format table tools',
    toolbar: 'undo redo | bold italic | styleselect | bullist numlist | alignleft aligncenter alignright alignjustify | forecolor backcolor | link image | preview | save',
	// body id
	body_id: 'page-my-page',
	// css
	content_css: 'css/texteditor.css',
	importcss_append: true,
	// formats
	style_formats: [
		{
			title: 'Headers', items: [
				{ title: 'h1', block: 'h1', classes: 'tiny-heading-1' },
				{ title: 'h2', block: 'h2', classes: 'tiny-heading-2' },
				{ title: 'h3', block: 'h3', classes: 'tiny-heading-3' },
				{ title: 'h4', block: 'h4', classes: 'tiny-heading-4' },
				{ title: 'h5', block: 'h5', classes: 'tiny-heading-5' },
				{ title: 'h6', block: 'h6', classes: 'tiny-heading-6' }
			]
		},
		{
			title: 'Blocks', items: [
				{ title: 'p', block: 'p' },
				{ title: 'div', block: 'div' },
				{ title: 'pre', block: 'pre' }
			]
		},
		{
			title: 'Containers', items: [
				{ title: 'section', block: 'section', wrapper: true, merge_siblings: false },
				{ title: 'article', block: 'article', wrapper: true, merge_siblings: false },
				{ title: 'blockquote', block: 'blockquote', wrapper: true },
				{ title: 'hgroup', block: 'hgroup', wrapper: true },
				{ title: 'aside', block: 'aside', wrapper: true },
				{ title: 'figure', block: 'figure', wrapper: true }
			]
		},
		{
			title: 'Decorations', items: [
				{ title: 'テキストカラー1', block: 'span', classes: 'tiny-deco-1' },
				{ title: 'テキストカラー2', block: 'span', classes: 'tiny-deco-2' },
				{ title: 'テキストカラー3', block: 'span', classes: 'tiny-deco-3' },
				{ title: 'ボールド', block: 'span', classes: 'tiny-bold' }
			]
		}
	],
	visualblocks_default_state: true,
	end_container_on_empty_block: true,
	// save
	save_enablewhendirty: true,
	save_oncancelcallback: function () { console.log('Save canceled'); },
	save_onsavecallback: function () { console.log('Saved'); }
});
