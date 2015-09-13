var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var environment = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        main: __dirname + '/src/js/boot.js'
    },
    output: {
        path: __dirname + '/build',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        root: __dirname
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        }),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"' + environment + '"'}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

    devServer: {
        contentBase: './build'
    }
};
