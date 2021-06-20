<template>
  <div class="container">
    <section class="row">
      <h4 class="col s12">Nombre de personaje</h4>
      <div class="col s4">
        <img src="https://www.tonica.la/__export/1595702332011/sites/debate/img/2020/07/25/rick-and-morty-escritores-trabajan-en-la-temporada-6.jpg_1902800913.jpg" alt="Character Picture" class="responsive-img">
      </div>
      <div class="col s8">
        <h5><strong>Status:</strong> Alive</h5>
        <h5><strong>Gender:</strong> Male</h5>
        <h5><strong>Origin:</strong> Earth</h5>
        <h5><strong>Spacies:</strong> Human</h5>
      </div>
    </section>
    <section class="row">
        <h2>Episodios donde aparecó</h2>
        <episode-card />
        <episode-card />
        <episode-card />
    </section>
  </div>
</template>

<script>
import EpisodeCard from '../components/EpisodeCard.vue';
export default {
  components:{
    EpisodeCard
  }
}
</script>

<style>

</style>