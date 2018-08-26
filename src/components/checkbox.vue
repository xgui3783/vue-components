<template>
<div
  @click = "toggleCheckBox"
  :class = "flag ? 'checkbox-on' : 'checkbox-off'"
  class = "checkbox-root">
  <div
    :style = "getDialTransform"
    class = "checkbox-dial">
  </div>
</div>
</template>
<script>
export default {
  props: {
    flag: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleCheckBox: function (event) {
      this.$emit('togglecheckbox', event)
    }
  },
  computed: {
    getDialTransform: function () {
      return {
        transform: this.flag
          ? 'translateX(0)'
          : 'translateX(1.6em)'
      }
    }
  }
}
</script>
<style scoped>
.checkbox-root
{
  height: 2em;
  width: 3.6em;
  display: inline-block;
  border-radius: 1em;
  overflow: hidden;
  padding: 0.2em;
  box-shadow: inset 0 0.5em 0.3em -0.3em rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  transition: all 0.5s;
}

.checkbox-on
{
  background-color: rgba(0, 150, 0, 0.4);
}

.checkbox-off
{
  background-color: rgba(128, 128, 128, 0.4);
}

.checkbox-dial
{
  transition: all 0.2s;
  display: inline-block;
  width: 1.6em;
  height: 100%;
  background-color:white;
  border-radius: 1em;
  box-shadow: 0 0.5em 0.3em -0.3em rgba(0, 0, 0, 0.2);
}
</style>
