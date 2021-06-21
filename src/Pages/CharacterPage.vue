<template>
  <div class="container">
    <div class="progress" v-show="!loading">
        <div class="indeterminate"></div>
    </div>
    <section class="row">
      <h4 class="col s12">{{characterName}}</h4>
      <div class="col s4">
        <img :src="characterImg" class="responsive-img">
      </div>
      <div class="col s8">
        <h6><strong>Status:</strong> {{characterStatus}}</h6>
        <h6><strong>Gender:</strong> {{characterGender}}</h6>
        <h6><strong>Origin:</strong> {{characterOrigin}}</h6>
        <h6><strong>Spacies:</strong> {{characterSpecies}}</h6>
      </div>
    </section>
    <section class="row">
        <h4>Episodios donde apareció</h4>
        <episode-card v-for="(episode, index) in episodesInfo" 
        :key="index"
        :episodeTitle="episode.title"
        :episodeDate="episode.date"
        />
    </section>
    <section class="row">
      <h4 class="col s12">Personajes Interesantes</h4>
      <CharacterCard 
      v-for="(character, index) in randomDudesInfo"
      :key="index"
      :name="character.name" 
      :origen="character.origin.name" 
      :estado="character.status"
      :img="character.image"
      :id="character.id"
      />
    </section>
  </div>
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue';
import EpisodeCard from '../components/EpisodeCard.vue';
export default {
  components:{
    EpisodeCard,
    CharacterCard
  },
  mounted(){
    this.loadData();  
  },
  data(){
    return{
      characterName : '',
      characterGender : '',
      characterStatus : '',
      characterOrigin : '',
      characterSpecies : '',
      characterImg : '',
      episodes : [],
      episodesInfo :[],
      randomDudesInfo : [],
      loading : true,
    }
  },
  methods:{
    async getEpisodes(){
      for(let i =0; i< 4;i++){
        let info = await this.axios.get(this.episodes[i]);
        this.episodesInfo.push({title : info.data.name, date: info.data.air_date});
      }
    },
    async randomDudes(){
      let one = Math.floor(Math.random() * 100) + 1;
      let two = Math.floor(Math.random() * 100) + 1;
      let three = Math.floor(Math.random() * 100) + 1;
      let data = await this.axios.get(`https://rickandmortyapi.com/api/character/${one},${two},${three}`);
      this.randomDudesInfo = data.data;
    },
    goToDetails(character){
      this.$store.state.characterId = character.id;
      this.$router.push('/character/'+this.$store.state.characterId);
    },
    async loadData(){
      this.loading = false;
      let id = this.$store.state.characterId;
      let resp = await this.axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      let data = resp.data;
      this.characterName = data.name;
      this.characterStatus = data.status;
      this.characterGender = data.gender;
      this.characterOrigin = data.origin.name;
      this.characterSpecies = data.species;
      this.characterImg = data.image;
      this.episodes = data.episode;
      this.getEpisodes();
      this.randomDudes();
      this.loading = true;
    }
  },
  watch:{
    $route(){
      this.episodesInfo = [];
      this.loadData();
    }
  }
}
</script>

<style>

</style>