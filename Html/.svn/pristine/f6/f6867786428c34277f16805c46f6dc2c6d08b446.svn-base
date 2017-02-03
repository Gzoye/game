<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
	    		<ul class="info-list">
	                <li class="info-item">
	                    <div class="info-item-text">
	                        <textarea name="" placeholder="您的意见和建议，是我们前进的动力"></textarea>
	                        <span class="info-item-corner">0/500</span>
	                    </div>
	                </li>
	                <li class="info-item">
	                    联系方式
	                    <input class="info-item-input" type="tel" name="" placeholder="(选填)手机号码/电子邮箱" id="">
	                </li>
	            </ul>
	            <div class="ui-btn-group">
	                <a class="ui-btn ui-yellow-btn">提交</a>
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
		      	title:"意见反馈",
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	}
    }
</script>