/**
 * 
 * @authors chenshw (chenshw@seaway.net.cn)
 * @date    2016-10-21 15:31:56
 * @version $Id$
 * @description 
 * @update [user] [date] [instruction]
 */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var opn = require('opn');
var config = require('./config')
var webpackConfig = require('./webpack.dev.conf');
var proxyMiddleware = require('http-proxy-middleware')
var port = config.dev.port
    // 创建一个express实例
var app = express()
    // 调用webpack并把配置传递过去
var compiler = webpack(webpackConfig)


var proxyTable = config.dev.proxyTable; //代理接口

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})
var hotMiddleware = require('webpack-hot-middleware')(compiler)

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})
    // proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    console.log(context)
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(context, proxyMiddleware(options))
})

// 注册中间件
app.use(devMiddleware)
    // 注册中间件
app.use(hotMiddleware)

// 监听 8888端口，开启服务器
app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port)
    opn('http://localhost:' + port);
})
