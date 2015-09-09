module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        files: [
            {
                pattern: 'tests.webpack.js',
                watched: false
            }
        ],
        frameworks: ['mocha', 'sinon-chai'],
        preprocessors: {
            'tests.webpack.js': ['webpack']
        },
        reporters: ['dots'],
        webpack: {
            module: require('./webpack.config.js').modules
        },
        webpackServer: {
            noInfo: true
        }
    });
};
