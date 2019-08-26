<template>
<div class="max-w-sm rounded overflow-hidden shadow-lg m-4">

  <!-- row 1 -->
  <div class="flex m-4">
    <div class="flex-1">
      <CopyField :value = "copyFieldValue" />
    </div>
  </div>

  <!-- row 2 -->
  <div class="flex m-4">
    <div class="flex-1">

      <AutoComplete
        @selectslice="$emit('selectslice',$event)"
        :rawarray="autocompleteArray" 
        :placeholder="autocompletePlaceholder" 
        ref="autocomplete">

      </AutoComplete>
    </div>
  </div>

  <!-- row 3 -->
  <div class="flex m-4">
    <div class="flex-1">
      <Readmore>
        <template slot = "readmoreContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </template>
        <template slot = "resizeSliverContentCollapsed">
            err... read more (?)
        </template>
        <template slot = "resizeSliverContentShown">
            hide it
        </template>
      </Readmore>
    </div>
  </div>

  <!-- row 4 -->
  <div class="flex m-4">
    <div class="flex-1">
      <CheckBox 
        :flag="checkboxFlag"
        @togglecheckbox="toggleCheckbox">

      </CheckBox>
      {{ checkboxFlag }}
    </div>
  </div>

  <!-- row 5 -->
  <div class="flex m-4">
    <div class="flex-1">

      <transition name="fade">
        <Modal
          @close-modal="closeModal"
          v-show="showModal">
          <template slot="v-modal-body">
            <div id="modal-body">
              MODAL BODY!
            </div>
          </template>
        </Modal>
      </transition>
      <button @click="showModal = true">
        button vue
      </button>
    </div>
  </div>

  <!-- row 6 -->
  <div class="flex m-4">
    <div class="flex-1 overflow-hidden">
      <Pill name="testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"></Pill>
    </div>
  </div>

  <!-- row 7 -->
  <div class="flex m-4">
    <div class="flex-1">

      <MainSide 
        :collapse="mainSideCollapse"
        :sidebar-size="mainSideSidebarSize" 
        :position="mainSidePosition">
        
        <template slot="mainside-side">
          <div id="mainside-side">
            SIDE BAR
          </div>
        </template>

        <template slot="mainside-main">
          <div id="mainside-main">
            <select v-model="mainSidePosition">
              <option value="top">top</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="bottom">bottom</option>
            </select>
            width: {{ mainSideSidebarSize }}
            <input 
              type="range" 
              v-model="mainSideSidebarSize"
              min="1" 
              max="500" 
              step="1"
            />
            
            <CheckBox 
              :flag="mainSideCollapse"
              @togglecheckbox="toggleMainSideCollapse">
            </CheckBox>
          </div>
        </template>
      </MainSide>
    </div>
  </div>
</div>
</template>

<script>

import Modal from './components/modal.vue'
import Pill from './components/pill.vue'
import AutoComplete from './components/autocomplete.vue'
import CopyField from './components/copyfield.vue'
import Readmore from './components/readmore.vue'
import CheckBox from './components/checkbox.vue'
import MainSide from './components/mainside'

export default {
  name: 'App',

  components: {
    Modal, 
    Pill, 
    AutoComplete, 
    CopyField, 
    Readmore, 
    CheckBox, 
    MainSide, 
  },
  data: () => ({
    showModal: false,

    copyFieldValue: 'copyme',

    autocompleteArray: ['apple','oranges', 'banana'],
    autocompletePlaceholder: 'Type something',

    checkboxFlag: true,

    mainSideCollapse: false,
    mainSideSidebarSize: 100,
    mainSidePosition: 'bottom'
  }),
  methods: {
    toggleCheckbox: function () {
      this.checkboxFlag = !this.checkboxFlag
    },
    closeModal: function () {
      this.showModal = false
    },
    toggleMainSideCollapse: function () {
      this.mainSideCollapse = !this.mainSideCollapse
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
