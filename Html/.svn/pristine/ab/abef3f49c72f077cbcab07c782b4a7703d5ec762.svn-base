<template>
<div class="form-info" v-if='isshow'>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'totast',
  props : {
     isshow: Boolean
  },
  data () {
    return {
      time  : 3000//3s自动关闭
    }
  },
  watch : {
    isshow : function(){
      var _self = this;
      if( this.isshow ){
            setTimeout(function() {
                _self.isshow = false;
            }, _self.time);
      }
    }
  }
}
</script>

