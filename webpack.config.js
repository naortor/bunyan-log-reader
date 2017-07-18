const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');


module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "source-map",

    resolve: {
        extensions: [".jsx", ".js", ".json", '.scss']
    },

    module: {

        rules: [

            {
                test: /\.jsx?$/, loaders: ["babel-loader"], exclude: /node_modules/
            },

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },

    plugins: [new ExtractTextPlugin('style.css')],

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};