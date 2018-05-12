const path = require('path');
module.exports = {
    entry = './src/index.ts',
    devtool : "source-map",
    module:{
        rule: [
            {
            text:/\.tsx?$/,
            use: 'ts-loader',
            exclude: /node-modules/
            }
    ]
        
    },
    resolve: {
        extensions:['.tsx','.ts','.js']
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(_dirname,'dist')
    }
};