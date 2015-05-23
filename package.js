Package.describe({
	name: "danappelxx:hover.css",
	summary: "A wrapper for hover.css to add smooth css animations to your pages.",
	version: "1.0.0",
	git: "https://github.com/Danappelxx/meteor-hover.css.git",
	documentation: "README.md"
});

Package.onUse( function (api) {
	api.versionsFrom('1.1.0.2');

	api.addFiles([
		'hover-min.css'
	], 'client');
});
