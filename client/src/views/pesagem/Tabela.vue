<template>
    <tabela :items=pesagens :headers=headers />
</template>
<script>
    import Tabela from '../../components/shared/tabela/Tabela.vue';
    import PesagemService from '../../domain/pesagem/PesagemService.js';

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
            this.service = new PesagemService(this.$resource);
            this.service.listar()
            .then(pesagens => this.pesagens = pesagens, err => console.log(err));
        }

    }
</script>

<style>
    
</style>
