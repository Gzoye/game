<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" id="wrapper">
    		<div class="wrapper-scroll">
    			<div class="norecord" v-if="">
	                <img src="../images/error.png" alt="">
	                <p class="m-t-10">暂无记录</p>
	            </div>
	            <div @click="" class="ui-btn-groupk">
	                <a class="ui-btn">刷新</a>
	            </div>
				
				<div class="fn-hide">
					<div class="norecord">
		                <img src="../images/404.png" alt="">
		                <p class="m-t-10">很抱歉，您要找的内容迷路了......</p>
		            </div>
		            <div @click="onClickBack" class="ui-btn-groupk">
		                <a class="ui-btn">返回</a>
		            </div>
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
		      	title:"未知",
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	},
	  	methods:{
	  		onClickBack() {
		      if (this.leftOptions.preventGoBack) {
		        this.$emit('ontherback',{cc:"csw121"})
		      } else {
		      	this.$store.commit('UPDATE_DIRECTION', 'reverse');//返回效果
		        history.back()
		      }
		    }
	  	}
    }
</script>