<template>
    <div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Formulário" active>
         <formulario id="formulario"/>
      </b-tab>
      <b-tab title="Tabela" @click="carregarTabela()">
         <tabela ref="tabela"/>
      </b-tab>
    </b-tabs>
  </b-card>
  
</div>
</template>

<script>
    import Tabela from './Tabela.vue';
    import Formulario from './Formulario.vue';
    
export default {
    components: {
        'formulario': Formulario,
        'tabela': Tabela,
    },
    methods: {
      carregarTabela() {
        this.$refs.tabela.carregarPesagens();
      }
    }
}
</script>
<style scoped>
    #formulario {
        margin: 20px;
    }
</style>
