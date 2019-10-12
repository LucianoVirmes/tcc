<template>
  <div>
    <b-card bg-variant="light">
      <b-alert variant="success" :show="alertaSucess" dismissible>Produto salvo com sucesso!</b-alert>
      <b-alert
        variant="danger"
        :show="alertaErro"
        dismissible
      >Houve um erro ao submeter o formulário!</b-alert>
      <form class="form" @submit.prevent="enviar()">
        <fieldset>
          <div class="form-group">
            <label>Nome do produto</label>
            <input
              type="text"
              v-validate
              data-vv-rules="required|min:3|max:10"
              name="nome"
              class="form-control"
              v-model="produto.nome"
            />
            <span class="text-danger" v-if="errors.has('nome')">{{ errors.first('nome') }}</span>
          </div>
          <div class="form-group">
            <label>Unidade de medida</label>
            <input
              type="text"
              v-validate
              data-vv-rules="required|min:1|max:10"
              name="unidade"
              class="form-control"
              v-model="produto.unidademedida"
            />
            <span class="text-danger" v-if="errors.has('unidade')">{{ errors.first('unidade') }}</span>
          </div>
          <botoes-form @cancelar="resetForm()" />
        </fieldset>
      </form>
    </b-card>
  </div>
</template>

<script>
import ProdutoService from "../../domain/produto/ProdutoService";
import Produto from "../../domain/produto/Produto";
import BotoesFormulario from '../../components/shared/buttons/BotoesFormulario.vue';
export default {
  data() {
    return {
      produto: new Produto(),
      alertaSucess: false,
      alertaErro: false
    };
  },
  methods: {
    enviar: function() {
      this.$validator.validateAll().then(success => {
        if (success) {
          if (this.produto.id) {
            this.service
              .alterar(this.produto)
              .then(res => this.showAlert(res), err => this.showAlert(err));
          } else {
            this.service.cadastrar(this.produto).then(
              res => {
                this.showAlert(res);
                this.produto = new Produto();
              },
              err => this.showAlert(res)
            );
          }
        }
      });
    },
    buscaProduto(id) {
      this.service.visualizar(id).then(produto => {
        this.produto.id = produto.id;
        this.produto.nome = produto.nome;
        this.produto.unidademedida = produto.unidademedida;
      });
    },
    showAlert: function(res) {
      if (res.ok) {
        this.alertaSucess = true;
      } else {
        this.alertaErro = true;
      }
    }, 
    resetForm: function() {
      this.produto = new Produto();
    }
  },
  created() {
    this.service = new ProdutoService(this.$resource);

    if (this.$route.params) {
      this.buscaProduto(this.$route.params.id);
    }
  },
  components: {
    botoesForm: BotoesFormulario
  }
};
</script>

<style>
</style>
