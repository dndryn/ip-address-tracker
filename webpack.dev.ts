import * as path from 'path';
import * as webpack from 'webpack';
import { merge } from "webpack-merge";
import common from './webpack.common';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import DotenvWebpackPlugin from "dotenv-webpack";
import 'webpack-dev-server';

const config = merge < webpack.Configuration > (common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss)$/i,
                use: ['style-loader', 'css-loader', 'resolve-url-loader', {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }],
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                template: path.resolve(__dirname, 'src', 'template.html'),
                title: 'Development',
            }
        ),
        new DotenvWebpackPlugin()
    ],
    devServer: { static: path.resolve(__dirname, 'dist') }
});

export default config;