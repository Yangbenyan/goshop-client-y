<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import FooterGuide from './components/FooterGuide/FooterGuide.vue';
  import {reqFoodTypes} from './api';

  export default {
    mounted(){
      this.getAddress()
      this.getUserInfo()
    },
    components: {
      FooterGuide
    },
    methods: {
      ...mapActions(['getAddress', 'getUserInfo'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylu">
  *
    touch-action pan-y
  #app
    width 100%
    height 100%
    background-color #f5f5f5
</style>