<template>
	<div class="page">
		<sheader :left-options="leftOptions">
	    	{{title}}
	    </sheader>
		<section class="wrapper-content" :id="uuid">
    		<div class="wrapper-scroll">
    			<ul class="date">
	                <li class="date-item date-input">
	                    <p class="c-gray"><i class="iconfont"></i> 起始日期</p>
	                    <p>
	                        <input type="text" name="" id="" value="2016-02-05">
	                    </p>
	                </li>
	                <li class="date-item date-icon">
	                    <i class="iconfont"></i>
	                </li>
	                <li class="date-item date-input">
	                    <p class="c-gray"><i class="iconfont"></i> 结束日期</p>
	                    <p>
	                        <input type="text" name="" id="" value="2016-02-05">
	                    </p>
	                </li> 
	                <li class="date-item ">
	                    <div class="date-btn">
	                        确定
	                    </div>
	                </li>
	            </ul>
	            <div v-if="n>0">
	            	<ul class="msg-list msg-list1 m-t-10">
		                <li class="msg-list-item" v-for="i in n">
		                    <div class="msg-list-item-title">{{i}}存入 石惠存</div>
		                    <div class="msg-list-item-info">2015-8-25 16:20:11</div>
		                    <span class="msg-list-item-icon">1,000.00元</span>
		                </li>
		            </ul>
		            <div class="ui-fresh-inner"><span class="ui-fresh-text">上拉加载更多...</span></div>
	            </div>
	            <div class="norecord" v-else>
	                <img src="../images/norecord.png" alt="">
	                <p>暂无记录</p>
	            </div>
    		</div>
    	</section>
    </div>
</template>
<script>
	import sheader from './lib/sheader'
    import { upDownScroll } from '../js/lib/scroll'
    export default {
	  	components:{
	     	sheader 
	  	},
	  	data () {
		    return {
		      	title:"交易明细",
		      	n:10,
		      	leftOptions:{
			      	showBack: true,
		          	backText: 'Back',
		          	preventGoBack: false
			   	}
		    }
	  	},
	  	methods: {
	        testup(){
	           	// this.Scroll.refresh(); // 完成刷新
	           	// this.Scroll.noIscroll();// 无数据
	           	var _self=this;
	           	if(_self.n>=50){
		            setTimeout(()=>{
		             	_self.Scroll.noIscroll();
		           	} ,1000)
	              	return;
	           	}
	           	setTimeout(()=>{
	              	_self.n=_self.n+15;
	                _self.Scroll.refresh();
	           	} ,1000)
	           
	        },
	        testdown(){

	        }
	  	},
	  	created:function(){
           	this.uuid = "V"+Math.random().toString(36).substring(2, 10)+new Date().getTime();
	  	},
      	mounted:function(){
           	this.Scroll=new upDownScroll(this.testdown,this.testup,this.uuid);
      	}
     
    }
</script>