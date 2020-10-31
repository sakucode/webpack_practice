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
                test: /\.scss/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
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
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                                    pretty: true,
                        },
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
            template: './src/templates/index.pug',
            filename: 'index.html',
        }),
        new HtmlWebapackPlugin({
            template: './src/templates/access.pug',
            filename: 'access.html',
        }),
        new HtmlWebapackPlugin({
            template: './src/templates/members/taro.pug',
            filename: 'members/taro.html',
        }),
        new CleanWebpackPlugin(),
    ]
}
