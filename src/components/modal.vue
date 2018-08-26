<template>
<div>
  <div class = "v-modal-container">
    <div
      ref = "screen"
      v-on:click = "$emit('close-modal')"
      class = "v-modal-screen">
    </div>
    <div
      v-bind:style = "{top:contentContainerTop,left:contentContainerLeft,width:contentContainerWidth,height:contentContainerHeight,}"
      class = "v-modal-content-container">
      <div
        ref = "content"
        class = "v-modal-content">
        <div class = "v-modal-header">
          <slot name = "v-modal-header">
          </slot>
        </div>
        <div class = "v-modal-body">
          <slot name = "v-modal-body">
          </slot>
        </div>
        <div class = "v-modal-footer">
          <slot name = "v-modal-footer">
          </slot>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    top: Number,
    left: Number
  },
  data: () => ({
    show: {
      type: Boolean,
      default: false
    }
  }),
  computed: {
    contentContainerLeft: function () {
      return this.top && this.left && this.$refs.content && this.$refs.screen ? Math.min(this.left, this.$refs.screen.clientWidth - this.$refs.content.clientWidth) + 'px' : `0px`
    },
    contentContainerTop: function () {
      return this.top && this.left && this.$refs.content && this.$refs.screen ? Math.min(this.top, this.$refs.screen.clientHeight - this.$refs.content.clientHeight) + 'px' : `0px`
    },
    contentContainerWidth: function () {
      return this.top && this.left && this.$refs.content && this.$refs.screen ? 'auto' : `100%`
    },
    contentContainerHeight: function () {
      return this.top && this.left && this.$refs.content && this.$refs.screen ? 'auto' : `100%`
    }
  }
}
</script>
<style scoped>
.v-modal-container
{
  top: 0;
  width:100%;
  height:100%;
  position : absolute;
  z-index:999;
}
.v-modal-screen
{
  top : 0;
  position : absolute;
  width:100%;
  height:100%;
  background-color:rgba(30,30,30,0.2);
}

.v-modal-content-container
{
  top : 0;
  position : absolute;
  display : flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  pointer-events: none;
}
.v-modal-content
{
  flex : 0 0 auto;
  pointer-events: all;
}

</style>
