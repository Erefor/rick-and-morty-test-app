<template>
  <form class="row" @submit.prevent="getData">
    <div class="input-field col s12">
        <input id="text" type="text" v-model="characterName" placeholder="Buscar...">
    </div>
    <div class="col s1">
        <p>Filtrar por:</p>
    </div>
    <div class="input-field col s2">
        <select class="browser-default">
            <option value="1" disabled selected>Status</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <div class="input-field col s2">
        <select class="browser-default">
            <option value="1" disabled selected>Origin</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
  </form>
</template>

<script>
export default {
    data(){
        return {
            characterName : '',
        }
    },
    methods:{
        getData(){
            alert(this.characterName);
            this.characterName = '';
        }
    }
}
</script>

<style scoped>
input{
    border: 1px solid grey !important;
}
::placeholder{
    padding: 0 10px;
    font-size: 1.5rem;
    color: gray;
}
</style>