<template>
    <div class="container">
      <Controls 
      :originArray="originArray" 
      @filterOrigin="filtrarOrigin"
      @filterStatus="filtrarStatus"
      @getCharacter="getCharacterFromInput"
      />
      <div class="row">
        <CharacterCard 
        v-for="(character, index) in filterCharacters" 
        :key="index"
        :name="character.name"
        :estado="character.status"
        :origen="character.origin.name"
        :img="character.image"
        @click="goToDetails(character)"
        />
      </div>
      <ul class="pagination center">
        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
        <li class="waves-effect active"><a href="#!">1</a></li>
        <li class="waves-effect"><a href="#!">2</a></li>
        <li class="waves-effect"><a href="#!">3</a></li>
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
  async mounted(){
    let resp = await this.axios.get('https://rickandmortyapi.com/api/character');
    this.data = resp.data;
    this.allCharacters = this.data['results'];
    this.nextPage = this.data['info']['next'];
    this.previusPage = this.data['info']['prev'];
    for(let character in this.allCharacters){
      this.originArray.push(this.allCharacters[character].origin.name) 
    }
    let array = new Set(this.originArray);
    this.originArray = [...array];
    this.filterCharacters = this.allCharacters;
  },
  data(){
    return{
      data : '',
      allCharacters : [],
      filterCharacters : [],
      statusArray : [],
      originArray : [],
      previusPage : '',
      nextPage : '',
      isThereData : true,
    }
  },
  methods:{
    filtrarOrigin(e){
      if(e.status === 'All' && e.origin === 'All'){
        this.filterCharacters = this.allCharacters;
      
      }else if(e.status === 'All'){
        this.filterCharacters = this.allCharacters.filter((character)=> character.origin.name === e.origin);
      }else if(e.origin === 'All'){
        this.filterCharacters = this.allCharacters.filter((character)=> character['status'] === e.status);
      }else{
        
        this.filterCharacters = this.allCharacters.filter((character)=> character.origin.name === e.origin && character['status'] === e.status);
      }
    },
    filtrarStatus(e){
      if(e.status === 'All' && e.origin === 'All'){
        this.filterCharacters = this.allCharacters;
      }else if(e.origin === 'All'){
        this.filterCharacters = this.allCharacters.filter((character)=> character['status'] === e.status);
      }else if(e.status === 'All'){
        this.filterCharacters = this.allCharacters.filter((character)=> character.origin.name === e.origin);
      }else{
        this.filterCharacters = this.allCharacters.filter((character)=> character['status'] === e.status && character.origin.name === e.origin );
      }
    },
    goToDetails(character){
      this.$store.state.characterId = character.id;
      this.$router.push('/character');
    },
    async getCharacterFromInput(character){
      this.filterCharacters = []; this.originArray = []; this.allCharacters = [];
      let data = await this.axios.get(`https://rickandmortyapi.com/api/character/?name=${character.name}`);
      console.log(data);
      this.filterCharacters = data.data['results'];
      for(let character in this.filterCharacters){
      this.originArray.push(this.filterCharacters[character].origin.name) 
      }
      let array = new Set(this.originArray);
      this.originArray = [...array];
    }
  }
}
</script>

<style>
.active{
  background-color: gray !important;
}
</style>