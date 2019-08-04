<template>
<div>   
        <b-alert variant="success" :show="alertaSucess" dismissible>Usuário inativado com sucesso!</b-alert>
        <tabela :items=usuarios :headers=headers :linkEditar="'/usuario/editar'"
        :paramRowEditar="'id'" :paramRowExcluir="'id'" id="tabela" @codExcluir="getCodExcluir"/>
        <modal :id="modalExcluir.id" :urlExclusao="modalExcluir.url"
         :texto="modalExcluir.texto" :title="modalExcluir.titulo" :btnExcluir="modalExcluir.btnExcluir"
         :idExcluir="id" @success="usuarioExcluido"/>

</div>
</template>
<script>
    import Tabela from '../../components/shared/tabela/Tabela.vue';
    import ModalExcluir from '../../components/shared/modal/ModalExcluir.vue';

export default {
   data (){
       return {
           id: "",
           modalExcluir: {
               texto: "Deseja mesmo inativar este usuário?",
               titulo: "Inativar",
               id: "modal-excluir",
               url: "http://localhost:3000/usuario/inativar/",
               btnExcluir: "Inativar"
            }, 
            alertaSucess: false,
           headers: {
               id:{
                   label:"Codigo",
                   sortable:true 
               },
               nome: {
                   key:"pessoa.nome",
                   label: "Nome",
                   sortable:true
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
                   key: 'actions',
                   label: "Opções" 
               },
           },
           usuarios: []
        }
   },
   components: {
       'tabela': Tabela,
       'modal': ModalExcluir
   },
    created () {
      this.buscarUsuarios();
    },
    methods: {
        getCodExcluir: function(codigo){
            this.id = codigo;
        },
        buscarUsuarios: function(){
            this.$http.get('http://localhost:3000/usuario/lista')
        .then(res => res.json())
        .then(usuarios => {
          this.usuarios = usuarios
          }
          , err => console.log(err));
        },
        usuarioExcluido: function(msg){
                this.alertaSucess = true;
                this.buscarUsuarios();
        }
    }
}
</script>
<style>
    #tabela {
        margin-top: 8%;
    }
</style>
