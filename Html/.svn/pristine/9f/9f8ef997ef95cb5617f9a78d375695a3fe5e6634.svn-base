<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
    			<div class="success">
	                <i class="iconfont success-icon"></i>
	                <p>充值成功</p>
	                <p>您的资金1000.00已转入电子账户</p>
	            </div>
	            <ul class="info-list">
	                <router-link to="/financing" tag="li" class="info-item">
	                    <img class="info-item-img" src="../images/eicon.png" alt="">
	                    <span class="fn-right">
	                        <span class="info-item-rtext">精选投资 高回报</span>
	                    <i class="iconfont"></i>
	                    </span>
	                </router-link>
	                <router-link to="/productDetail" tag="li" class="info-item">
	                    <img class="info-item-img" src="../images/shicon.png" alt="">
	                    <span class="fn-right">
	                        <span class="info-item-rtext">活期的花法 定期的收益</span>
	                    <i class="iconfont"></i>
	                    </span>
	                </router-link>
            	</ul>
            	<router-link to="/myWealth" tag="div" class="ui-btn-group">
                    <a class="ui-btn ui-yellow-btn">完成</a>
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
		      	title:"标题",
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	}
    }
</script>