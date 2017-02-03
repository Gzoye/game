<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
    			<dl class="msg-info">
	                <dt class="msg-info-head">
	                    <p class="msg-info-title">消息1</p>
	                    <p class="msg-info-time">2015-8-25</p>
	                </dt>
	                <dd class="msg-info-cont">
	                    系统升级中，系统升级中，系统升级中，是不是超级讨厌，对，我也是，你只要等等就好，去喝杯茶吧，我继续加班啦
	                </dd>
	            </dl>
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
		      	title:"消息详情",
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	}
    }
</script>