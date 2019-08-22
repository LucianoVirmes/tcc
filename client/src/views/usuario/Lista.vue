<template>
  <div>
    <b-alert variant="success" :show="alertaSuccess" dismissible>Usuário inativado com sucesso!</b-alert>
    <tabela
      :items="usuarios"
      :headers="headers"
      :linkEditar="'/usuario/cadastro'"
      :paramRowEditar="'id'"
      :paramRowExcluir="'id'"
      @codExcluir="getCodExcluir"
      :carregando="carregando"
      @clickConfirm="excluir()"
    />
    <modal
      :id="modalExcluir.id"
      :urlExclusao="modalExcluir.url"
      :texto="modalExcluir.texto"
      :title="modalExcluir.titulo"
      :btnExcluir="modalExcluir.btnExcluir"
      @clickConfirm="excluir($event)"
    />
  </div>
</template>
<script>
import Tabela from "../../components/shared/tabela/Tabela.vue";
import UsuarioService from "../../domain/usuario/UsuarioService";
import ModalExcluir from "../../components/shared/modal/ModalExcluir.vue";
import Usuario from "../../domain/usuario/Usuario";

export default {
  data() {
    return {
      modalExcluir: {
        texto: "Deseja mesmo inativar este usuário?",
        titulo: "Inativar",
        id: "modal-excluir",
        url: "/usuario",
        btnExcluir: "Inativar"
      },
      alertaSuccess: false,
      headers: {
        id: {
          label: "Codigo",
          sortable: true
        },
        nome: {
          key: "pessoa.nome",
          label: "Nome",
          sortable: true
        },
        email: {
          label: "E-mail"
        },
        status: {
          label: "Status",
          key: "dataDemissao",
          sortable: true
        },
        opcoes: {
          key: "actions",
          label: "Opções"
        }
      },
      carregando: false,
      usuario: new Usuario(),
      usuarios: []
    };
  },
  components: {
    tabela: Tabela,
    modal: ModalExcluir
  },
  created() {
    this.service = new UsuarioService(this.$resource);

    this.buscarUsuarios();
  },
  methods: {
    getCodExcluir: function(codigo) {
      this.usuario.id = codigo;
    },
    buscarUsuarios: function() {
      this.service.listar().then(
        usuarios => {
          this.carregando = false;
          this.usuarios = usuarios;
        },
        err => {
          this.carregando = false;
          console.log(err);
        }
      );
    },
    excluir(){
      this.service.inativar(this.usuario.id).then(res => {
        this.alertaSuccess = true;
        this.buscarUsuarios();
      }, err => console.log(err));
    },
  }
};
</script>
<style>
#tabela {
  margin-top: 8%;
}
</style>
