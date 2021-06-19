<template>
  <div class="container">
    <h1>Hola</h1>
    <button @click="fetchData" class="btn">Fetch Data</button>
    <character-card></character-card>
    <ul class="pagination">
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <li class="active"><a href="#!">1</a></li>
    <li class="waves-effect"><a href="#!">2</a></li>
    <li class="waves-effect"><a href="#!">3</a></li>
    <li class="waves-effect"><a href="#!">4</a></li>
    <li class="waves-effect"><a href="#!">5</a></li>
    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
  </ul>
  </div>
  
</template>

<script>
import CharacterCard from './CharacterCard.vue';
export default {
  components:{
    CharacterCard
  },
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