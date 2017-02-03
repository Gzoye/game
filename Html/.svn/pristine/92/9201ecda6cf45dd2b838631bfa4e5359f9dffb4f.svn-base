<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
    			<ul class="info-list">
	                <li class="info-item1" v-for="($index,item) in n">
	                    <div class="info-item-title" @click="show($index)">
	                        {{item}}.如何开通石嘴山银行电子账户？
	                        <span class="fn-right">
	                        	<i class="iconfont"></i>
	                        </span>
	                        <!-- <span class="fn-right cur" v-else>
	                        	<i class="iconfont"></i>
	                        </span> -->
	                    </div>
	                    <div class="info-item-detail" v-if="$index == i">
	                        {{item+1111}}用户注册直销银行登录后输入本人姓名、身份证号并绑定用户的同名借记卡，经石嘴山银行核查验证通过后设置电子账户交易密码，即可开通石嘴山银行电子账户。
	                    </div>
	                </li>
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
		      	title:"帮助中心",
		      	n:10,
		      	i:1,
		      	isshow:true,
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	},
	  	methods:{
	  		show (index) {
	  			this.i = index;
	  			this.isshow = ! this.isshow;
            }
	  	}
    }
</script>