var path = require('path');
var webpack = require('webpack');
var entryPath = path.join(__dirname, 'src');
var outPath = path.join(__dirname, 'dist');

module.exports = {
    entry: [path.join(entryPath, 'app.js')],
    output: {
        path: outPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: entryPath,
                loaders: ['react-hot', 'babel']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    devServer: {
        contentBase: outPath
    }
}