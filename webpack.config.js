const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const copyWebpackPlugin = require('copy-webpack-plugin');



const mode = process.env.NODE_ENV;
const isDev = mode === 'development';
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {



    entry: {

        main: ['@babel/polyfill','./index.js']
    },
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'build'),
        environment: {
            arrowFunction: false
        }
    },
    mode,
    context: path.resolve(__dirname, 'src'),
    plugins: [

        new HtmlWebpackPlugin({
            template: './cv.html'
        }),
        /*new CleanWebpackPlugin(),*/
        new copyWebpackPlugin({
            patterns: [

                { from: './assets', to: '../build/assets' },
               
            ]

        }),

    ],
    module: {
        rules: [

            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-env", { "targets": {
                            "chrome": "58",
                            "ie": "11"
                        } }]]
                    }
                }


            },
        ]
    }

};