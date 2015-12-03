/**
 * grunt-phpmetrics
 * https://github.com/zarubatomas/grunt-phpmetrics
 *
 * Copyright (c) 2015 Tomas Zaruba
 * hhttps://github.com/zarubatomas
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {

    var path = require('path'),
        exec = require('child_process').exec;

    var command = {
            options: {
                reportHtml: 'report-html',
                reportXml: 'report-xml',
                reportCli: 'report-cli',
                violationsXml: 'violations-xml',
                reportCsv: 'report-csv',
                reportJson: 'report-json',
                chartBubbles: 'chart-bubbles',
               level: 'level',
                extensions: 'extensions',
                excludedDirs: 'excluded-dirs',
                symlinks: 'symlinks',
                withoutOOP: 'without-oop',
                failureCondition: 'failure-condition',
                config: 'config',
                templateTitle: 'template-title',
            }
        },
        defaults = {
            bin: 'phpmetrics'
        },
        done = null;

    grunt.registerMultiTask('phpmetrics', 'Run PHP Metrics', function() {
        var done = null,
            parameters = null,
            target = this.target,
            options = this.options(defaults),
            execute = path.normalize(options.bin);

        // generates parameters
        parameters = Object.keys(options).map(function(option) {
            return option in command.options && options[option] !== undefined ? '--' + command.options[option] + (options[option] !== true ? '=' + options[option]:''): null;
        }).filter(Boolean);

        execute += ' ' + parameters.join(' ') + ' ' + this.data.dir;

        grunt.verbose.writeln('Executing: ' + execute);

        done = this.async();

        exec(execute, {maxBuffer: options.maxBuffer}, function(error, stdout, stderr) {
            if(typeof options.callback === 'function') {
                options.callback.call(this, error, stdout, stderr, done);
            }

            if (stdout) {
                grunt.log.write(stdout);
            }

            if (error) {
                grunt.fail.warn(stderr ? stderr : 'Task PhpMetrics:' + target + ' failed.');
            }

            done(error);
        });
    });
};