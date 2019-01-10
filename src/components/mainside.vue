<template>
<div :style = "containerStyle" class = "container">
  <div v-if = "!collapse" :style = "sidebarStyle" class = "side-bar">
    <slot name = "mainside-side">
    </slot>
  </div>
  <div class = "main-content">
    <slot name = "mainside-main">
    </slot>
  </div>
</div>
</template>
<script>
export default {
  computed: {
    containerStyle: function () {
      return {
        flexDirection: this.position === 'top'
          ? 'column'
          : this.position === 'bottom'
            ? 'column-reverse'
            : this.position === 'right'
              ? 'row-reverse'
              : 'row'
      }
    },
    sidebarStyle: function () {
      return {
        flex: `0 0 ${this.sidebarSize}px`
      }
    }
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    },
    position: {
      type: 'top' | 'left' | 'bottom' | 'right',
      default: 'left'
    },
    sidebarSize: {
      type: Number | String,
      default: 50
    },
    /**
     * NYI
     */
    animation: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.container
{
  width: 100%;
  height: 100%;
  display: flex;
}
.main-content
{
  flex: 1 1 0px;
}

</style>
