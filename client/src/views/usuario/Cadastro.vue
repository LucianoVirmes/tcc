<template>
  <div>
    <b-card bg-variant="light">
      <b-alert variant="success" :show="alertaSucess" dismissible>Usuário salvo com sucesso!</b-alert>
      <b-alert
        variant="danger"
        :show="alertaErro"
        dismissible
      >Houve um erro ao submeter o formulário!</b-alert>
      <form class="form">
        <fieldset>
          <div class="form-group">
            <label>Nome de usuário</label>
            <input type="text" class="form-control" v-model="usuario.nome" />
          </div>
          <div class="form-group">
            <label>Nome data de nascimento</label>
            <input type="date" class="form-control" v-model="usuario.dataNascimento" />
          </div>
          <div class="form-group">
            <label>Permissoes</label>
            <b-form-select v-model="permissaoSelecionada" :options="permissoes">
              <option :value="null" disabled>Selecione uma permissão</option>
            </b-form-select>
          </div>
          <button class="btn btn-primary" v-on:click="click">Enviar</button>
        </fieldset>
      </form>
    </b-card>
  </div>
</template>

<style>
</style>
 
<script>
import Usuario from "../../domain/usuario/Usuario";
import UsuarioService from "../../domain/usuario/UsuarioService";

export default {
  data() {
    return {
      usuario: new Usuario(),
      permissoes: [],
      permissaoSelecionada: null,
      alertaSucess: false,
      alertaErro: false
    };
  },
  methods: {
    click: function(event) {
      event.preventDefault();
      let usuario = this.usuario;
      usuario.permissoes = this.permissaoSelecionada;
      usuario.codigo = this.$route.params.id;

      this.service.cadastrar(usuario).then(
        res => {
          this.usuario = new Usuario();
          this.permissaoSelecionada = null;
          this.showAlert(res);
        },
        err => {
          this.showAlert(err);
          console.log(err);
        }
      );
    },
    buscaDados: function(id) {
      this.service.visualizar(id).then(usuario => {
        this.usuario = new Usuario(
          usuario.codigo,
          usuario.pessoa.nome,
          this.$moment(usuario.pessoa.dataNascimento).format("YYYY-MM-DD"),
          usuario.pessoa.cpf,
          usuario.pessoa.telefone,
          usuario.pessoa.email
        );
        this.permissaoSelecionada = usuario.permissoes;
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
    this.service = new UsuarioService(this.$resource);

    this.service.getPermissoes().then(permissoes => {
      this.permissoes = permissoes;
    });

    if (this.$route.params) {
      this.buscaDados(this.$route.params.id);
    }
  }
};
</script> 