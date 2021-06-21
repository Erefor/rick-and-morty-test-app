<template>
  <nav class="row">
    <div class="nav-wrapper grey">
      <a href="#" class="brand-logo black-text" @click="goToHome">Rick and Morty</a>
    </div>
  </nav>
</template>

<script>
export default {
  methods:{
    goToHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
a{
    margin: 0 0 0 5rem;
}
</style>