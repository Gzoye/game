<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
    			<div class="recharge b-fff">
	                <div class="fn-left">
	                    <div class="recharge-icon">
	                        <img src="../images/back_icon1.png" alt="">
	                    </div>
	                    <div class="recharge-num">
	                        <p class="recharge-backtitle">石嘴山银行</p>
	                        <p class="recharge-backnum">尾号7841</p>
	                    </div>
	                </div>
	            </div>
	            <ul class="form-cont form-center-fixed-60">
	                <li class="form-cont-item">
	                    <label for="" class="form-cont-item-title">金额</label>
	                    <div class="form-cont-item-content">
	                        <div class="ele-cont">
	                            <input type="text" maxlength="" class="ui-input" placeholder="请输入提现金额">
	                        </div>
	                    </div>
	                    <div class="form-cont-item-btn">全额提现</div>
	                </li>
	                <li class="form-cont-item">
	                    <label for="" class="form-cont-item-title">可用金额</label>
	                    <div class="form-cont-item-content">
	                        <div class="ele-cont">
	                            <span class="c-org">2,000.00元</span>
	                        </div>
	                    </div>
	                </li>
	                <li class="form-cont-item">
	                    <label for="" class="form-cont-item-title">交易密码</label>
	                    <div class="form-cont-item-content">
	                        <div class="ele-cont">
	                            <input type="text" maxlength="" class="ui-input" placeholder="请输入提现金额">
	                        </div>
	                    </div>
	                </li>
	                <li class="form-cont-item">
	                    <label for="" class="form-cont-item-title">验证码</label>
	                    <div class="form-cont-item-content">
	                        <div class="ele-cont">
	                            <input type="text" maxlength="6" class="ui-input" placeholder="短信验证码">
	                        </div>
	                    </div>
	                    <div class="form-cont-item-btn">获取验证码</div>
	                </li>
	            </ul>
	            <div class="ui-btn-group">
	                <a class="ui-btn ui-yellow-btn">提现</a>
	            </div>

	            <router-link to="/withdrawsSuccess" tag="div" class="ui-btn-group">
                    <a class="ui-btn ui-yellow-btn">提现成功btn测试1</a>
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
		      	title:"提现",
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	}
    }
</script>