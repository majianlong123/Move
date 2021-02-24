<template>
  <div>
    <MoveList></MoveList>
  </div>
</template>

<script>
import MoveList from '@/components/MoveList'

export default {
  created() {

  },
  data() {
    return {
      active: 0,
      banner: []
    }
  },
  components: {
    MoveList
  },
  methods: {
    
  }
}
</script>

<style  scoped>

</style>
