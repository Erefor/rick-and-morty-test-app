<template>
    
    <div class="container">
      <Controls />
      <div class="row">
        <CharacterCard 
        v-for="character in array" 
        :key="character"
        />
      </div>
      <ul class="pagination center">
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
import CharacterCard from '../components/CharacterCard.vue';
import Controls from '../components/Controls.vue';
export default {
  components:{
    CharacterCard,
    Controls
  },
  data(){
    return{
      data : '',
      array : [0,1,2,3,4,5,6,7]
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
.active{
  background-color: gray !important;
}
</style>