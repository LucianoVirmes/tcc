<template>
  <b-form @submit.prevent="onSubmit" class="inline">
    <div class="row">
      <div class="col">
        <vue-simple-suggest
          class="col-sm-8 float-left no-padding autocomplete"
          v-model="empresaSelecionada"
          :list="veiculos"
          :destyled="true"
          :styles="autoCompleteStyle"
          placeholder="Placa"
          mode="select"
          :nullable-select="false"
          :prevent-submit="true"
          :display-attribute="'nome'"
          :filter-by-query="true"
        ></vue-simple-suggest>
      </div>

      <div class="col">
        <input type="number" step="any" class="form-control" />
        <b-button id="btn-pesar" class="form-control btn btn-success text-center">Pesar</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label>Data</label>
        <input type="date" name="bday" max="3000-12-31" min="1000-01-01" class="form-control" />
      </div>
      <div class="form-group col">
        <label for="motorista">Motorista</label>
        <b-input id="motorista" class="mb-2 mr-sm-2 mb-sm-0 form-control"></b-input>
      </div>
    </div>

    <div class="row col-sm-6">
      <label for="produto">Produto</label>
      <b-select id="produto" class="mb-2 mr-sm-2 mb-sm-0 form-control"></b-select>
    </div>
    <botoesform />
  </b-form>
</template>

<script>
import InputSearch from "../../components/shared/inputs/InputSearch.vue";
import BotoesFormulario from "../../components/shared/buttons/BotoesFormulario.vue";
import PesagemService from "../../domain/usuario/UsuarioService.js";
import VeiculoService from "../../domain/veiculo/VeiculoService.js";

export default {
  data() {
    return {
        veiculos: [],
        autoCompleteStyle: {
        vueSimpleSuggest: "position-relative",
        inputWrapper: "",
        defaultInput: "form-control",
        suggestions: "position-absolute list-group z-1000",
        suggestItem: "list-group-item"
      }
    };
  },
  components: {
    inputsearch: InputSearch,
    botoesform: BotoesFormulario
  },
  methods: {
    onSubmit() {
    },
    buscaVeiculos(){
        this.veiculoService.listar().then( veiculos => this.veiculos = veiculos);
    }
  },
  created(){
      this.service = new PesagemService(this.$resource);
      this.veiculoService = new VeiculoService(this.$resource);
      this.buscaVeiculos();
  }
};
</script>

<style scoped>
#btn-pesar {
  margin: 3% 0;
}
</style>
