<template>
<div @click.stop.prevent = "$emit('select-pill')" class = "v-pill-container">
  <span class = "v-pill-name">{{ name }}</span>
  <span v-if = "closable" @click.stop.prevent = "$emit('remove-pill')" class = "v-pill-remove">&times;</span>
</div>
</template>

<script>
module.exports = {
  props: {
    name: {
      type: String,
      default: 'Untitled'
    },
    closable: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
div.v-pill-container
{
  display:inline-block;
  white-space: nowrap;
  margin:5px;
  padding:0.2em 0.6em;
  border-radius: 0.8em;
}

div.v-pill-container
{
  cursor: default;
  transition: all 300ms;
  background-color:rgba(50,50,50,0.2);
}

div.v-pill-container:hover
{
  background-color:rgba(150,150,150,0.2);
}

span.v-pill-name
{
  cursor: default;
  display:inline-block;
}
span.v-pill-remove
{
  cursor: default;
  display:inline-block;
}

span.v-pill-remove:hover
{
  font-weight: 900;
  color:rgba(200,30,30,1);
}
</style>
