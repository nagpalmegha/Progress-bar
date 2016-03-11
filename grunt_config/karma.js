module.exports = function() {
    return {
        dev_continuous: {
            options: {
                singleRun: false,
                browsers: ['Chrome']
            }
        },
        dev: {},
        ci: {},

        options: {
            browsers: ['PhantomJS'],
            singleRun: true,
            reporters: 'dots',
            configFile: 'karma.conf.js',
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
            frameworks: ['jasmine']
        }
    };
};
