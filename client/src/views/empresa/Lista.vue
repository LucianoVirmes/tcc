<template>
  <div>
    <b-alert variant="success" :show="alertaSucess" dismissible>Empresa excluida com sucesso!</b-alert>
    <tabela
      :items="empresas"
      :headers="headers"
      :linkEditar="'/empresa/cadastro'"
      :paramRowEditar="'id'"
      :paramRowExcluir="'id'"
      :carregando="carregando"
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
import EmpresaService from '../../domain/empresa/EmpresaService';
import Empresa from '../../domain/empresa/Empresa';

export default {
  data() {
    return {
      empresas: [],
      empresa: new Empresa(),
      alertaSucess: false,
      modalExcluir: {
        texto: "Deseja mesmo excluir esta empresa?",
        titulo: "Excluir",
        id: "modal-excluir",
        btnExcluir: "Excluir"
      },
      carregando: {
        type: Boolean,
        default: false
      },
      headers: {
        id: {
          label: "Código"
        },
        nome: {
          label: "Nome"
        },
        cnpj: {
          label: "CNPJ"
        },
        opcoes: {
          key: "actions",
          label: "Opções"
        }
      }
    };
  },

  created() {
    this.service = new EmpresaService(this.$resource);
    this.buscaEmpresas();
  },

  methods: {
    getCodExcluir: function(codExcluir) {
      this.empresa.id = codExcluir;
    },
    excluir: function(){
      this.service.deletar(this.empresa.id).then(res => {
        this.alertaSucess = true;
        this.empresas.splice(this.empresas.indexOf(this.empresa));
      })
    },
    buscaEmpresas: function() {
      this.carregando = true;
        this.service.listar()
        .then(empresas => {
          this.empresas = empresas;
          this.carregando = false;
        });
    },
    motoristaExcluido: function(msg) {
      this.alertaSucess = true;
      this.buscaEmpresas();
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
