<template>
	<div class="page" style="background-color: #3b3b3b;">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
    			<div class="cards-list">
	                <div class="cards-item" style="background-color: #caa44d;">
	                    <div class="cards-item-icon">
	                        <img src="../images/back_icon1.png" alt="">
	                    </div>
	                    <div class="cards-item-info">
	                        <p class="cards-item-title">石嘴山银行<span class="cards-item-use">提现卡</span></p>
	                        <p>6123 **** **** 4555</p>
	                    </div>
	                </div>
	                <div class="cards-item b-watermelon">
	                    <div class="cards-item-icon">
	                        <img src="../images/back_icon2.png" alt="">
	                    </div>
	                    <div class="cards-item-info">
	                        <p class="cards-item-title">石嘴山银行<span class="cards-item-use">提现卡</span></p>
	                        <p>6123 **** **** 4555</p>
	                    </div>
	                </div>
	                <div class="cards-item b-dblue">
	                    <div class="cards-item-icon">
	                        <img src="../images/back_icon3.png" alt="">
	                    </div>
	                    <div class="cards-item-info">
	                        <p class="cards-item-title">石嘴山银行<span class="cards-item-use">提现卡</span></p>
	                        <p>6123 **** **** 4555</p>
	                    </div>
	                </div>
	                <div class="cards-item b-dgreen">
	                    <div class="cards-item-icon">
	                        <img src="../images/back_icon2.png" alt="">
	                    </div>
	                    <div class="cards-item-info">
	                        <p class="cards-item-title">石嘴山银行<span class="cards-item-use">提现卡</span></p>
	                        <p>6123 **** **** 4555</p>
	                    </div>
	                </div>
	                <router-link to="/recharge" tag="div" class="cards-item-add">
	                    <i class="iconfont">&#xe6e6;</i>
	                    <p>添加新的银行卡</p>
	                </router-link>
	            </div>		
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
		      	title:"我的银行卡",
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	}
    }
</script>