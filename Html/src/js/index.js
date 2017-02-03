/**
 * 
 * @authors chenshw (chenshw@seaway.net.cn)
 * @date    2016-11-14 13:43:28
 * @version $Id$
 * @description 
 * @update [user] [date] [instruction]
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../vuex/index'
import Index from '../components/index'
import App from '../components/app'
import Parent from '../components/parent'
import MyTest from '../components/myTest'
import Financing from '../components/financing' //理财产品列表
import MyCenter from '../components/myCenter' //个人中心
import MyWealth from '../components/myWealth' //我的财富
import ProductDetail from '../components/productDetail' //石惠存详情
import Message from '../components/message' //消息列表
import MessageDetail from '../components/messageDetail' //消息详情
import Account from '../components/account' //电子账户
import Recharge from '../components/recharge' //充值
import RechargeSuccess from '../components/rechargeSuccess' //充值成功
import Withdraws from '../components/withdraws' //提现
import WithdrawsSuccess from '../components/withdrawsSuccess' //提现成功
import MyCard from '../components/myCard' //我的银行卡
import Trade from '../components/trade' //交易列表
import CloseNotice from '../components/closeNotice' //销户通知
import TheError from '../components/error' //错误页面
import Help from '../components/help' //帮助
import Opinion from '../components/opinion' //意见反馈
import About from '../components/about' //关于我们
import Device from '../components/device' //设备管理

require("../style/base.css");
require("../style/iconfont.css");
require("../style/style.css");
require("../style/page.css");
require("../style/layer.css");
// 务必在加载 Vue 之后，立即同步设置以下内容
Vue.config.devtools = true
Vue.config.errorHandler = function(err, vm) {
    // handle error
    console.log("错误信息：" + err);
    console.log(vm)
}


// 千分位
Vue.filter('thousands', function(value, format) {
    var RMB = null;
    if (isNaN(value)) {
        RMB = 0;
    } else {
        RMB = (Number(value)).toFixed(2); //分转换成元保留两位小数
        switch (format) {
            case "thousands":
                RMB = (RMB + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
                break;
            case "tenthousand":
                RMB = parseInt(RMB) >= 10000 ? (parseInt(RMB) / 10000) + "万" : parseInt(RMB);
                break;
            default:
                RMB = RMB;
        }
    }
    return RMB
})



const inBrowser = typeof window !== 'undefined'
const UA = inBrowser && window.navigator.userAgent.toLowerCase()
const isIE = UA && /msie|trident/.test(UA)
const isIE9 = UA && UA.indexOf('msie 9.0') > 0
const isEdge = UA && UA.indexOf('edge/') > 0
const isAndroid = UA && UA.indexOf('android') > 0
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
const isWechat = /micromessenger/i.test(UA)
Vue.mixin({
    created: function() {
        this.$device = {
            isAndroid,
            isIOS,
            isWechat
        }
    },
    activated: function() {
        // console.log("当前："+this.$route.path)
        let history = window.sessionStorage;
        let top = history.getItem(this.$route.path) ? JSON.parse(history.getItem(this.$route.path)).top : 0;
        if (store.state.direction !== "forward") {
            if (this.$device.isIOS) {
                // console.log(this.$el);
                // console.log(this.$el.getElementsByTagName('section'));
                // this.$el.getElementsByClassName('.wrapper-content').scrollTop=top;
                // document.getElementById(this.uuid).scrollTop=top;
                this.$el.getElementsByTagName('section')[0].scrollTop = top;
                // console.log(document.getElementsByClassName("wrapper-content")[0]);
            } else {
                document.body.scrollTop = top;
            }
        }
    }
})
Vue.use(VueRouter)
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        console.log(to)
            // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
            // new navigation.
            // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        console.log(position)
        return position
    }
}
const router = new VueRouter({
    routes: [{
                path: '/',
                component: Index
            }, //首页
            {
                path: '/myCenter',
                component: MyCenter
            }, //个人中心
            {
                path: '/myWealth',
                component: MyWealth
            }, {
                path: '/financing',
                component: Financing
            }, //理财
            {
                path: '/app/:id',
                component: App
            }, //测试
            {
                path: '/parent/:pageName',
                component: Parent
            }, {
                path: '/myTest',
                component: MyTest
            }, //弹出框等组件
            {
                path: '/productDetail',
                component: ProductDetail
            }, //产品详情 
            {
                path: '/message',
                component: Message
            }, //消息中心
            {
                path: '/messageDetail',
                component: MessageDetail
            }, //消息详情
            {
                path: '/account',
                component: Account
            }, //电子账户 
            {
                path: '/recharge',
                component: Recharge
            }, //充值
            {
                path: '/rechargeSuccess',
                component: RechargeSuccess
            }, //充值成功
            {
                path: '/withdraws',
                component: Withdraws
            }, //提现
            {
                path: '/withdrawsSuccess',
                component: WithdrawsSuccess
            }, //提现成功
            {
                path: '/myCard',
                component: MyCard
            }, //我的银行卡
            {
                path: '/trade',
                component: Trade
            }, //交易明细
            {
                path: '/closeNotice',
                component: CloseNotice
            }, //销户通知
            {
                path: '/error',
                component: TheError
            }, //错误未知
            {
                path: '/help',
                component: Help
            }, //帮助中心
            {
                path: '/opinion',
                component: Opinion
            }, //意见反馈
            {
                path: '/about',
                component: About
            }, //关于我们
            {
                path: '/device',
                component: Device
            } //设备管理
        ]
        // ,
        // mode: 'history',
        // base: __dirname,
        // scrollBehavior
})



let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', '{}')
var vues = new Vue();
const commit = store.commit || store.dispatch
router.beforeEach((to, from, next) => {
    var toPage = history.getItem(to.path)
    var fromPage = history.getItem(from.path);
    // console.log(fromPage);
    var OfromPage = fromPage ? JSON.parse(fromPage) : {};
    OfromPage["top"] = 0;
    // console.log(OfromPage)
    if (Vue.util.isIOS) {
        OfromPage.top = document.getElementsByClassName("wrapper-content")[0] ? document.getElementsByClassName("wrapper-content")[0].scrollTop : 0;
    } else {
        OfromPage.top = document.body.scrollTop;
    }
    history.setItem(from.path, JSON.stringify(OfromPage))

    if (toPage) {
        // if (toIndex > fromIndex) {
        //     commit('UPDATE_DIRECTION', 'forward')
        // } else {
        //     commit('UPDATE_DIRECTION', 'reverse')
        // }
    } else {
        ++historyCount
        history.setItem('count', historyCount);
        let pageInfo = {
            historyCount: historyCount,
            top: 0,
        };
        to.path !== '/' && history.setItem(to.path, JSON.stringify(pageInfo));
        // commit('UPDATE_DIRECTION', 'forward')
    }
    // commit('UPDATE_LOADING', true)
    // setTimeout(next, 50)
    next();
})
router.afterEach((to, from) => {
    // console.log("top:" + top)
    setTimeout(function() {
        commit('UPDATE_DIRECTION', 'forward')
    }, 400);
})

new Vue({
    store,
    router,
    computed: {
        systemclass() {
            return Vue.util.isIOS ? "ios" : "";
        },
        direction() {
            return store.state.direction
        }
    },
    watch: {
        "$route": function($route) {
            // console.log($route)
        }
    }
}).$mount('#app')