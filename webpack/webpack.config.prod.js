

var url = require('url');
var paths = require('../config/paths');

var homepagePath = require(paths.appPackageJson).homepage;
var publicPath = homepagePath ? url.parse(homepagePath).pathname : '/';
if (!publicPath.endsWith('/')) {
	// Prevents incorrect paths in file-loader
	publicPath += '/';
}

var webpackConfig = require('./webpack.config')({
	__PROD__: true,
	publicPath
});

module.exports = webpackConfig