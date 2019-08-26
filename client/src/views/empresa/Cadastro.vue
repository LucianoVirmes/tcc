<template>
  <div>
    <b-alert variant="success" :show="alertaSuccess" dismissible>Empresa salva com sucesso!</b-alert>
    <b-alert
      variant="danger"
      :show="alertaErro"
      dismissible
    >Houve um erro ao submeter o formulário!</b-alert>
    <form class="form" @submit.prevent="enviarForm()">
      <fieldset>
        <div class="form-group">
          <label>Nome</label>
          <input
            type="text"
            v-validate="{required: true, min: 4, max: 15}"
            name="nome"
            class="form-control"
            v-model="empresa.nome"
          />
          <span class="text-danger" v-if="errors.has('nome')">{{errors.first('nome')}}</span>
        </div>
        <div class="form-group">
          <label>CNPJ</label>
          <input
            v-validate="{required: true, min: 14, max: 18}"
            v-mask="'##.###.###/####-##'"
            name="cnpj"
            class="form-control"
            v-model="empresa.cnpj"
          />
          <span class="text-danger" v-if="errors.has('cnpj')">{{errors.first('cnpj')}}</span>
        </div>
        <div class="form-group">
          <label>E-mail</label>
          <input
            v-validate
            rules="email"
            placeholder="email@exemplo.com"
            type="email"
            name="email"
            class="form-control"
            v-model="empresa.email"
          />
          <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
        </div>
        <button class="btn btn-primary">Enviar</button>
      </fieldset>
    </form>
  </div>
</template>

<script>

import Empresa from '../../domain/empresa/Empresa';
import EmpresaService from '../../domain/empresa/EmpresaService';
import ValidationProvider from "vee-validate";

export default {
  data() {
    return {
      empresa: new Empresa(),
      alertaSuccess: false,
      alertaErro: false
    };
  },
  methods: {
    enviarForm() {
     
        this.service.cadastrar(this.empresa)
        .then(res => {
          this.empresa = new Empresa();
          this.showAlert(res);
        });
    },
    showAlert: function(res) {
      if (res.ok) {
        this.alertaSuccess = true;
      } else {
        this.alertaErro = true;
      }
    },
    buscaDados: function(id) {
        this.service.visualizar(id)
        .then(empresa => {
         this.empresa = empresa;
        });
    }
  },
  created() {
    this.service = new EmpresaService(this.$resource);

    document.title = this.$route.meta.title;
    if (this.$route.params.id) {
      this.buscaDados(this.$route.params.id);
    }
  },

};
</script>

<style>
</style>
