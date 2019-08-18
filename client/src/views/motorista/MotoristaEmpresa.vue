<template>
  <div class="container-fluid">
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
      <tabela :items="empresas" :headers="headers" class="text-center tabela" />
    </div>
  </div>
</template>

<script>
import Tabela from "../../components/shared/tabela/Tabela.vue";
import EmpresaService from "../../domain/empresa/EmpresaService";
import Empresa from "../../domain/empresa/Empresa";
import MotoristaService from "../../domain/motorista/MotoristaService";

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
      motoristaSelecionado: null,
      empresaSelecionada: null,
      autoCompleteStyle: {
        vueSimpleSuggest: "position-relative",
        inputWrapper: "",
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
      const formdata = {
        id: this.motoristaSelecionado,
        empresa: this.empresaSelecionada
      };
      this.motoristaService
        .addEmpresa(formdata)
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
    buscaMotoristas() {
      this.motoristaService.listar().then(motoristas => {
        motoristas.forEach(element => {
          this.motoristas.push({
            value: element.id,
            text: element.pessoa.nome
          });
        });
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
    tabela: Tabela
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
