/// <binding AfterBuild='default' Clean='default' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/


module.exports = function (grunt) {
    grunt.registerTask('default', ['concat']);

    grunt.initConfig({
        env: process.env.NODE_ENV,
        src: {
            javascript: ['js/*.js'],
            config: ['env/<%= env %>.js']
        },
        concat: {
            javascript: {
                src: ['<%= src.config %>', '<%= src.javascript %>'],
                dest: 'myapp.js'
            }
        }
    });
};