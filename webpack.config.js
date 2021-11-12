module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ "style-loader","css-loader", "sass-loader"]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                loader: "file-loader",
                options: {
                    outputPath:'fonts'
                }
            }

        ]
    }
}