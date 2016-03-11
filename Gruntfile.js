var path = require('path');


module.exports = function (grunt) {

    //var config = require('grunt-config-factory').build('./grunt_config', grunt);
    //grunt.initConfig(config);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        uglify: {
		    my_target: {
		      files: {
		        './app/scripts/dest/output.js': ['./app/scripts/lib/angular/1.3.14/angular.min.js',
		        								'./app/scripts/lib/bootstrap/0.13.0/ui-bootstrap-0.13.0.min.js',
		        								'./app/scripts/src/initModule.js',
		        								'./app/scripts/src/controllers/progressbarController.js',
		        								'./app/scripts/src/directives/progressbardirective.js'
		        								]
		        }
    		}
  		},
  		cssmin: {
		  target: {
		    files: {
		      './app/css/dest/output.css': [	'./app/css/lib/bootstrap/3.3.5/bootstrap.min.css',
		        								'./app/css/src/main.css'
		     								 ]
		    }
		  }
		}
    });
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'karma:unit']);
    grunt.registerTask('minify', [ 'uglify','cssmin']);
};
