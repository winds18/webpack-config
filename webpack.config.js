var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:[
        'babel-polyfill',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'app/main.js')
    ],
    module:{
        loaders:[{
            'loader':'babel-loader',
            exclude:[
                path.resolve(__dirname,'node_modules')
            ],
            include:[
               path.resolve(__dirname,'app')
            ],
            test:/\.jsx?$/, 
            query:{
                plugins:['transform-runtime'],
                presets:['es2015','stage-0','react']
            }
        }]
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlwebpackPlugin({
            title: 'Reactjs for dev env test website.',
            template: path.resolve(__dirname, 'templates/index.ejs'),
            inject: 'body'
        })
    ]
};
