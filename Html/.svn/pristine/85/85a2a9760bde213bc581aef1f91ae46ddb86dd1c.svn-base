<template>
	<div class="page" style="background-color: #f3f3f3;">

        <sheader :left-options="leftOptions">
    		<ul class="prodetail-tab">
             <router-link to="/financing" class="prodetail-tab-item" tag="li">
               石银E投
             </router-link>
	          <router-link to="/productDetail" class="prodetail-tab-item  cur" tag="li">
              石惠存
              </router-link>
	        </ul>
    	</sheader>


		 <!--  <header class="ui-header">
    		<span class="ui-header-left" @click="onClickBack">
	            <i class="iconfont ui-return">&#xe630;</i>
	        </span>
	        <ul class="prodetail-tab" >
                 <router-link to="/financing" class="prodetail-tab-item" tag="li">
               石银E投
             </router-link>
	            <router-link to="/productDetail" class="prodetail-tab-item cur" tag="li">
              石惠存
              </router-link>

	          <li class="prodetail-tab-item" v-bind:class="{cur: isActive}"  @click="productTab">石银E投</li>
	            <li class="prodetail-tab-item" v-bind:class="{cur: !isActive}" @click="productTab">石惠存</li>

	        </ul>
	    </header> -->
		<section class="wrapper-content" id="wrapper" style="padding-bottom:0.45rem">
    		<div class="wrapper-scroll">
	    		<div class="success prodetail-head">
	                <div class="prodetail-head-big">
	                    4.60
	                </div>
	                <div class="o-5">
	                    最高年利率(%)
	                </div>
	            </div>	
    			<ul class="prodetail-info-list2">
	                <li class="prodetail-info-item">
	                    <p class="prodetail-info-org">60</p>
	                    <p>最长存期(月)</p>
	                </li>
	                <li class="prodetail-info-item">
	                    <p class="prodetail-info-org">1,000</p>
	                    <p>起存金额(元)</p>
	                </li>
	            </ul>
				<div class="prodetail-tips">
	                存入10万元，相同的存期,<span class="c-org">石惠存</span>给您土豪收益
	            </div>
	            <img src="../images/rate1.png" class="b-t-1">
	            <ul class="info-list m-t-10">
	                <li class="info-item">
	                    <span class="c-000">石惠存介绍</span>
	                    <span class="fn-right"><i class="iconfont"></i></span>
	                </li>
            	</ul>
            	<router-link to="/closeNotice" tag="div" class="ui-btn-group">
	                <a class="ui-btn ui-yellow-btn">现在就存</a>
	            </router-link>
    		</div>
    	</section>
    	 <footer class="ui-footer">
            <ul class="footer-list">
                <router-link to="/"  class="footer-item" tag="li"> 
                    <i class="iconfont">&#xe60f;</i>
                    <p class="footer-title">首页</p>
                </router-link>
                <router-link to="/financing"  class="footer-item cur" tag="li"> 
                    <i class="iconfont">&#xe65b;</i>
                    <p class="footer-title">理财</p>
                </router-link>
                <router-link to="/myWealth"  class="footer-item" tag="li">
                    <i class="iconfont">&#xe6c8;</i>
                    <p class="footer-title">财富</p>
                </router-link>
            </ul>
        </footer>
    </div>
</template>
<script>
import sheader from './lib/sheader'
    export default {
        components:{
	     sheader 
	    },
	  	props: {
		    leftOptions: {
		      	type: Object,
		      	default () {
			        return {
			          showBack: false,
			          backText: 'Back',
			          preventGoBack: false
			        }
		      	}
		    }
		},
		data(){
			return{
				isActive:false
			}
		},
  		methods: {
		    onClickBack() {
		      	if (this.leftOptions.preventGoBack) {
			        this.$emit('ontherback',{cc:"csw121"})
			    } else {
		      		this.$store.commit('UPDATE_DIRECTION', 'reverse');//返回效果
		        	history.back()
		      	}
		    },
		    productTab(){
		    	this.isActive=false;
		    }
		},
	}													
</script>