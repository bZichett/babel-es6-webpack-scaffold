var path = require('path');
var paths = require('../paths')

module.exports = {
    extensions: ['', '.js', '.scss', '.css'],
    //root: [],
    alias: {
        app: path.resolve(paths.src),

        //_: require('lodash/fp'),
        //m: require('mithril'),
        //moment: require('moment'),
        d3: require('d3'),
        fonts: paths.fonts,
        static: paths.static,
        img: paths.img,
        //scss: paths.scss.global,
        vendor: paths.vendor,
    },

    modules: paths.MODULE_DIRS
}
