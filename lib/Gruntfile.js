module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../js/main.js']
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$" ],
        esnext: true,
        globalstrict: true,
        globals: {"$": true},
        browserify: true
      },
      files: ['../js/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/styles.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
       browserify: {
        files: ['../js/*.js'],
        tasks: ["browserify"]
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};