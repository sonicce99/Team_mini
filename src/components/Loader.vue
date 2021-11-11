<template>
  <div 
  :style=" {
    width: `${size}px`,
    height: `${size}px`,
    borderWidth: `${width}px`,
    borderColor: color,    
  }" 
  v-show="loading"
  class="loader"></div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false      
    },
    size: {
      type: Number,
      default: 30
    },
    color: {
      type: String,
      default: "#1976D2"
    },
    width: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style lang="scss" scoped>
  .loader{
    border-style: solid;
    border-style: 50%;
    border-top-color: rgba(black, .1) !important;
    box-sizing: border-box;
    animation: spin .8s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }    
  }
</style>