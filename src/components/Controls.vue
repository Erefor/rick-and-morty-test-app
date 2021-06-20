<template>
  <form class="row" @submit.prevent="getData">
    <div class="input-field col s12">
        <input id="text" type="text" v-model="characterName" placeholder="Buscar...">
    </div>
    <div class="col s1">
        <p>Filtrar por:</p>
    </div>
    <div class="input-field col s2">
        <select class="browser-default" v-model="characterStatus" @change="filterStatus">
            <option value="Status" selected disabled>Status</option>
            <option value="All">All</option>
            <option value="Alive">Vivo</option>
            <option value="Dead">Muerto</option>
            <option value="unknown">unknown</option>
        </select>
    </div>
    <div class="input-field col s2">
        <select class="browser-default" v-model="originName" @change="filterOrigin">
            <option value="Origin" selected disabled>Origin</option>
            <option value="All">All</option>
            <option :value="origin" v-for="(origin, index) in originArray" :key="index">{{origin}}</option>
        </select>
    </div>
  </form>
</template>

<script>
export default {
    props : ['originArray'],
    emits : ['filterOrigin','filterStatus'],
    data(){
        return {
            characterName : '',
            originName : 'Origin',
            characterStatus : 'Status'
        }
    },
    methods:{
        filterOrigin(){
            if(this.originName === 'Origin' || this.characterStatus === 'Status'){
                this.originName = 'All';
                this.characterStatus = 'All';
                this.$emit('filterOrigin', {origin : this.originName, status : this.characterStatus});
            }else{
            this.$emit('filterOrigin', {origin : this.originName, status : this.characterStatus});
            }
        },
        filterStatus(){
            if(this.characterStatus === 'Status' || this.originName === 'Origin'){
                this.characterStatus = 'All';
                this.originName = 'All';
                this.$emit('filterStatus', {status : this.characterStatus, origin:this.originName});
            }else{
                this.$emit('filterStatus', {status : this.characterStatus, origin:this.originName});
            }
            
        },
        imprimir(){
            console.log(this.characterStatus);
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