/**
 * 
 * @authors chenshw (chenshw@seaway.net.cn)
 * @date    2016-10-21 17:14:42
 * @version $Id$
 * @description 
 * @update [user] [date] [instruction]
 */

var hotClient = require('webpack-hot-middleware/client')

// 订阅事件，当 event.action === 'reload' 时执行页面刷新
hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload()
    }
})