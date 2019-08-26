<template>
  <div class="container-fluid">
    <div class="form-group">
      <label>Empresa</label>
      <b-form-select
        v-model="empresaSelecionada"
        :options="empresas"
        class="form-control"
        @change="buscaEmpresaVeiculo"
      />
    </div>
    <div v-if="empresaSelecionada != null">
      <div class="form-group">
        <vue-simple-suggest
          class="col-sm-8 float-left no-padding autocomplete"
          v-model="veiculoSelecionado"
          :list="options"
          :destyled="true"
          :styles="autoCompleteStyle"
          placeholder="Busque um veículo pela placa"
          mode="select"
          :nullable-select="false"
          :prevent-submit="true"
          :display-attribute="'nome'"
          :filter-by-query="true"
        ></vue-simple-suggest>

        <b-button
          class="col-sm-3 form-control btn-add"
          variant="success"
          @click="adicionarVeiculo()"
        >Adicionar</b-button>
      </div>
      <tabela :items="veiculos" :headers="headers" class="text-center tabela" />
    </div>
  </div>
</template>

<script>
import Tabela from "../../components/shared/tabela/Tabela.vue";
import EmpresaService from "../../domain/empresa/EmpresaService";
import Veiculo from "../../domain/veiculo/Veiculo";
import VeiculoService from "../../domain/veiculo/VeiculoService";

export default {
  data() {
    return {
      options: [],
      veiculos: [],
      headers: {
        nome: {
          label: "Placa"
        },
        cnpj: {
          label: "Tara"
        },
        opcoes: {
          label: "Opções",
          key: "actions"
        }
      },
      empresas: [
        {
          value: null,
          text: "Selecione uma empresa"
        }
      ],
      veiculoSelecionado: null,
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
    autoCompleteVeiculos() {
      this.veiculoService.listar().then(veiculos => {
        veiculos.forEach(veiculo => {
          this.options.push(veiculo);
        });
      });
    },
    setVeiculo(veiculo) {
      this.veiculoSelecionado = veiculo;
    },
    adicionarVeiculo() {
      const formdata = {
        id: this.empresaSelecionada,
        empresa: this.veiculoSelecionado
      };
      this.empresaService
        .addVeiculo(formdata)
        .then(success => {
          this.veiculos.push(this.veiculoSelecionado);
        });
    },
    buscaEmpresaVeiculo() {
      this.veiculos = [];
      if (this.empresaSelecionada != null) {
        this.empresaService
          .getVeiculos(this.empresaSelecionada)
          .then(veiculos => {
            this.veiculos = veiculos;
          });
      }
    },
    buscaEmpresas() {
      this.empresaService.listar().then(empresas => {
        empresas.forEach(element => {
          this.empresas.push({
            value: element.id,
            text: element.nome
          });
        });
      });
    }
  },
  created() {
    this.empresaService = new EmpresaService(this.$resource);
    this.veiculoService = new VeiculoService(this.$resource);
    this.buscaEmpresaVeiculo();
    this.buscaEmpresas();
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
