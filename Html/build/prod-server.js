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
var proxyMiddleware = require('http-proxy-middleware')
var port = config.dev.port
    // 创建一个express实例
var app = express()
    // 调用webpack并把配置传递过去
var pathname = config.build.assetsRoot;
var proxyTable = config.dev.proxyTable; //代理接口
    // proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(context, proxyMiddleware(options))
})
app.use(express.static(pathname));
// 监听 8888端口，开启服务器
app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port)
    opn('http://localhost:' + port);
})
