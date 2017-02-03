/**
 * 
 * @authors chenshw (chenshw@seaway.net.cn)
 * @date    2016-10-26 17:53:44
 * @version $Id$
 * @description 
 * @update [user] [date] [instruction]
 */


var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var baseWebpackConfig = require('./webpack.base.conf');

var config = require('./config')
var chunks = [];
for (var name in config.build.alias) {
    chunks.unshift(name);
}

module.exports = merge(baseWebpackConfig, {
    plugins: [
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin(config.build.assetsPublicCssPath + "style.css", {
            allChunks: true
        }),
        // new TransferWebpackPlugin([
        //     { from: path.resolve(__dirname, "../src/images"), to: path.resolve(__dirname, "../dist/images") }
        // ], path.join(__dirname, "")),
        new webpack.optimize.CommonsChunkPlugin({
            name: chunks,
            filename: config.build.assetsPublicLibPath + '[name].js'
        })
        // https://github.com/ampedandwired/html-webpack-plugin
        // new HtmlWebpackPlugin({
        //   filename: './src/index.html',
        //   template: './src/index.html',
        //   // inject: true
        // })
    ]
});
// 用html匹配入口文件
function getEntry() {
    var entries = {},
        basename, tmp, pathname;

    for (var i = 0; i < arguments.length; i++) {
        glob.sync(arguments[i]).forEach(function(entry) {
            pathname = path.relative('./src/', entry).split('.')[0].replace(/\\/g, '/');
            entries[pathname] = entry;
        });
    }
    return entries;
}

var pages = getEntry('./src/!(js|images|style|components|vuex)/*.html', './src/*.html');
// console.log(pages)
for (var pathname in pages) {
    // console.log(pathname);
    // 配置生成的html文件，定义路径等
    // var jsModule = pathname.split("/");
    // console.log("js/" + pathname);
    var conf = {
        filename: pathname + '.html',
        template: pages[pathname], // 模板路径
        chunks: chunks.concat("js/" + pathname),
        inject: true, // js插入位置
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    };

    // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
    module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
