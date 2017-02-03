<template>
	<header class="ui-header">
        <span class="ui-header-left" v-if="leftOptions.showBack" @click="onClickBack">
            <i class="iconfont ui-return">&#xe630;</i>
            {{leftOptions.text}}
        </span>
        <div class="ui-header-title"><slot></slot></div>
        <span class="ui-logout" v-if="rightOptions.showMore">
            {{rightOptions.text}}
        </span>
    </header>
</template>
<script>
export default {
  name:"sheader",
  props: {
    leftOptions: {
      type: Object,
      default () {
        return {
          showBack: true,
          backText: 'Back',
          preventGoBack: false
        }
      }
    },
    title: String,
    rightOptions: {
      type: Object,
      default () {
        return {
          showMore: false
        }
      }
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
    }
  }
}
</script>