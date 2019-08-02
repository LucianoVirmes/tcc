<template>
    <tabela :items=produtos :headers=headers :linkEditar="'linkEditar'" :linkExcluir="'linkExcluir'"/>
</template> 

<script>
import Tabela from "../../components/shared/tabela/Tabela.vue";
export default {
    data() {
        return {
            headers: {
                id: {
                    label: 'Codigo'
                },
                nome: {
                    label: 'Nome',
                },
                unidade: {
                    label: 'Unidade de medida'
                }, 
                opcoes: {
                   key: 'actions',
                   label: "Opções" 
               }
            },
            produtos: []
        }
    },
    components: {
        "tabela":Tabela
    },
    created(){
         this.$http.get('http://localhost:3000/produto/lista')
      .then(res => res.json())
      .then(produtos => {
          this.produtos = produtos
          }
          , err => console.log(err));
    }
}
</script>

<style>

</style>
