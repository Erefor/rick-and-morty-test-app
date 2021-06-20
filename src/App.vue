<template>
    <Header />
    <main>
      <router-view></router-view>
    </main>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components : {
    Header
  }
}
</script>

<style>

</style>