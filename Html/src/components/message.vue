<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
    			<ul class="msg-list">
	                <router-link to="/messageDetail" tag="li" class="msg-list-item" v-for="i in n">
                        <div class="msg-list-item-title">我上线啦上线啦{{i}}</div>
                        <div class="msg-list-item-info">2015-8-25</div>
                        <i class="iconfont msg-list-item-icon"></i>
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
		  		n:10,
		      	title:"消息中心",
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	}
    }
</script>