<template>
    <div class="container">
      <div class="progress" v-if="loading == true">
        <div class="indeterminate"></div>
      </div>
      <Controls 
      :originArray="originArray" 
      @filterOrigin="filtrarOrigin"
      @filterStatus="filtrarStatus"
      @getCharacter="getCharacterFromInput"
      />
      <div class="row">
        <h2 v-if="!isThereData">No results</h2>
        <CharacterCard 
        v-for="(character, index) in filterCharacters" 
        :key="index"
        :name="character.name"
        :estado="character.status"
        :origen="character.origin.name"
        :img="character.image"
        :id="character.id"
        />
      </div>
      <ul class="pagination center">
        <li class="waves-effect"><a href="#!"><i class="material-icons" @click="getPrevPageData">chevron_left</i></a></li>
        <li class="waves-effect"><a>{{prevPageInt}}</a></li>
        <li class="waves-effect active"><a href="#!">{{currentPage}}</a></li>
        <li class="waves-effect"><a href="#!">{{nextPageInt}}</a></li>
        <li class="waves-effect"><a href="#!" @click="getNextPageData"><i class="material-icons">chevron_right</i></a></li>
      </ul>
      <div class="progress" v-if="loading == true">
        <div class="indeterminate"></div>
      </div>
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
  mounted(){
    this.loading = true;
    this.getData(0);  
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
      nextPageInt : 0,
      currentPage : 1,
      prevPageInt: 0,
      loading : false,
      isThereData : true,
      characterName : ''
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
    async getCharacterFromInput(characterData){
      this.characterName = characterData['name'];
      this.getData(1)
    },
    async getNextPageData(){
      this.getData(2);
    },
    async getPrevPageData(){
      this.getData(3);
    },
    async getData(check){
      this.loading = true;
      switch (check) {
        case 0:
          //Start
          this.url = "https://rickandmortyapi.com/api/character";
          break;
        case 1:
          //Get Character from input
          this.filterCharacters = []; this.originArray = []; this.allCharacters = [];
          this.url = `https://rickandmortyapi.com/api/character/?name=${this.characterName}`;
          break;
        case 2:
          //Next Page
          this.url = this.nextPage;
          break;
        case 3:
          //Prev Page
          this.url = this.previusPage;
          break;
        default:
          break;
      }
      let resp = await this.axios.get(this.url);
      console.log(resp.status);
      if(resp.status === 200){
        this.isThereData = true;
        this.loading = false;
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
        this.nextPageInt = this.nextPage.match(/\d+/)[0];
        this.prevPageInt = this.previusPage.match(/\d+/)[0];
        this.currentPage = this.nextPageInt -1;
        this.previusPage === null ? this.currentPage = this.nextPageInt -1 : this.currentPage;
        this.nextPage === null ? this.currentPage = this.prevPageInt + 1 : this.currentPage;
      }else if(resp === null){
        console.log(resp.status);
        this.loading = false;
        this.isThereData = true;
      }
    },
  }
}
</script>

<style>
.active{
  background-color: gray !important;
}
</style>