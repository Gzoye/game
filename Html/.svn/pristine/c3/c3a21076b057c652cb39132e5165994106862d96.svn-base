/**
 * 
 * @authors chenshw (chenshw@seaway.net.cn)
 * @date    2016-10-26 17:53:44
 * @version $Id$
 * @description 
 * @update [user] [date] [instruction]
 */

var path = require('path'); // nodejs 中的path模块
var config = require('./config'); //加载配置文件
var projectRoot = path.resolve(__dirname, '../') //项目开发目录
var glob = require('glob'); //获取匹配对应规则的文件
var entries = getEntry('./src/!(js|images|style|components|vuex)/*.html', './src/*.html'); // 获得入口js文件 (用HTML文件去匹配JS)
// var entriesrc= getEntry('./src/!(js|images|style|components)/*.html')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: entries,
    output: {
        // 输出路径是 myProject/output/static
        path: config.build.assetsRoot, //path.resolve(__dirname, '../output/static'),
        publicPath: config.build.assetsPublicPath,
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: config.build.alias
    },
    babel: {
        "presets": ["es2015", "stage-2"],
        "plugins": ["transform-runtime"],
        "comments": false
    },
    module: {
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue',
                exclude: /node_modules/
            },
            // bable 编译ES2015
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
                exclude: /node_modules/
            }, {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader?limit=&name=images/[name].[ext]',
                exclude: /node_modules/
            }, {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader?limit=1&name=style/iconfont/[name].[ext]',
                exclude: /node_modules/
            }
        ]
    }
}

// 用html匹配入口文件
function getEntry() {
    var entries = {},
        basename, tmp, pathname;

    for (var i = 0; i < arguments.length; i++) {
        glob.sync(arguments[i]).forEach(function(entry) {
            pathname = "js/" + path.relative('./src/', entry).split('.')[0].replace(/\\/g, '/');
            entries[pathname] = entry.replace(/^.\/src\//, './src/js/').replace(/.htm$|.html$/, ".js");
        });
    }
    // 增加别名JS的入口
    for (var name in config.build.alias) {
        entries[name] = [name];
    }
    // console.log(entries);
    return entries;
}
