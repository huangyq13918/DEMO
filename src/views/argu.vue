<template>
  <div>
    {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'song'
    }
  },
  data () {
    return {
      //
    }
  },
  mounted () {
    console.log(this.$route.params)
  }
}
</script>
