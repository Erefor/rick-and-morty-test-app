<template>
    <div class="container">
      <Controls 
      :originArray="originArray" 
      @filterOrigin="filtrarOrigin"
      @filterStatus="filtrarStatus"
      @getCharacter="getCharacterFromInput"
      />
      <div class="row">
        <h2 v-if="!validateArray">No data</h2>
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
        <li class="waves-effect"><a href="#!"><i class="material-icons" @click="getPrevPageData">chevron_left</i></a></li>
        <li class="waves-effect"><a href="#!">prev</a></li>
        <li class="waves-effect active"><a href="#!">1</a></li>
        <li class="waves-effect"><a href="#!">next</a></li>
        <li class="waves-effect"><a href="#!" @click="getNextPageData"><i class="material-icons">chevron_right</i></a></li>
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
    let resp = await this.axios.get(this.url);
    if(resp.status === 200){
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
    }else{
      this.isThereData = false;
    }
    
  },
  data(){
    return{
      url : 'https://rickandmortyapi.com/api/character',
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
      if(data.status === 200){
        this.allCharacters = data.data['results'];
        this.filterCharacters = data.data['results'];
        for(let character in this.filterCharacters){
        this.originArray.push(this.filterCharacters[character].origin.name) 
        }
        let array = new Set(this.originArray);
        this.originArray = [...array];
      }else{
        this.isThereData = false;
      }
      
    },
    async getNextPageData(){
      let resp = await this.axios.get(this.nextPage);
      if(resp.status === 200){
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
      }else{
        this.isThereData = false;
      }
    },
    async getPrevPageData(){
      let resp = await this.axios.get(this.previusPage);
      if(resp.status === 200){
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
      }else{
        this.isThereData = false;
      }
    }
  },
  computed:{
    validateArray(){
      if(this.filterCharacters.lenght === null || this.filterCharacters === null){
        return false;
      }else{
        return true;
      }
    }
  }
}
</script>

<style>
.active{
  background-color: gray !important;
}
</style>