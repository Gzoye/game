/**
 * 
 * @authors chenshw (chenshw@seaway.net.cn)
 * @date    2016-10-26 17:54:39
 * @version $Id$
 * @description 
 * @update [user] [date] [instruction]
 */

var path = require('path')

module.exports = {
    build: {
        // index: path.resolve(__dirname, 'dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        alias: {
            vue: path.join(__dirname, '../node_modules/vue/dist/vue.js'),
            vuex: path.join(__dirname, '../node_modules/vuex/dist/vuex.js'),
            vueRouter: path.join(__dirname, '../node_modules/vue-router/dist/vue-router.js'),
            vueResource: path.join(__dirname, '../node_modules/vue-resource/dist/vue-resource.js')
        },
        assetsPublicPath: '/',
        assetsPublicLibPath:'js/lib/',
        assetsPublicCssPath:'style/',
        assetsPublicImgPath:'images',
        productionSourceMap: true
    },
    dev: {
        port: 8001,
        proxyTable: {
        
        }
    },
}
