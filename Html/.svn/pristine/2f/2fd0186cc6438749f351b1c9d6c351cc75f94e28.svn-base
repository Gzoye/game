<template>
    <div class="page">
    	<sheader :left-options="leftOptions">
    		{{title}}
    	</sheader>
    	<section class="wrapper-content" id="wrapper">
    	<div class="wrapper-scroll">
    	<p>parent</p>
        <p>
        	<router-link to="/parent/foo">Go to Foo</router-link>
		    <router-link to="/">Go to index</router-link>
		    <router-link to="/app/1221">Go to app</router-link>
        </p>
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
	      routerTransition: {
	        forward: 'slideRL',
	        back: 'slideLR'
	      },
	      title:"parent",
	      leftOptions:{
		      showBack: true,
	          backText: 'Back',
	          preventGoBack: false
		   }
	    }
	  },
	  methods: {
	     
	  },
	  created:function(){
	  	console.log("12312")
	  	this.$on('on-click-back', function() {
             alert("user");
         });
	  }
    }
</script>