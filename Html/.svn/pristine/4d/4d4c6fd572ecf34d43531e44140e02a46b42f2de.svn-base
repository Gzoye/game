<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
    			<div class="t-center">
    				<img src="../images/logo.png" style="width: 40%;margin-top: 30px">
    				<p class="m-t-10">V1.0.0.0</p>
    				<p class="m-t-10">客服电话：0000-1211</p>
    				<div class="ui-btn-groupk">
		                <a class="ui-btn">检测更新</a>
		            </div>
		            <div class="ui-btn-groupk">
		                <router-link to="/opinion" tag="a" class="ui-btn">意见反馈</router-link>
		            </div>
		            <img src="../images/qrcode.png" style="width: 40%;">
		            <p style="margin: 10px 0 30px;">扫一扫，下载直销银行APP</p>
    			</div>
    		</div>
    		<img src="../images/about_footer.png">
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
		      	title:"关于我们",
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	}
    }
</script>