<template>
    <div id="tabela clearfix">
        <b-table striped hover responsive :items="items" :fields="headers">
                <template slot="actions" slot-scope="row" v-if="mostrarBotoes">
                    <router-link :to="linkEditar+'/'+row.item[paramRowEditar]">
                        <b-button size="sm" class="mr-1" variant="info">
                            <font-awesome-icon icon="pen"/>
                        </b-button>
                    </router-link>
                    <b-button size="sm"  variant="danger" @click="excluir(row.item[paramRowExcluir])">
                        <font-awesome-icon icon="trash"/>  
                    </b-button>
                </template>
                <template slot="dataDemissao" slot-scope="data">
                   <b-badge variant="danger" v-if="data.item.dataDemissao">Inativo</b-badge>
                   <b-badge variant="success" v-else>Ativo</b-badge>
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
                required: false
            },
            mostrarBotoes: {
                type: Boolean,
                default: true
            },
            paramRowEditar: "",

            paramRowExcluir: "",
            tituloModalExcluir: "" 
        },
        methods: {
            excluir: function(codExcluir){
                this.$emit("codExcluir", codExcluir);
                this.$bvModal.show('modal-excluir');
            }
        }
        
    }
</script>

<style>
    
</style>
