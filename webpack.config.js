var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV;


module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build/static/'),
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
                loader: 'babel-loader',
                query: {
                    presets: NODE_ENV === 'development' ? ["react", "es2015", "stage-0", "react-hmre"] : ["react", "es2015", "stage-0"]
                },
                include: path.join(__dirname, 'src'),
                exclude: [/node_modules/]
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.sass/,
                loader: NODE_ENV !== 'development'
                    ? ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader"
                }) : "style-loader!css-loader!autoprefixer-loader!sass-loader",
                exclude: [/node_modules/]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        })
    ]
};

if (NODE_ENV !== 'development') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        }),

    );
}