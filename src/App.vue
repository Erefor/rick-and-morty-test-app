<template>
  <h1>Hola</h1>
  <button @click="fetchData">Fetch Data</button>
</template>

<script>
export default {
  data(){
    return{
      data : ''
    }
  },
  methods:{
    async fetchData(){
      let resp = await this.axios.get('https://rickandmortyapi.com/api/character');
      this.data = resp.data;
      console.log(this.data['results']);
    }
  }
}
</script>

<style>

</style>