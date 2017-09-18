// webpack = require('webpack');
// path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
//
//
// webpackConfig = {
//     context: __dirname,
//     entry: {
//         bundle: './src/app.js',
//         styles: './src/main.sass'
//     },
//     output: {
//         filename: '[name].js',
//         path: path.join(__dirname, 'build'),
//         library: '[name]'
//     },
//     devServer: {
//         historyApiFallback: true
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude: [/node_modules/],
//                 loader: "babel-loader",
//                 include: path.join(__dirname, 'src')
//             },
//             {
//                 test: /\.sass$/,
//                 loader: ExtractTextPlugin.extract({
//                     fallbackLoader: "style-loader",
//                     loader: "css-loader!sass-loader",
//                 })
//             },
//
//             {
//                 test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
//                 loader: 'file-loader'
//             }
//         ]
//     },
//     plugins: [
//         new ExtractTextPlugin('styles.css')
//     ]
// };
// module.exports = webpackConfig;

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            },
            {
                test: /\.sass/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        })
    ]
};