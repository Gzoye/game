<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
	    		<div class="m-10">
	    			<div class="bankcard">
	                    <div class="bankcard-title">
	                        <span class="bankcard-title-bank">
	                            <img class="back-logo" src="../images/back_logo.png" alt="">
	                                |
	                                直销银行
	                            </span>
	                        <span class="bankcard-title-right">*蘑菇</span>
	                    </div>
	                    <div class="bankcard-body">
	                        <div class="bankcard-body-left">
	                            <p class="bankcard-small">账户余额</p>
	                            <p class="bankcard-num">￥2,08900.03</p>
	                        </div>
	                        <div class="bankcard-body-right">
	                            <p class="bankcard-small">账户可用余额</p>
	                            <p class="bankcard-num">￥2,089.03</p>
	                        </div>
	                    </div>
	                    <div class="card-number">
	                        6221 2601 0001 8988 930
	                        <span class="fn-right">
	                            <i class="iconfont"></i><span class="t-uline"> 复制</span>
	                        </span>
	                    </div>
	                </div>
	    		</div>
    			<ul class="accunt-list">
	                <router-link to="/" tag="li" class="accunt-item">
	                    <p><i class="iconfont c-green"></i></p>
	                    <p>交易明细</p>
	                </router-link>
	                <router-link to="/" tag="li" class="accunt-item">
	                    <p class=""><i class="iconfont c-purpel"></i></p>
	                    <p>我的银行卡</p>
	                </router-link>
	            </ul>
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
		      	title:"电子账户",
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	}
    }
</script>