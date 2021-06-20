<template>
  <section class="col s3 hoverable">
      <h5>{{episodeTitle}}</h5>
      <p>{{episodeDate}}</p>
  </section>
</template>

<script>
export default {
  props: ['episodeTitle','episodeDate']
}
</script>

<style scoped>
section{
  border: 1px solid grey;
  width: 16rem !important;
  margin: 0 5rem;
}
</style>