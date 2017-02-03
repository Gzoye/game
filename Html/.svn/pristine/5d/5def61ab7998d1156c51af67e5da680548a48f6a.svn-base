<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
    			<dl class="result">
	                <dt class="result-error result-yellow">
	                    <i class="iconfont"></i>
	                </dt>
	                <dd class="result-info" id="cl">您的石嘴山银行账号***5555已被注销<br>如有疑问请致电0845-45455454</dd>
	            </dl>
	            <router-link to="/" tag="div" class="ui-btn-group">
	                <a class="ui-btn ui-yellow-btn">使用新账户登录</a>
	            </router-link>
    		</div>
    	</section>
    </div>
</template>
<script>
	import sheader from './lib/sheader'
    export default {
	  	components:{
	     	sheader 
	  	},
	  	data () {
		    return {
		      	title:"已销户通知",
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	}
    }
</script>