<template>
  
    <div class="col s3">
      <div class="card medium">
        <div class="card-image">
          <img src="https://www.tonica.la/__export/1595702332011/sites/debate/img/2020/07/25/rick-and-morty-escritores-trabajan-en-la-temporada-6.jpg_1902800913.jpg">
        </div>
        <div class="card-content">
          <h5>Rick Sánchez</h5>
          <p><strong>Estado:</strong> {{estado}}</p>
          <p><strong>Origen:</strong> {{estado}}</p>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  data(){
    return {
      estado: 'alive',
      origen: 'Earth'
    }
  }
}
</script>

<style>

</style>