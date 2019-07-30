<template>
    <div id="tabela clearfix">
        <b-table striped hover responsive :items="items" :fields="headers">
            <template slot="actions" slot-scope="row">
                <botoes :enderecoExclusao="'abc'" :enderecoEdicao="'abcd'"/>
            </template>
        </b-table>
         <div class="text-center">
            <span v-if="items.length <= 0" class="text-center">Ainda não há nada aqui.</span>
         </div>
    </div>    
</template>
<script>
     import BotoesEditarExcluir from '../buttons/BotoesEditarExcluir.vue';

    export default {
        props:{
            items: {
                required: true,
                type: Array
            }, 
            headers: {
                required: true,
            }    
        }, 
        components: {
            'botoes': BotoesEditarExcluir
        }

    }
</script>

<style>
    
</style>
