<template>
    <div id="tabela clearfix">
        <b-table striped hover responsive :items="items" :fields="headers">
                <template slot="actions" slot-scope="row" v-if="mostrarBotoes">
                    <router-link :to="linkEditar+'/'+row.item[paramRowEditar]">
                        <b-button size="sm" class="mr-1" variant="info">
                            <font-awesome-icon icon="pen"/>
                        </b-button>
                    </router-link>
                    <router-link :to="linkExcluir+row.paramRowExcluir">
                        <b-button size="sm"  variant="danger">
                            <font-awesome-icon icon="trash"/>  
                        </b-button>
                    </router-link>
                </template>
        </b-table>
         <div class="text-center">
            <span v-if="items.length <= 0" class="text-center">Ainda não há nada aqui.</span>
         </div>
           
    </div>
</template>
<script>

    export default {
        
        props:{
            items: {
                required: true,
                type: Array
            }, 
            headers: {
                required: true,
            },
            linkEditar: {
                type: String,
                required: true
            },
            linkExcluir: {
                type: String,
                required: true
            },
            mostrarBotoes: {
                type: Boolean,
                default: true
            },
            paramRowEditar: "",

            paramRowExcluir: ""
        }
        
    }
</script>

<style>
    
</style>
