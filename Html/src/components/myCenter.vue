<template>
    <div class="page">
    	<sheader :left-options="leftOptions">
    		{{title}}
    	</sheader>
    	<section class="wrapper-content">
	        <div class="wrapper-scroll">
	            <div class="org-head my">
	                <div class="my-head">
	                    <span class="my-name" v-if="isLogin">{{user.name}}</span>
	                    <div class="my-head-img">
	                        <img :src="user.img">
	                    </div>
	                </div>
	                <div class="my-btn">
	                    <div class="my-ui-btn" v-if="!isLogin" @click="login">
	                        立即登录
	                    </div>
	                    <template v-if="isLogin">
		                    <p class="my-phone">
		                        <i class="iconfont">&#xe66b;</i>{{user.phone}}<!-- 157****878 -->
		                    </p>
		                    <p>
		                        <i class="iconfont">&#xe644;</i> 电子账户 {{user.account}}
		                        <span><i class="iconfont">&#xe636;</i> <span class="t-uline">复制</span></span>
		                    </p>
	                    </template>
	                </div>
	            </div>
            <ul class="info-list">
                <router-link to="/device"  class="info-item" tag="li"> 
                    <i class="iconfont info-item-left c-green">&#xe628;</i>设备管理<span class="fn-right"><i class="iconfont">&#xe60a;</i></span>
                </router-link>
                <router-link to="/" class="info-item" tag="li"> 
                    <i class="iconfont info-item-left c-blue">&#xe606;</i>安全中心<span class="fn-right"><i class="iconfont">&#xe60a;</i></span>
                </router-link>
                <router-link to="/help" class="info-item" tag="li"> 
                    <i class="iconfont info-item-left c-red">&#xe6d7;</i>帮助中心<span class="fn-right"><i class="iconfont">&#xe60a;</i></span>
                </router-link>
                <router-link to="/about" class="info-item" tag="li"> 
                    <i class="iconfont info-item-left c-yellow">&#xe667;</i>关于我们<span class="fn-right"><i class="iconfont">&#xe60a;</i></span>
                </router-link>
                <router-link to="/" class="info-item" tag="li"> 
                    <i class="iconfont info-item-left c-green">&#xe629;</i>分享给好友<span class="fn-right"><i class="iconfont">&#xe60a;</i></span>
                </router-link>
            </ul>
              <div class="ui-btn-group" v-if="isLogin">
                <a class="ui-btn ui-org-btn" @click="logout">退出</a>
            </div>
	        </div>
   		</section>
   		<footer class="ui-footer">
	        <ul class="footer-list">
	            <router-link to="/"  class="footer-item" tag="li"> 
	                <i class="iconfont">&#xe60f;</i>
	                <p class="footer-title">首页</p>
	            </router-link>
	            <router-link to="/financing"  class="footer-item" tag="li"> 
	                <i class="iconfont">&#xe65b;</i>
	                <p class="footer-title">理财</p>
	            </router-link>
	             <router-link to="/myWealth"  class="footer-item" tag="li">
	                <i class="iconfont">&#xe6c8;</i>
	                <p class="footer-title">财富</p>
	            </router-link>
	        </ul>
        </footer>
    </div>
</template>
<script>
	import sheader from './lib/sheader'
	import { mapState } from 'vuex'
    export default {
	  components:{
	     sheader 
	  },
	  data () {
	    return {
	      title:"我的",
	      leftOptions:{
		      showBack: true,
	          backText: 'Back',
	          preventGoBack: false
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
	      	 this.$store.dispatch('LOGOUT')
	      },
	      login(){
	      	 this.$store.dispatch('LOGIN',{
		        img: "images/head.png",
		        account: "1212",
		        name: "121212",
		        phone: "186****7529",
		        assets:"1212121212"
			 });
	      } 
	  }
    }
</script>