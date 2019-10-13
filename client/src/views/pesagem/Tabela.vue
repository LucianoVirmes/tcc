<template>
  <div>
    <b-button @click="showModal" class="mb-3">Imprimir</b-button>
    <b-modal id="modal-1" no-stacking>
      <div class="col-6 float-left">
        <b-card title="Impressão com filtros">
          <b-button v-b-modal.modal-multi-2 variant="primary">Escolher filtros</b-button>
        </b-card>
      </div>
      <div class="col-6 float-right">
        <b-card title="Impressão normal">
          <b-button @click="imprimir()" variant="primary">Download</b-button>
        </b-card>
      </div>
      <template v-slot:modal-footer>
        <div class="w-100"></div>
      </template>
    </b-modal>
    <modalDownload @download="downloadPesquisa" />
    <tabela :items="pesagens" :headers="headers">
      <template>aqui deveria ir a datahora de cada item da lista pesagem</template>
    </tabela>
  </div>
</template>
<script>
import Tabela from "../../components/shared/tabela/Tabela.vue";
import PesagemService from "../../domain/pesagem/PesagemService.js";
import ModalDownload from "./ModalDownload.vue";
import * as moment from "moment";

export default {
  data() {
    return {
      headers: [
        { label: "Placa", key: "veiculo.placa" },
        {
          label: "Data",
          key: "datahora",
          formatter: value => {
            return moment(value).format("DD/MM/YYYY hh:mm");
          }
        },
        { label: "Tara", key: "pesotara" },
        { label: "Peso bruto", key: "pesobruto" },
        { label: "Peso líquido", key: "pesoliquido" }
      ],
      pesagens: []
    };
  },
  components: {
    tabela: Tabela,
    modalDownload: ModalDownload
  },
  methods: {
    imprimir() {
      this.service.imprimir();
    },
    showModal() {
      this.$root.$emit("bv::show::modal", "modal-1", "#btnShow");
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
    toggleModal() {
      this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
    },
    downloadPesquisa(pesquisa) {
      this.service.imprimirComFiltros(pesquisa);
    },
    carregarPesagens() {
      this.service
        .listar()
        .then(pesagens => (this.pesagens = pesagens), err => console.log(err));
    }
  },

  created() {
    this.service = new PesagemService(this.$resource);
    this.carregarPesagens();
  }
};
</script>

<style>
</style>
