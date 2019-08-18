<template>
  <div>
    <b-alert variant="success" :show="alertaSucess" dismissible>Motorista inativado com sucesso!</b-alert>
    <tabela
      :items="motoristas"
      :headers="headers"
      :linkEditar="'/motorista/cadastro'"
      :paramRowEditar="'id'"
      :paramRowExcluir="'id'"
      @codExcluir="getCodExcluir"
      :carregando="carregando"
    />
    <modal
      :id="modalExcluir.id"
      :urlExclusao="modalExcluir.url"
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
import Empresa from "../../domain/empresa/Empresa";
import EmpresaService from "../../domain/empresa/EmpresaService";
import Motorista from '../../domain/motorista/Motorista';
import MotoristaService from '../../domain/motorista/MotoristaService';

export default {
  data() {
    return {
      motoristas: [],
      motorista: new Motorista(),
      alertaSucess: false,
      carregando: false,
      modalExcluir: {
        texto: "Deseja mesmo remover este motorista?",
        titulo: "Remover",
        id: "modal-excluir",
        btnExcluir: "Remover"
      },
      headers: {
        id: {
          label: "Código"
        },
        nome: {
          label: "Nome",
          key: "pessoa.nome"
        },
        cnh: {
          label: "CNH"
        },
        opcoes: {
          key: "actions",
          label: "Opções"
        }
      }
    };
  },

  created() {
    this.service = new MotoristaService(this.$resource);
    this.buscaMotoristas();
  },

  methods: {
    getCodExcluir: function(codExcluir) {
      this.motorista.id = codExcluir;
    },
    buscaMotoristas: function() {
      this.carregando = true;
      this.service.listar().then(motoristas => {
        this.motoristas = motoristas;
        this.carregando = false;
      });
    },
    excluir() {
      this.service.remover(this.motorista.id).then(res => {
        this.alertaSucess = true;
        this.motoristas.splice(this.motoristas.indexOf(this.motorista));
      });
    }
  },
  components: {
    tabela: Tabela,
    modal: ModalExcluir
  }
};
</script>

<style>
</style>
