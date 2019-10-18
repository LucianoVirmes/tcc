<template>
  <b-card bg-variant="light">
    <b-alert variant="success" :show="alertaSucess" dismissible>Pesagem salva com sucesso!</b-alert>
    <b-alert
      variant="danger"
      :show="alertaErro"
      dismissible
    >Houve um erro ao tentar submeter o formulário!</b-alert>
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
              title="Falha na conexão"
              type="number"
              v-model="peso"
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="info" id="popover-button-open">Pesar</b-button>
            </b-input-group-append>
            <b-popover target="popover-button-open" triggers="hover focus" title="Falha na conexão">
              O Arduino está
              <strong>desconectado!</strong>
            </b-popover>
          </b-input-group>
        </div>
      </div>
      <div class="row form-group">
        <div class="col-sm-8 col-md-6">
          <label>Motorista</label>
          <autocompleteMotorista @select="selecionaMotorista" />
        </div>
        <div class="col-sm-8 col-md-6">
          <label>Empresa</label>
          <autocompleteEmpresa @select="selecionaEmpresa" />
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
import AutoCompleteEmpresa from "../../components/shared/inputs/AutoCompleteEmpresa.vue";
import AutoCompleteMotorista from "../../components/shared/inputs/AutoCompleteMotorista.vue";
import BotoesFormulario from "../../components/shared/buttons/BotoesFormulario.vue";
import PesagemService from "../../domain/pesagem/PesagemService";
import EmpresaService from "../../domain/empresa/EmpresaService.js";
import VeiculoService from "../../domain/veiculo/VeiculoService.js";
import MotoristaService from "../../domain/motorista/MotoristaService.js";
import ProdutoService from "../../domain/produto/ProdutoService.js";
import Pesagem from "../../domain/pesagem/Pesagem.js";
import IntegracaoBalancaController from "../../domain/pesagem/IntegracaoBalancaController.js";
import InputSearch from "../../components/shared/inputs/InputSearch.vue";

export default {
  data() {
    return {
      veiculos: [],
      empresas: [],
      motoristas: [],
      produtos: [],
      peso: "",
      data: "",
      veiculoSelecionado: null,
      empresaSelecionada: null,
      motoristaSelecionado: null,
      produtoSelecionado: null,
      balancaConectada: false,
      alertaErro: false,
      alertaSucess: false
    };
  },
  components: {
    botoesform: BotoesFormulario,
    autocompleteEmpresa: AutoCompleteEmpresa,
    autocompleteMotorista: AutoCompleteMotorista,
    inputsearch: InputSearch
  },
  methods: {
    onSubmit() {},

    getVeiculosAutocomplete(evt) {
      this.veiculoService.getVeiculosByPlaca({ placa: evt }).then(veiculos => {
        this.veiculos = veiculos;
      });
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
        this.peso = parseFloat(peso);
      });
    },
    selecionaMotorista(motorista) {
      this.motoristaSelecionado = motorista;
    },
    selecionaEmpresa(empresa) {
      this.empresaSelecionada = empresa;
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
      this.service.salvar(pesagem).then(res => this.showAlert(res));
    },
    showAlert: function(res) {
      if (res.ok) {
        this.alertaSucess = true;
      } else {
        this.alertaErro = true;
      }
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
