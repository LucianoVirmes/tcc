<template>
  <div class="container-fluid">
    <b-alert variant="success" :show="alertaSucess" dismissible>Empresa removida com sucesso!</b-alert>
    <b-alert variant="danger" :show="alertaErro" dismissible>Não foi possível remover a empresa!</b-alert>
    <div class="form-group">
      <label>Motorista</label>
      <b-form-select
        v-model="motoristaSelecionado"
        :options="motoristas"
        class="form-control"
        @change="buscaEmpresasMotorista"
      />
    </div>
    <div v-if="motoristaSelecionado != null">
      <div class="form-group">
        <vue-simple-suggest
          class="col-sm-8 float-left no-padding autocomplete"
          v-model="empresaSelecionada"
          :list="options"
          :destyled="true"
          :styles="autoCompleteStyle"
          placeholder="Digite o nome de uma empresa"
          mode="select"
          :nullable-select="false"
          :prevent-submit="true"
          :display-attribute="'nome'"
          :filter-by-query="true"
        ></vue-simple-suggest>

        <b-button
          class="col-sm-3 form-control btn-add"
          variant="success"
          @click="adicionarEmpresa()"
        >Adicionar</b-button>
      </div>
      <tabela
        :items="empresas"
        :mostrarBtnEditar="false"
        @codExcluir="setCodEmpresa"
        :headers="headers"
        :paramRowExcluir="'id'"
        class="text-center tabela"
      />
      <modal
        :id="modalExcluir.id"
        :texto="modalExcluir.texto"
        :title="modalExcluir.titulo"
        :btnExcluir="modalExcluir.btnExcluir"
        @clickConfirm="excluir()"
      />
    </div>
  </div>
</template>

<script>
import Tabela from "../../components/shared/tabela/Tabela.vue";
import EmpresaService from "../../domain/empresa/EmpresaService";
import Empresa from "../../domain/empresa/Empresa";
import MotoristaService from "../../domain/motorista/MotoristaService";
import ModalExcluir from "../../components/shared/modal/ModalExcluir.vue";

export default {
  data() {
    return {
      options: [],
      empresas: [],
      headers: {
        nome: {
          label: "Nome"
        },
        cnpj: {
          label: "CNPJ"
        },
        opcoes: {
          label: "Opções",
          key: "actions"
        }
      },
      motoristas: [
        {
          value: null,
          text: "Selecione um motorista"
        }
      ],
      idEmpresa: null,
      modalExcluir: {
        texto: "Deseja mesmo desassociar este motorista?",
        titulo: "Desassociar",
        id: "modal-excluir",
        btnExcluir: "Desassociar"
      },
      alertaSucess: false,
      alertaErro: false,
      motoristaSelecionado: null,
      empresaSelecionada: null,
      autoCompleteStyle: {
        vueSimpleSuggest: "position-relative",
        defaultInput: "form-control",
        suggestions: "position-absolute list-group z-1000",
        suggestItem: "list-group-item"
      }
    };
  },
  methods: {
    autoCompleteEmpresas() {
      this.empresaService.listar().then(empresas => {
        empresas.forEach(empresa => {
          this.options.push(empresa);
        });
      });
    },
    setEmpresa(empresa) {
      this.empresaSelecionada = empresa;
    },
    adicionarEmpresa() {
      this.motoristaService
        .addEmpresa({
          id: this.motoristaSelecionado,
          empresa: this.empresaSelecionada
        })
        .then(success => {
          this.empresas.push(this.empresaSelecionada);
        });
    },
    buscaEmpresasMotorista() {
      this.empresas = [];
      if (this.motoristaSelecionado != null) {
        this.motoristaService
          .getEmpresas(this.motoristaSelecionado)
          .then(empresas => {
            this.empresas = empresas;
          });
      }
    },
    showAlert: function(res) {
      if (res.ok) {
        this.alertaSucess = true;
      } else {
        this.alertaErro = true;
      }
    },
    setCodEmpresa(idEmpresa) {
      this.idEmpresa = idEmpresa;
    },
    buscaMotoristas() {
      this.motoristaService.listar().then(motoristas => {
        motoristas.forEach(element => {
          this.motoristas.push({
            value: element.id,
            text: element.pessoa.nome
          });
        });
      });
    },
    excluir() {
      this.motoristaService.removeEmpresa(this.idEmpresa, this.motoristaSelecionado).then(res => {
        this.showAlert(res);
        this.empresas.splice(this.empresas.indexOf(this.idEmpresa));
      });
    }
  },
  created() {
    this.empresaService = new EmpresaService(this.$resource);
    this.motoristaService = new MotoristaService(this.$resource);
    this.autoCompleteEmpresas();
    this.buscaMotoristas();
  },
  components: {
    tabela: Tabela,
    modal: ModalExcluir
  }
};
</script>

<style scoped>
@media (max-width: 566px) {
  .no-padding {
    padding: 0 !important;
  }
}

.no-padding {
  padding-left: 0 !important;
}
</style>
