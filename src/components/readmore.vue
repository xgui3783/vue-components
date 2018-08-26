<template>
<div class = "readmore-container">
  <div :style = "{ height : computedHeight }" class = "readmore-content">
    <div ref = "readmoreContentContainer">
      <slot name = "readmoreContent"></slot>
    </div>
  </div>
  <div @click = "toggle" class = "readmore-sliver">
    <slot v-if = "collapsed" name = "resizeSliverContentCollapsed">
    </slot>
    <slot v-if = "!collapsed" name = "resizeSliverContentShown">
    </slot>
  </div>
</div>
</template>
<script>
export default {
  props: {
    collapsedHeight: {
      type: Number,
      default: 25
    }
  },
  data: () => ({
    collapsed: {
      type: Boolean,
      default: true
    },
    actualHeight: {
      type: Number,
      default: 25
    }
  }),
  mounted: function () {
    this.actualHeight = this.$refs.readmoreContentContainer.clientHeight
  },
  methods: {
    toggle: function () {
      this.collapsed = !this.collapsed
    }
  },
  computed: {
    computedHeight: function () {
      return `${this.collapsed ? this.collapsedHeight : this.actualHeight}px`
    }
  }
}
</script>
<style scoped>
.readmore-content
{
  transition: all 0.3s;
  overflow-y : hidden;
}
.readmore-sliver
{
  min-height: 0.5em;
  transition: all 0.3s;
  background-color: rgba(128,128,128,0.2);
}
.readmore-sliver:hover
{
  transform: translateY(-2px);
  background-color: rgba(128,128,128,0.4);
}
</style>
