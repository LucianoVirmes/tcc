<template>
  <div>
    <b-alert variant="success" :show="alertaSucess" dismissible>Usuário inativado com sucesso!</b-alert>
    <tabela
      :items="usuarios"
      :headers="headers"
      :linkEditar="'/usuario/cadastro'"
      :paramRowEditar="'id'"
      :paramRowExcluir="'id'"
      @codExcluir="getCodExcluir"
      :carregando="carregando"
    />
    <modal
      :id="modalExcluir.id"
      :urlExclusao="modalExcluir.url"
      :texto="modalExcluir.texto"
      :title="modalExcluir.titulo"
      :btnExcluir="modalExcluir.btnExcluir"
      :idExcluir="id"
      @clickConfirm="excluir($event)"
      @success="usuarioExcluido"
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
      id: "",
      modalExcluir: {
        texto: "Deseja mesmo inativar este usuário?",
        titulo: "Inativar",
        id: "modal-excluir",
        url: "/usuario",
        btnExcluir: "Inativar"
      },
      alertaSucess: false,
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
      this.id = codigo;
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
    excluir(codUsuario){
      this.service.inativar(codUsuario).then(()=> console.log('sucesso'));
    },
    usuarioExcluido: function(msg) {
      this.alertaSucess = true;
      this.buscarUsuarios();
    }
  }
};
</script>
<style>
#tabela {
  margin-top: 8%;
}
</style>
