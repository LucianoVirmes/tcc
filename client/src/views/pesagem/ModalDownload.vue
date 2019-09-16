<template>
  <div>
    <b-modal id="modal-multi-2" title="Filtros de impressão">
      <autoCompleteEmpresa @select="pesquisa.empresa = $event" />
      <autoCompleteMotorista @select="pesquisa.motorista = $event" />
      <div class="form-group">
        <label>Data inicial</label>
        <b-input type="date" v-model="pesquisa.dataInicial" />
      </div>
      <div class="form-group">
        <label>Data final</label>
        <b-input type="date" v-model="pesquisa.dataFinal" />
      </div>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button @click="imprimir()" class="float-right" variant="primary">Download</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import AutoCompleteMotorista from "../../components/shared/inputs/AutoCompleteMotorista.vue";
import AutoCompleteEmpresa from "../../components/shared/inputs/AutoCompleteEmpresa.vue";
export default {
  data() {
    return {
      pesquisa: {
        dataInicial: "",
        dataFinal: "",
        empresa: "",
        motorista: ""
      }
    };
  },
  methods: {
    imprimir() {
      this.$emit('download', this.pesquisa);
      this.pesquisa.dataInicial = "";
      this.pesquisa.dataFinal = "";
      this.pesquisa.motorista = "";
      this.pesquisa.empresa = "";
    }
  },
  components: {
    autoCompleteMotorista: AutoCompleteMotorista,
    autoCompleteEmpresa: AutoCompleteEmpresa
  }
};
</script>

<style>
</style>