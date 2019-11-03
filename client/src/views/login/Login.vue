<template>
  <div>
    <b-modal
      id="modalLogin"
      title="Login"
      :hide-footer="true"
      :hide-header-close="true"
      no-close-on-backdrop
      @close="prevent"
      @hide="prevent"
    >
      <b-card bg-variant="light">
        <form class="form" @submit.prevent="login()">
          <fieldset>
            <b-alert variant="success" :show="alertaSucess" dismissible>Usuário logado com sucesso!</b-alert>
            <b-alert variant="danger" :show="alertaErro" dismissible>{{errRes}}</b-alert>
            <div class="form-group">
              <label>Usuario</label>
              <input
                type="email"
                v-validate
                data-vv-rules="required"
                name="email"
                class="form-control"
                v-model="usuario"
              />
              <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
            </div>
            <div class="form-group">
              <label>Senha</label>
              <input
                type="password"
                v-validate
                data-vv-rules="required"
                name="senha"
                class="form-control"
                v-model="senha"
              />
              <span class="text-danger" v-if="errors.has('senha')">{{ errors.first('senha') }}</span>
            </div>
            <b-button variant="primary" type="submit" :disabled="carregando == true">
              <b-spinner v-if="carregando" small></b-spinner>
              <span v-bind:class="{'ml-2':carregando}">Login</span>
            </b-button>
            <b-button variant="primary" class="ml-3">
              <router-link to="/cadastre-se" class="text-white text-decoration-none">Cadastre-se!</router-link>
            </b-button>
          </fieldset>
        </form>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      senha: "",
      usuario: "",
      alertaSucess: false,
      alertaErro: false,
      errRes: "",
      carregando: false
    };
  },
  methods: {
    login() {
      this.carregando = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.senha)
        .then(
          res => {
            this.$router.replace("home");
          },
          err => {
            this.trataResponseFirebase(err);
          }
        );
    },
    trataResponseFirebase(res) {
      this.alertaErro = true;
      this.errRes = "A senha é inválida ou o usuário não existe.";
      this.carregando = false;
    },
    showModal() {
      this.$bvModal.show("modalLogin");
    },
    prevent(e) {
      e.preventDefault();
    }
  },
  mounted() {
    this.showModal();
  }
};
</script>

<style>
</style>