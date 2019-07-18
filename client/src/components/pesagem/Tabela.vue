<template>
    <div id="tabela clearfix">
        <b-table striped hover responsive :items="pesagens" :fields="headers"></b-table>
         <span class="center" v-if="pesagens.length <= 0">Ainda não há pesagens aqui.</span>
    </div>    
</template>
<script>
    export default {
        data (){
            return {
                headers: ['Placa', 'Data de pesagem', 'Tara', 'Peso bruto', 'Peso líquido'],
                pesagens: []
            }
        },
        created(){
            this.$http.get('http://localhost:3000/pesagens')
            .then(res => res.json())
            .then(pesagens => this.pesagens = pesagens, err => console.log(err));
        }

    }
</script>

<style>

</style>
