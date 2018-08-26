<template>
<div class = "copy-field-root">
  <input ref = "inputEl" readonly v-bind:value = "value" type = "text" />
  <div
    v-bind:hidden = "!copyable"
    @click.stop = "copyToClipBoard">{{ methodGetCopyText() }}
  </div>
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'default value'
    },
    copyable: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    copiedFlag: false,
    timeoutRef: 0,
    copyBtnShown: false
  }),
  methods: {
    copyToClipBoard: function () {
      this.copiedFlag = true
      if (this.timeoutRef) {
        clearTimeout(this.timeoutRef)
      }
      setTimeout(() => {
        this.copiedFlag = false
        this.timeoutRef = 0
      }, 2000)

      this.$refs.inputEl.focus()
      this.$refs.inputEl.select()
      document.execCommand('copy', false)
    },
    methodGetCopyText: function () {
      return this.copiedFlag ? 'Copied!' : 'Copy'
    }
  }
}
</script>
<style>
.copy-field-root
{
  width: 100%;
  white-space: nowrap;
}

.copy-field-root *
{
  color:black
}

.copy-field-root > input
{
  width : 100%;
  height:2.0em;
  display: inline-block;
  vertical-align : middle;
  box-sizing: border-box;
  position : relative;

  border : solid 1px rgba(128,128,128,0.6);
  z-index: 8;
}

.copy-field-root > div:not([hidden])
{
  position : relative;
  z-index: 9;
  cursor:default;
  display: inline-block;
  box-sizing:border-box;
  margin : 0.2em;
  height : 1.6em;
  margin-left:-4em;
  font-size:100%;
  vertical-align : middle;
  text-align: center;
  font-size:0.9em;
  padding : 0.2em;

  color:rgba(0,0,0,0.8);
  border : solid 1px rgba(0,0,0,0.5);

  background-color:rgba(230,230,230,0.9);
}

.copy-field-root > div:hover
{
  background-color:rgba(240,240,240,1.0);
}
</style>
