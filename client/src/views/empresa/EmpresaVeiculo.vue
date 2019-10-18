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
          :list="veiculosAutocomplete"
          :styles="autoCompleteStyle"
          placeholder="Busque um veículo pela placa"
          mode="select"
          :nullable-select="false"
          :prevent-submit="true"
          :display-attribute="'placa'"
          @input="getVeiculosAutocomplete($event)"
        ></vue-simple-suggest>

        <b-button
          class="col-sm-3 form-control btn-add"
          variant="success"
          @click="adicionarVeiculo()"
        >Adicionar</b-button>
      </div>
      <tabela
        :items="veiculos"
        :mostrarBtnEditar="false"
        @codExcluir="setCodVeiculo"
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
import Veiculo from "../../domain/veiculo/Veiculo";
import VeiculoService from "../../domain/veiculo/VeiculoService";
import ModalExcluir from "../../components/shared/modal/ModalExcluir.vue";

export default {
  data() {
    return {
      options: [],
      veiculos: [],
      veiculosAutocomplete: [],
      headers: {
        nome: {
          label: "Placa",
          key: "placa"
        },
        cnpj: {
          label: "Tara",
          key: "tara"
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
      },
      idVeiculo: null,
      modalExcluir: {
        texto: "Deseja mesmo desassociar este veículo?",
        titulo: "Desassociar",
        id: "modal-excluir",
        btnExcluir: "Desassociar"
      },
      alertaSucess: false,
      alertaErro: false
    };
  },
  methods: {
    getVeiculosAutocomplete(evt) {
      this.veiculoService.getVeiculosByPlaca({ placa: evt }).then(veiculos => {
        this.veiculosAutocomplete = veiculos;
      });
    },
    setVeiculo(veiculo) {
      this.veiculoSelecionado = veiculo;
    },
    excluir() {
      this.empresaService
        .removerVeiculo(this.idVeiculo, this.empresaSelecionada)
        .then(res => {
          this.showAlert(res);
          this.veiculos.splice(this.veiculos.indexOf(this.idVeiculo));
        });
    },
    adicionarVeiculo() {
      const formdata = {
        id: this.empresaSelecionada,
        veiculo: this.veiculoSelecionado
      };
      this.empresaService.addVeiculo(formdata).then(success => {
        this.veiculos.push(this.veiculoSelecionado);
      });
    },
    buscaEmpresaVeiculo() {
      this.veiculos = [];
      if (this.empresaSelecionada != null) {
        console.log(this.empresaSelecionada);
        this.empresaService
          .getVeiculos(this.empresaSelecionada)
          .then(veiculos => {
            this.veiculos = veiculos;
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
    setCodVeiculo(idVeiculo) {
      this.idVeiculo = idVeiculo;
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
