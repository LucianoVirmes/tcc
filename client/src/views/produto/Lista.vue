<template>
  <tabela
    :items="produtos"
    :headers="headers"
    :linkEditar="'linkEditar'"
    :carregando="carregando"
    :linkExcluir="'linkExcluir'"
  />
</template> 

<script>
import Tabela from "../../components/shared/tabela/Tabela.vue";
export default {
  data() {
    return {
      headers: {
        id: {
          label: "Codigo"
        },
        nome: {
          label: "Nome"
        },
        unidade: {
          label: "Unidade de medida"
        },
        opcoes: {
          key: "actions",
          label: "Opções"
        }
      },
      carregando: {
        type: Boolean,
        default: false
      },
      produtos: []
    };
  },
  components: {
    tabela: Tabela
  },
  created() {
    this.carregando = true;
    this.$http
      .get("http://localhost:3000/produto/lista")
      .then(res => res.json())
      .then(
        produtos => {
          this.produtos = produtos;
          this.carregando = false;
        },
        err => {
          console.log(err);
          this.carregando = false;
        }
      );
  }
};
</script>

<style>

</style>
