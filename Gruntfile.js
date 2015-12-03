/*
 * grunt-phpmetrics
 * https://github.com/zarubatomas/grunt-phpmetrics
 *
 * Copyright (c) 2015 Tomas Zaruba
 * https://github.com/zarubatomas
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        phpmetrics: {
            options: {
                bin: 'vendor/bin/phpmetrics',
                reportHtml: 'report.html',
            },
            application: {
                dir: 'test/'
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'phpmetrics']);

};