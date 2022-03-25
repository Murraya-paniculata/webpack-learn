var path = require("path");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
            new CleanWebpackPlugin()
        ]
    }
}