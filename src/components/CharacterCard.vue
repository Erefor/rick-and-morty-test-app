<template>
  
    <div class="col s3">
      <div class="card medium hoverable">
        <div class="card-image">
          <img :src="img">
        </div>
        <div class="card-content">
          <h5>{{name}}</h5>
          <p><strong>Estado:</strong> {{estado}}</p>
          <p><strong>Origen:</strong> {{origen}}</p>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  props:['name','estado','origen','img'],
  methods : {
    click(){
      alert('Click');
    }
  }
}
</script>

<style>
.card{
  cursor: pointer;
}
</style>