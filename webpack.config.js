import 'babel-polyfill'
import html from 'html-webpack-plugin'
import { join } from 'path'

export const entry = ['babel-polyfill', './src/index.js']
export const output = {
    filename: 'bundle.js',
    path: join(__dirname, 'dist')
}
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            use: {
                loader: 'html-loader'
            }
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
        }
    ]
}
export const plugins = [
    new html({
        template: './src/index.html',
        filename: './index.html',
    })
]