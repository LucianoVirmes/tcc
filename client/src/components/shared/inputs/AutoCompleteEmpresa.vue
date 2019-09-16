<template>
  <inputsearch
    displayAttribute="nome"
    placeholder="Nome da empresa"
    :lista="empresas"
    @input="getEmpresaAutocomplete($event)"
    @select="emitEmpresa"
  />
</template>

<script>
import InputSearch from "./InputSearch.vue";
import EmpresaService from "../../../domain/empresa/EmpresaService.js";

export default {
  data() {
    return {
      empresas: []
    };
  },
  props: {
    veiculoSelecionado: null
  },
  methods: {
    getEmpresaAutocomplete(nomeEmpresa) {
      if (this.veiculoSelecionado == null) {
        this.empresaService
          .getEmpresaAutocomplete({ nome: nomeEmpresa })
          .then(empresas => (this.empresas = empresas));
      } else {
        this.empresaService
          .getEmpresaAutocompleteByVeiculo({
            nome: nomeEmpresa,
            idVeiculo: this.veiculoSelecionado.id
          })
          .then(empresas => (this.empresas = empresas));
      }
    },
    emitEmpresa(empresa) {
      this.$emit("select", empresa);
    }
  },
  components: {
    inputsearch: InputSearch
  },
  created() {
    this.empresaService = new EmpresaService(this.$resource);
  }
};
</script>