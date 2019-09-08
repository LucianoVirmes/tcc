<template>
<div>
      <b-button @click="imprimir()" class="mb-3">Imprimir</b-button>
  <tabela :items="pesagens" :headers="headers" />
</div>
</template>
<script>
import Tabela from "../../components/shared/tabela/Tabela.vue";
import PesagemService from "../../domain/pesagem/PesagemService.js";

export default {
  data() {
    return {
      headers: [
        { label: "Placa", key: "veiculo.placa" },
        { label: "Data de pesagem", key: "datahora" },
        { label: "Tara", key: "pesotara" },
        { label: "Peso bruto", key: "pesobruto" },
        { label: "Peso líquido", key: "pesoliquido" }
      ],
      pesagens: []
    };
  },
  components: {
    tabela: Tabela
  },
  methods: {
    imprimir() {
      this.service.imprimir();
    }
  },
  created() {
    this.service = new PesagemService(this.$resource);
    this.service
      .listar()
      .then(pesagens => (this.pesagens = pesagens), err => console.log(err));
  }
};
</script>

<style>
</style>
