<template>
<div class="title-1">
  <div class="line"></div>
  <slot></slot>
  <div class="line"></div>
</div> 
</template>
<script type='text/javascript'>
</script>
<style lang='stylus' rel='stylssheet/stylus'>
.title-1
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