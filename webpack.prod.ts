import * as path from 'path';
import * as webpack from 'webpack';
import common from './webpack.common';
import { merge } from "webpack-merge";
import miniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import 'webpack-dev-server';

const config = merge < webpack.Configuration > (common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    plugins: [
        new miniCssExtractPlugin({ filename: "[name].[chunkhash].css" }),
        new CleanWebpackPlugin({ verbose: true })
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]ss)$/i,
                use: [
                    miniCssExtractPlugin.loader, // use with html-webpack-plugin-
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
            },
            {
                test: /\.(svg|png|jp(e*)g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new HtmlWebPackPlugin(
                {
                    template: path.resolve(__dirname, 'src', 'template.html'),
                    title: 'Production',
                    minify: {
                        removeAttributeQuotes: true,
                        collapseWhitespace: true,
                        removeComments: true
                    }
                }
            )
        ]
    }
});

export default config;