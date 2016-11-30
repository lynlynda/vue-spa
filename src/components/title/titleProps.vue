<template>
<div class="title">
  <div class="line"></div>
  <div class="text">{{tt}}</div>
  <div class="line"></div>
</div> 
</template>
<script type='text/ecmascript-6'>
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
.title
  display: flex;
  width: 80%
  margin: 28px auto 24px auto
  .line
    flex: 1
    position: relative
    top: -6px
    border-bottom: 1px solid rgba(255,255,255,0.2)
  .text
    padding: 0 12px
    font-size: 12px
    font-weight: 700

</style>