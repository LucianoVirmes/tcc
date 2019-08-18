<template>
  <div>
    <b-alert variant="success" :show="alertaSucess" dismissible>
      Produto excluido com sucesso!</b-alert>
    <tabela
      :items="produtos"
      :headers="headers"
      :linkEditar="'/produto/cadastro'"
      :paramRowEditar="'id'"
      :carregando="carregando"
      :paramRowExcluir="'id'"
      @codExcluir="getCodExcluir"
    />
    <modal
      :id="modalExcluir.id"
      :texto="modalExcluir.texto"
      :title="modalExcluir.titulo"
      :btnExcluir="modalExcluir.btnExcluir"
      @clickConfirm="excluir()"
    />
  </div>
</template> 

<script>
import Tabela from "../../components/shared/tabela/Tabela.vue";
import ModalExcluir from "../../components/shared/modal/ModalExcluir.vue";
import Produto from "../../domain/produto/Produto";
import ProdutoService from "../../domain/produto/ProdutoService";

export default {
  data() {
    return {
      alertaSucess: false,
      carregando: false,
      modalExcluir: {
        texto: "Deseja mesmo excluir esse produto?",
        titulo: "Excluir",
        id: "modal-excluir",
        btnExcluir: "Excluir"
      },
      headers: {
        id: {
          label: "Codigo"
        },
        nome: {
          label: "Nome"
        },
        unidade: {
          label: "Unidade de medida",
          key: "unidademedida"
        },
        opcoes: {
          key: "actions",
          label: "Opções"
        }
      },
      carregando: {
        type: Boolean,
        default: false
      },
      produtos: [],
      produto: new Produto()
    };
  },
  components: {
    tabela: Tabela,
    modal: ModalExcluir
  },
  created() {
    this.carregando = true;
    this.service = new ProdutoService(this.$resource);

    this.service.listar().then(
      produtos => {
        this.produtos = produtos;
        this.carregando = false;
      },
      err => {
        console.log(err);
        this.carregando = false;
      }
    );
  },
  methods: {
    excluir(){
      this.service.remover(this.produto.id).then(res => {
        this.alertaSucess = true;
        this.produtos.splice(this.produtos.indexOf(this.produto.id));
      });
    },
    getCodExcluir(id){
      this.produto.id = id;
    }
  }
};
</script>

<style>
</style>
