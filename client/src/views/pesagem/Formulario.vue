<template>
  <b-form @submit.prevent="onSubmit" class="inline">
    <div class="row">
      <div class="col">
        <vue-simple-suggest
          class="col-sm-8 float-left no-padding autocomplete"
          v-model="veiculoSelecionado"
          :list="veiculos"
          :styles="autoCompleteStyle"
          placeholder="Busque um veículo pela placa"
          mode="select"
          :nullable-select="false"
          :prevent-submit="true"
          :display-attribute="'placa'"
          @input="getVeiculosAutocomplete($event)"
        ></vue-simple-suggest>
      </div>
      <div class="col">
        <input type="number" step="any" class="form-control" v-model="peso"/>
        <b-button id="btn-pesar" class="form-control btn btn-success text-center" @click="pesar()">Pesar</b-button>
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
import PesagemService from "../../domain/pesagem/PesagemService";
import VeiculoService from "../../domain/veiculo/VeiculoService.js";

export default {
  data() {
    return {
        veiculos: [],
        peso: '',
        autoCompleteStyle: {
            vueSimpleSuggest: "position-relative",
            inputWrapper: "",
            defaultInput: "form-control",
            suggestions: "position-absolute list-group z-1000",
            suggestItem: "list-group-item",
        },
      veiculoSelecionado: ''
    };
  },
  components: {
    inputsearch: InputSearch,
    botoesform: BotoesFormulario
  },
  methods: {
    onSubmit() {
    },
     getVeiculosAutocomplete(evt){
       this.veiculoService.getVeiculosByPlaca({placa: evt}).then( veiculos => {
         this.veiculos = veiculos;
       })
     }, 
     pesar() {
       this.service.pesar().then(peso => {
         this.peso = peso;
       })
     }
  },
  created(){
      this.service = new PesagemService(this.$resource);
      this.veiculoService = new VeiculoService(this.$resource);
  }
};
</script>

<style scoped>
#btn-pesar {
  margin: 3% 0;
}
</style>
