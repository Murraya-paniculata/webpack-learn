const FileListPlugin = require('./plugins/FileListPlugin');
var Myplugin = require('./plugins/MyPlugin');

module.exports = function(env){
    console.log(env);
    return {
        mode: 'development',
        devtool: 'source-map',
        module: {
            rules: [{
                test: /\.(png)$/,
                use: ["./loader/img-loader"]
            }]
        },
        plugins: [
            new Myplugin(),
            new FileListPlugin("list")
        ]
    }
}