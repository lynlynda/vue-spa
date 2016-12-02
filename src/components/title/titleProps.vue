<template>
<div class="title-1">
  <div class="line"></div>
  <div class="text">{{tt}}</div>
  <div class="line"></div>
</div> 
</template>
<script type='text/javascript'>
export default {
 data() {
  return {
    content: ''
  };
 },
 props: {
    cc: {
      type: [String, Number]
    }
 },
 computed: {
  tt() {
    this.content = this.cc;
    return this.content;
  },
  yh() {
    return this.content[1];
  }
 }
};
</script>
<style lang='stylus' rel='stylssheet/stylus'>


</style>