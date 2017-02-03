<template>
    <div class="page">
    	<header class="ui-header index-header">
    		<router-link to="/myCenter" class="ui-header-left" id="backGo" tag="span">
		        <i class="iconfont ui-return" style="font-size: 26px">&#xe649;</i>
		    </router-link>
	        <router-link to="/message" class="ui-logout" tag="span">
	            <i class="iconfont ui-return" style="font-size: 26px">&#xe637;</i>
	        </router-link>
	    </header>
    	<section class="wrapper-content" id="wrapper" style="bottom:45px;padding-top:0;top:0;bottom: 46px;">
    	<div class="wrapper-scroll">
    		<img src="../images/img1.png" alt="">
    		<ul class="info-list">
	    		<template v-if="isLogin">
	                <router-link to="/myWealth" tag="li" class="info-item">
	                    <i class="iconfont c-dyellow"></i> 我的财富 <i class="iconfont c-gray"></i>
	                    <span class="fn-right"><span class="info-item-money">{{ user.assets | thousands("thousands")}}</span> 元</span>
	                </router-link>
	    		</template>
	    		<template v-if="!isLogin">
		            <li class="info-item info-item-login" @click="login">立即登录</li>
	    		</template>
	    	</ul>
    		<div class="index-item">
                <div class="fn-left">
                    <p class="prolist-item-org">
                        <span class="prolist-item-big">5.50</span>
                        <span class="prolist-item-percent">%</span>
                    </p>
                    <p class="prolist-item-gray">最高年利率</p>
                </div>
                <div class="fn-right">
                    <p class="index-item-title">石惠存</p> 
                    <p class="prolist-item-gray">最长存期60个月 | 1,000元 起投 <i class="iconfont"></i></p>
                    <router-link to="/productDetail" class="ui-btn index-item-btn" tag="div">
                    	现在就存
                    </router-link>
                </div>
            </div>
            <div class="index-product">
                <div class="index-product-head">
                    <img src="../images/eicon.png" class="info-item-img">
                    <router-link to="/financing" tag="span" class="index-product-more">更多</router-link>
                </div>
                <div class="index-product-body" @click='test'>
                    <img src="../images/index_product.png">
                    <div class="index-product-detail">
                        <p>预期年化收益率</p>
                        <div class="prodetail-head-big">
                            4.56<span class="index-product-small">%</span>
                        </div>
                    </div>
                    <ul class="index-product-list">
                        <li class="index-product-item">投资期限 90天</li>
                        <li class="index-product-item">起投金额 1,000.00</li>
                    </ul>
                </div>
                <router-link to="/parent/foo" class="ui-btn-groupi" tag="div">
                    <a class="ui-btn">立即投资</a>
                </router-link>
                <!--弹框组件-->
                <layer :layer-options="layer"></layer>
            </div>
        </div>
        </section>
        <footer class="ui-footer">
            <ul class="footer-list">
                <router-link to="/parent/foo" class="footer-item cur" tag="li">
                    <i class="iconfont"></i>
                    <p class="footer-title">首页</p>
                </router-link>
                <router-link to="/financing" class="footer-item" tag="li">
                    <i class="iconfont"></i>
                    <p class="footer-title">理财</p>
                </router-link>
                <router-link to="/myWealth" class="footer-item" tag="li">
                    <i class="iconfont"></i>
                    <p class="footer-title">财富</p>
                </router-link>
            </ul>
        </footer>
    </div>
</template>
<script>
	import sheader from './lib/sheader'
    import { mapState } from 'vuex'
    import layer from '../components/lib/layer'//layer引用：1.组件
    export default {
	    components:{
	        sheader, 
            layer
	    },
	    data () {
    	    return {
    	        routerTransition: {
    	           forward: 'slideRL',
    	           back: 'slideLR'
    	        },
    	        leftOptions:{
    		       showBack: true,
    	           backText: 'Back',
    	           preventGoBack: true
    		    },
                layer: {
                    isshow : false,//是否打开弹框
                    btns :[],//弹框按钮名称
                    type: '', //类型：'alert'/'confirm'/'prop'
                    message: "", //内容
                    shadeClose: false, //是否点击遮罩时关闭层
                    yes : function(){},//确认回调
                    no : function(){}//取消回调
                }
    	    }
	    },
        computed: {
            ...mapState({
                isLogin: state => state.user.isLogin,
                user:state => state.user.user
            }) 
        },
	    methods: {
            logout(){
                this.$store.dispatch('LOGOUT');
            },
            login(){
                this.$store.dispatch('LOGIN',{
                    img: "images/head.png",
                    account: "1212",
                    name: "121212",
                    phone: "186****7529",
                    assets:"1212121212"
                });
            },
            showLayer(options) {
                //layer引用：3.显示弹框
                this.layer.type = options.type;
                this.layer.message = options.message;
                this.layer.isshow = true;
                this.layer.shadeClose = options.shadeClose;
                this.layer.btns = options.btns;
                this.layer.yes = options.yes;
                this.layer.no = options.no;
            },
            test(){
                // alert("111")
                this.showLayer({
                    type : 'alert',//必填
                    message:'哈哈哈哈哈',
                    btns : ['确定'],//必填
                    yes : function(){//选填
                        alert('alert');
                    }
                })
    	    },
        },
	    created:function(){
	  	    this.$on('on-click-back', function() {
                alert("parent");
            });
	    }
    }
</script>