<template>
  
    <div class="col s3" @click="goToDetails">
      <div class="card medium hoverable">
        <div class="card-image">
          <img :src="img">
        </div>
        <div class="card-content truncate">
          <h5>{{name}}</h5>
          <p><strong>Estado:</strong> {{estado}}</p>
          <p><strong>Origen:</strong> {{origen}}</p>
          <p>id: {{id}}</p>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  props:['name','estado','origen','img','id'],
  methods : {
    goToDetails(){
      this.$store.state.characterId = this.id;
      this.$router.push('/character/'+ this.id);
    },
  }
}
</script>

<style>
.card{
  cursor: pointer;
}
</style>