<template>
  <inputsearch
    displayAttribute="pessoa.nome"
    placeholder="Nome do motorista"
    :lista="motoristas"
    @input="getMotoristaAutoComplete($event)"
    @select="emitMotorista"
  />
</template>

<script>
import MotoristaService from "../../../domain/motorista/MotoristaService.js";
import InputSearch from "./InputSearch.vue";
export default {
  data() {
     return {
          motoristas: []
     }
  },
  props: {
    empresaSelecionada: null,
  },
  methods: {
    getMotoristaAutoComplete(nomeMotorista) {
      if (this.empresaSelecionada == null) {
        this.motoristaService
          .getAutocomplete({ nome: nomeMotorista })
          .then(motoristas => (this.motoristas = motoristas));
      } else {
        this.motoristaService
          .getAutocompleteByEmpresa({
            nome: nomeMotorista,
            idEmpresa: this.empresaSelecionada.id
          })
          .then(empresas => (this.empresas = empresas));
      }
    },
    emitMotorista(motorista) {
      this.$emit("select", motorista);
    }
  },
  created() {
    this.motoristaService = new MotoristaService(this.$resource);
  },
  components: {
    inputsearch: InputSearch
  }
};
</script>

<style>
</style>