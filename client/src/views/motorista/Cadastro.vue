<template>
  <div>
    <b-alert variant="success" :show="alertaSucess" dismissible>Motorista salvo com sucesso!</b-alert>
    <b-alert
      variant="danger"
      :show="alertaErro"
      dismissible
    >Houve um erro ao tentar submeter o formulário!</b-alert>
    <form class="form" @submit.prevent="enviarForm()">
      <fieldset>
        <div class="form-group">
          <label>Nome do motorista</label>
          <input
            type="text"
            name="nome"
            v-validate="{required: true, min: 3, max: 10}"
            class="form-control"
            v-model="motorista.pessoa.nome"
          />
          <span class="text-danger" v-if="errors.has('nome')">{{errors.first("nome")}}</span>
        </div>
        <div class="form-group">
          <label>CNH do motorista</label>
          <input
            class="form-control"
            name="cnh"
            v-validate="{required: true, min:11, max: 15 }"
            v-model="motorista.cnh"
          />
          <span class="text-danger" v-if="errors.has('cnh')">{{errors.first("cnh")}}</span>
        </div>

        <button class="btn btn-primary">Salvar</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import MotoristaEmpresa from "./MotoristaEmpresa.vue";
import Motorista from "../../domain/motorista/Motorista";
import MotoristaService from "../../domain/motorista/MotoristaService";

export default {
  data() {
    return {
      motorista: new Motorista(),
      alertaSucess: false,
      alertaErro: false
    };
  },
  methods: {
    enviarForm: function() {
      this.$validator.validateAll().then(success => {
        if (success) {
          this.service.cadastrar(this.motorista).then(
            res => {
              this.motorista = new Motorista();
              this.showAlert(res);
            },
            err => this.showAlert(err)
          );
        }
      });
    },

    buscaDados: function(id) {
      this.service.visualizar(id).then(motorista => {
        this.motorista = motorista;
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
    this.service = new MotoristaService(this.$resource);
    if (this.$route.params.id) {
      this.buscaDados(this.$route.params.id);
    }
  },
  components: {
    motoristaEmpresa: MotoristaEmpresa
  }
};
</script>

<style scoped>
.tabs {
  min-height: 500px;
}
</style>
