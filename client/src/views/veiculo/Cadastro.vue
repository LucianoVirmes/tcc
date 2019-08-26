<template>
  <div>
    <b-alert variant="success" :show="alertaSucess" dismissible>Veículo salvo com sucesso!</b-alert>
    <b-alert variant="danger" :show="alertaErro" dismissible>Houve um erro ao submeter o formulário!</b-alert>
    <form class="form" @submit.prevent="enviar()">
      <fieldset>
        <div class="form-group">
          <label>Placa</label>
          <input
            type="text"
            v-validate
            data-vv-rules="required|min:7|max:8"
            name="placa"
            class="form-control"
            v-model="veiculo.placa"
          />
          <span class="text-danger" v-if="errors.has('placa')">{{ errors.first('placa') }}</span>
        </div>
        <div class="form-group">
          <label>Tara</label>
          <input
            type="text"
            v-validate
            rules="number"
            name="tara"
            class="form-control"
            v-model="veiculo.tara"
          />
           <span class="text-danger" v-if="errors.has('tara')">{{ errors.first('tara') }}</span>
        </div>
        <button class="btn btn-primary">Enviar</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import VeiculoService from "../../domain/veiculo/VeiculoService";
import Veiculo from "../../domain/veiculo/Veiculo";

export default {
  data() {
    return {
      veiculo: new Veiculo(),
      alertaSucess: false,
      alertaErro: false
    };
  },
  methods: {
    enviar: function() {
      this.$validator.validateAll().then(success => {
        if (success) {
          if (this.veiculo.id) {
            this.service
              .alterar(this.veiculo)
              .then(res => this.showAlert(res), err => this.showAlert(err));
          } else {
            this.service.cadastrar(this.veiculo).then(
              res => {
                this.showAlert(res);
                this.veiculo = new Veiculo();
              },
              err => this.showAlert(res)
            );
          }
        }
      });
    },
    buscaVeiculo(id) {
      this.service.visualizar(id).then(veiculo => {
        this.veiculo.id = veiculo.id;
        this.veiculo.tara = veiculo.tara;
        this.veiculo.placa = veiculo.placa;
      });
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
    this.service = new VeiculoService(this.$resource);

    if (this.$route.params) {
      this.buscaVeiculo(this.$route.params.id);
    }
  }
};
</script>

<style>
</style>
