<template>
  <div>
    {{$route.params.name}}
  </div>
</template>

<script>
export default {
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
