var path = require("path");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function(env){
    console.log(env);
    return {
        mode: 'development',
        devtool: 'source-map',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main[contenthash:5].js'
        },
        module: {},
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                title: 'my app',
                scriptLoading: 'blocking',
                // chunks: 入口配置的key
                filename: 'index.html'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: './public', to: './' }
                ]
            })
        ]
    }
}
