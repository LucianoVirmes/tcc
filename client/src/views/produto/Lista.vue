<template>
    <tabela :items=produtos :headers=headers />
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
                }
            },
            produtos: []
        }
    },
    components: {
        "tabela":Tabela
    },
    created(){
         this.$http.get('http://localhost:3000/produtos/lista')
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
