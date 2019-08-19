<template>
  <div>
    <b-alert variant="success" :show="alertaSucess" dismissible>
      Veículo excluido com sucesso!</b-alert>
    <tabela
      :items="veiculos"
      :headers="headers"
      :linkEditar="'/veiculo/cadastro'"
      :paramRowEditar="'id'"
      :carregando="carregando"
      :paramRowExcluir="'id'"
      @codExcluir="getCodExcluir"
    />
    <modal
      :id="modalExcluir.id"
      :texto="modalExcluir.texto"
      :title="modalExcluir.titulo"
      :btnExcluir="modalExcluir.btnExcluir"
      @clickConfirm="excluir()"
    />
  </div>
</template> 

<script>
import Tabela from "../../components/shared/tabela/Tabela.vue";
import ModalExcluir from "../../components/shared/modal/ModalExcluir.vue";
import Veiculo from '../../domain/veiculo/Veiculo';
import VeiculoService from '../../domain/veiculo/VeiculoService';

export default {
  data() {
    return {
      alertaSucess: false,
      carregando: false,
      modalExcluir: {
        texto: "Deseja mesmo excluir esse veículo?",
        titulo: "Excluir",
        id: "modal-excluir",
        btnExcluir: "Excluir"
      },
      headers: {
        id: {
          label: "Codigo"
        },
        nome: {
          label: "Nome"
        },
        placa: {
          label: "Placa",
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
      veiculos: [],
      veiculo: new Veiculo()
    };
  },
  components: {
    tabela: Tabela,
    modal: ModalExcluir
  },
  created() {
    this.carregando = true;
    this.service = new VeiculoService(this.$resource);

    this.service.listar().then(
      veiculos => {
        this.veiculos = veiculos;
        this.carregando = false;
      },
      err => {
        console.log(err);
        this.carregando = false;
      }
    );
  },
  methods: {
    excluir(){
      this.service.remover(this.veiculo.id).then(res => {
        this.alertaSucess = true;
        this.veiculos.splice(this.veiculos.indexOf(this.veiculo.id));
      });
    },
    getCodExcluir(id){
      this.veiculo.id = id;
    }
  }
};
</script>

<style>
</style>
