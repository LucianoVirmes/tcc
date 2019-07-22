<template>
    <tabela :items=pesagens :headers=headers />
</template>
<script>
    import Tabela from '../../components/shared/tabela/Tabela.vue';
    export default {
        data (){
            return {
                headers: ['Placa', 'Data de pesagem', 'Tara', 'Peso bruto', 'Peso líquido'],
                pesagens: []
            }
        },
        components: {
            'tabela': Tabela
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
