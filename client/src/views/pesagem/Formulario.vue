<template>
  <b-card bg-variant="light">
    <b-form @submit.prevent="onSubmit" class="inline">
      <div class="row form-group">
        <div class="col-sm-8 col-md-6">
          <label>Placa</label>
          <inputsearch
            displayAttribute="placa"
            placeholder="ABC-1234"
            :lista="veiculos"
            @input="getVeiculosAutocomplete($event)"
            @select="veiculoSelecionado = $event"
          />
        </div>
        <div class="col-sm-8 col-md-6">
          <label>Peso</label>
          <b-input-group v-if="balancaConectada">
            <b-form-input class="col-sm-8 col-md-6" type="number" v-model="peso"></b-form-input>
            <b-input-group-append>
              <b-button variant="info" @click="pesar()">Pesar</b-button>
            </b-input-group-append>
          </b-input-group>
          <b-input-group v-else>
            <b-form-input
              class="col-sm-8 col-md-6"
              disabled
              v-b-popover.hover="'O Arduino está desconectado!'"
              title="Falha na conexão"
              type="number"
              v-model="peso"
            ></b-form-input>
            <b-input-group-append>
              <b-button
                variant="info"
                disabled
               id="popover-button-open"
              >Pesar</b-button>
            </b-input-group-append>
            <b-popover show target="popover-button-open" title="Falha na conexão">
              O Arduino está
              <strong>desconectado!</strong>
            </b-popover>
          </b-input-group>
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-8 col-md-6">
          <label>Motorista</label>
          <inputsearch
            displayAttribute="pessoa.nome"
            placeholder="Nome do motorista"
            :lista="motoristas"
            @input="getMotoristaAutoComplete($event)"
            @select="motoristaSelecionado = $event"
          />
        </div>
        <div class="col-sm-8 col-md-6">
          <label>Empresa</label>
          <inputsearch
            displayAttribute="nome"
            placeholder="Nome da empresa"
            :lista="empresas"
            @input="getEmpresaAutocomplete($event)"
            @select="empresaSelecionada = $event"
          />
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-8 col-md-3">
          <label>Data</label>
          <input
            type="date"
            name="data"
            max="3000-12-31"
            min="1000-01-01"
            class="form-control"
            v-model="data"
          />
        </div>
        <div class="col-sm-8 col-md-4 offset-md-3">
          <label for="produto">Produto</label>
          <b-form-select v-model="produtoSelecionado" :options="produtos">
            <option :value="null" disabled>Selecione um produto</option>
          </b-form-select>
        </div>
      </div>
      <div class="mt-3">
        <botoesform @salvar="salvar()" />
      </div>
    </b-form>
  </b-card>
</template>

<script>
import InputSearch from "../../components/shared/inputs/InputSearch.vue";
import BotoesFormulario from "../../components/shared/buttons/BotoesFormulario.vue";
import PesagemService from "../../domain/pesagem/PesagemService";
import EmpresaService from "../../domain/empresa/EmpresaService.js";
import VeiculoService from "../../domain/veiculo/VeiculoService.js";
import MotoristaService from "../../domain/motorista/MotoristaService.js";
import ProdutoService from "../../domain/produto/ProdutoService.js";
import Pesagem from "../../domain/pesagem/Pesagem.js";

export default {
  data() {
    return {
      veiculos: [],
      empresas: [],
      motoristas: [],
      produtos: [],
      peso: "",
      data: "",
      autoCompleteStyle: {
        vueSimpleSuggest: "position-relative",
        inputWrapper: "",
        defaultInput: "form-control",
        suggestions: "position-absolute list-group z-1000",
        suggestItem: "list-group-item"
      },
      veiculoSelecionado: null,
      empresaSelecionada: null,
      motoristaSelecionado: null,
      produtoSelecionado: null,
      balancaConectada: false
    };
  },
  components: {
    inputsearch: InputSearch,
    botoesform: BotoesFormulario
  },
  methods: {
    onSubmit() {},

    getVeiculosAutocomplete(evt) {
      this.veiculoService.getVeiculosByPlaca({ placa: evt }).then(veiculos => {
        this.veiculos = veiculos;
      });
    },

    getEmpresaAutocomplete(nomeEmpresa) {
      if (this.veiculoSelecionado == null) {
        this.empresaService
          .getEmpresaAutocomplete({ nome: nomeEmpresa })
          .then(empresas => (this.empresas = empresas));
      } else {
        this.empresaService
          .getEmpresaAutocompleteByVeiculo({
            nome: nomeEmpresa,
            idVeiculo: this.veiculoSelecionado.id
          })
          .then(empresas => (this.empresas = empresas));
      }
    },

    getMotoristaAutoComplete(nomeMotorista) {
      if (this.empresaSelecionada == null) {
        this.motoristaService
          .getAutocomplete({ nome: nomeMotorista })
          .then(motoristas => (this.motoristas = motoristas));
      } else {
        this.motoristaService
          .getAutocompleteByEmpresa({
            nome: nomeMotorista,
            idEmpresa: this.empresaSelecionada.id
          })
          .then(empresas => (this.empresas = empresas));
      }
    },
    buscarProdutos() {
      this.produtoService.listar().then(produtos => {
        produtos.forEach(element => {
          this.produtos.push({ text: element.nome, value: element.id });
        });
      });
    },
    pesar() {
      this.service.pesar().then(peso => {
        this.peso = peso;
      });
    },
    salvar() {
      const pesagem = new Pesagem(
        null,
        this.veiculoSelecionado,
        this.empresaSelecionada,
        this.motoristaSelecionado,
        this.data,
        this.peso
      );
      this.service.salvar(pesagem);
    }
  },
  created() {
    this.service = new PesagemService(this.$resource);
    this.veiculoService = new VeiculoService(this.$resource);
    this.empresaService = new EmpresaService(this.$resource);
    this.motoristaService = new MotoristaService(this.$resource);
    this.produtoService = new ProdutoService(this.$resource);
    this.service
      .verificarConexao()
      .then(conectada => (this.balancaConectada = conectada));
    this.buscarProdutos();
  }
};
</script>

<style scoped>
.no-padding {
  padding: 0 !important;
}
#btn-pesar {
  margin: 3% 0;
}
</style>
