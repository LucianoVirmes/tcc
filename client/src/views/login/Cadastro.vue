<template>
  <div>
    <b-modal
      id="modalLogin"
      title="Novo usuário"
      :hide-footer="true"
      :hide-header-close="true"
      no-close-on-backdrop
      @close="prevent"
      @hide="prevent"
    >
      <b-card bg-variant="light">
        <b-alert variant="success" :show="alertaSucess" dismissible>Usuário salvo com sucesso!</b-alert>
        <b-alert variant="danger" :show="alertaErro" dismissible>{{errRes}}</b-alert>
        <form class="form" @submit.prevent="enviar()">
          <fieldset>
            <div class="form-group">
              <label>Usuario</label>
              <input
                type="email"
                v-validate
                data-vv-rules="required"
                name="email"
                class="form-control"
                v-model="email"
              />
              <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
            </div>
            <div class="form-group">
              <label>Senha</label>
              <input
                type="password"
                v-validate
                data-vv-rules="required|min:6"
                name="senha"
                ref="senha"
                class="form-control"
                v-model="password"
              />
              <span class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</span>
              <label>Confirme sua senha</label>
              <input
                type="password"
                v-validate="'required|confirmed:senha'"
                name="confirmação de senha"
                class="form-control"
                v-model="confirmPassword"
              />
              <span class="text-danger" v-if="errors.has('confirmação de senha')">{{ errors.first('confirmação de senha') }}</span>
            </div>
            <BotoesFormularioVue @cancelar="voltar()" />
          </fieldset>
        </form>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
import firebase from "firebase";
import BotoesFormularioVue from "../../components/shared/buttons/BotoesFormulario.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: '',
      nome: "",
      alertaSucess: false,
      alertaErro: false,
      errRes: null
    };
  },
  methods: {
    enviar() {
      this.$validator.validateAll().then(success => {
        if (success) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(
              res => {
                this.alertaSucess = true;
              },
              err => {
                this.alertaErro = true;
                this.errRes = err;
              }
            );
        }
      });
    },
    showModal() {
      this.$bvModal.show("modalLogin");
    },
    prevent(e) {
      e.preventDefault();
    }, 
    voltar() {
      this.$router.replace('login');
    }
  },
  components: {
    BotoesFormularioVue
  },
  mounted() {
    this.showModal();
  }
};
</script>

<style>
</style>