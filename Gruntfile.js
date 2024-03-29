module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    optimize: 'none',
                    // generateSourceMaps: true,
                    // findNestedDependencies: true,
                    baseUrl: '.',
                    mainConfigFile: [ 'scripts/config.js', 'scripts/config-map.js' ],
                    // name: 'path/to/almond', /* assumes a production build using almond, if you don't use almond, you
                    //              need to set the "includes" or "modules" option instead of name */
                    include: [ 'scripts/config-map.js', 'scripts/init.js' ],
                    out: 'dist/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
};
