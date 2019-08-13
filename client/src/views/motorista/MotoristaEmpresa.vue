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
      this.$http
        .get("http://localhost:3000/empresa/listar/")
        .then(res => res.json())
        .then(empresas => {
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
      this.$http.post("http://localhost:3000/motorista/empresa/nova", formdata);
    },
    buscaEmpresasMotorista() {
      this.empresas = [];  
      if (this.motoristaSelecionado != null) {
        this.$http
          .get("http://localhost:3000/motorista/empresa/lista", {
            params: {
              id: this.motoristaSelecionado
            }
          })
          .then(res => res.json())
          .then(empresas => {
              console.log(empresas);
              this.empresas =empresas;
          });
      }
    },
    buscaMotoristas() {
      this.$http
        .get("http://localhost:3000/motorista/lista/")
        .then(res => res.json())
        .then(motoristas => {
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
