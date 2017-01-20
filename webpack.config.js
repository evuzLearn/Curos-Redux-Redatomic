var path = require('path');
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
    devServer: {
        contentBase: outPath
    }
}