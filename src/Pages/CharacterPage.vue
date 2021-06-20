<template>
  <div class="container">
    <section class="row">
      <h4 class="col s12">Nombre de personaje</h4>
      <div class="col s4">
        <img src="https://www.tonica.la/__export/1595702332011/sites/debate/img/2020/07/25/rick-and-morty-escritores-trabajan-en-la-temporada-6.jpg_1902800913.jpg" alt="Character Picture" class="responsive-img">
      </div>
      <div class="col s8">
        <h6><strong>Status:</strong> Alive</h6>
        <h6><strong>Gender:</strong> Male</h6>
        <h6><strong>Origin:</strong> Earth</h6>
        <h6><strong>Spacies:</strong> Human</h6>
      </div>
    </section>
    <section class="row">
        <h4>Episodios donde apareció</h4>
        <episode-card />
        <episode-card />
        <episode-card />
        <episode-card />
    </section>
    <section class="row">
      <h4 class="col s12">Personajes Interesantes</h4>
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
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
  }
}
</script>

<style>

</style>