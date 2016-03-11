// Karma configuration
// Generated on Sun Jun 28 2015 15:57:58 GMT+1000 (AUS Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    

    // list of files / patterns toy load in the browser
     files: [
                // required application js files
                './app/scripts/lib/jquery/1.11.3/jquery.min.js',
                './app/scripts/lib/angular/1.3.14/angular.min.js',
                './app/scripts/lib/angular/1.3.14/angular-mocks.js',
                './app/scripts/lib/bootstrap/0.13.0/ui-bootstrap-0.13.0.min.js',

                // app module
                './app/scripts/src/initModule.js',
                './app/scripts/src/controllers/progressbarController.js',
                './app/scripts/src/directives/progressbarDirective.js',

                // testing frameworks
                 

                // tests
                './App.UnitTests/Javascript/spec/**/*.spec.js'
            ],

// frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
