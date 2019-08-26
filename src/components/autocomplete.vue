<template>
<div class="autocomplete-container">
  <input
    ref="input"
    v-bind="$attrs"
    @keydown.stop="hitEnter"
    type="text"
    autocomplete="off"
    @focus="showSuggestions = true"
    @blur="showSuggestions = false"
    v-model="typedText"
    :placeholder="placeholder"/>
  <transition name="fade">
    <div v-if="showSuggestions" class="autocomplete-suggestion-container">
      <div
        @mousedown="selectSlice(item)"
        class="autocomplete-suggestions"
        :class="{active : ((highlightIndex % filteredArray.length) === index)}"
        v-bind:key="index"
        v-for="(item,index) in filteredArray">
        {{ item }}
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    searchFromStart: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Start typing to search ...'
    },
    rawarray: {
      type: Array,
      default: () => ([])
    },
    rendermax: {
      type: Number,
      default: 25
    }
  },
  data: () => ({
    showSuggestions: false,
    typedText: '',
    highlightIndex: 0
  }),
  methods: {
    selectSlice: function (item) {
      this.$emit('selectslice', item)
    },
    hitEnter: function () {
      /**
       * TODO why .stop ?
       */
      switch (event.key) {
        case 'ArrowDown':
          this.highlightIndex += 1
          break
        case 'Escape':
          this.$refs.input.blur()
          break
        case 'ArrowUp':
          this.highlightIndex -= 1
          if (this.highlightIndex <= 0) this.highlightIndex += this.filteredArray.length
          break
        case 'Enter':
          const array = this.filteredArray.slice()
          if (array.length > 0) {
            this.typedText = ''
            const el = document.querySelector(':focus')
            if (el) el.blur()
            this.selectSlice(array[this.highlightIndex % array.length])
            this.highlightIndex = 0
          }
          break
        default:
          this.highlightIndex = 0
          break
      }
    }
  },
  computed: {
    rawArrayLowerCase: function () {
      return this.rawarray.map(item => item.toLowerCase())
    },
    typedTextLowerCase: function () {
      return this.typedText.toLowerCase()
    },
    filteredArray: function () {
      const regex = new RegExp(`${this.searchFromStart ? '^' : ''}${this.typedText}`, 'i')
      const completeMatch = this.rawarray.find(item => item.toLowerCase() === this.typedTextLowerCase)
      const othermatches = this.rawarray
        .filter(item => regex.test(item))
        .filter(item => item.toLowerCase() !== this.typedTextLowerCase)
        .filter((_, idx) => idx <= this.rendermax)
      return completeMatch
        ? [completeMatch].concat(othermatches.slice(0, othermatches.length >= this.rendermax ? othermatches.length - 1 : othermatches.length))
        : othermatches
    }
  }
}
</script>

<style scoped>
div.autocomplete-container
{
  cursor:default;
}

.autocomplete-suggestions
{
  width:100%;
  display:block;
  padding:0.1em 0.3em;
  transition: all 200ms;
  background-color:rgba(230,230,230,0.5);
}

.autocomplete-suggestions.active
{
  background-color:rgba(230,230,230,0.95);
}

.autocomplete-suggestions:hover
{
  background-color:rgba(230,230,230,0.95);
}

div.autocomplete-container:focus-within .autocomplete-suggestions
{
  display: block;
}

div.autocomplete-suggestion-container
{
  width: 100%;
  max-height:10em;
  overflow-y:auto;
  overflow-x:hidden;
  z-index:2;
}
input[type="text"]
{
  width:100%;
  height:100%;
  z-index:1;
}
</style>
