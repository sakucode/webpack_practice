const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebapackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(jpg|png)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'images/[name].[ext]',
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.css',
        }),
        new HtmlWebapackPlugin({
            template: './src/templates/index.html',
        }),
        new CleanWebpackPlugin(),
    ]
}
