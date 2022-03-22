module.exports = {
    module: {
        rules: [
            {
                test: /index\.js$/,
                use: ["./loader/my-loader"]
            }
        ]
    }
}