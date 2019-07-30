<template>
       <tabela :items=usuarios :headers=headers id="tabela"/>
</template>
<script>
    import Tabela from '../../components/shared/tabela/Tabela.vue';
   
export default {
   data (){
       return {
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
               opcoes: {
                   key: 'actions',
                   label: "Opções" 
               }
           },
           usuarios: []
        }
   },
   components: {
       'tabela': Tabela
   },
    created () {
      this.$http.get('http://localhost:3000/lista')
      .then(res => res.json())
      .then(usuarios => {
          this.usuarios = usuarios
          }
          , err => console.log(err));
    }
}
</script>
<style>
    #tabela {
        margin-top: 8%;
    }
</style>
