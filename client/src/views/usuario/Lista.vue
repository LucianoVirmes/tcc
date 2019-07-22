<template>
       <tabela :items=usuarios :headers=headers id="tabela"/>
</template>
<script>
    import Tabela from '../../components/shared/tabela/Tabela.vue';
export default {
   data (){
       return {
           headers: ["Codigo", "Nome", "E-mail", "Opções"],
           usuarios: []
        }
   },
   components: {
       'tabela': Tabela
   },
    created () {
      this.$http.get('http://localhost:3000/lista')
      .then(res => res.json())
      .then(usuarios => this.usuarios = usuarios, err => console.log(err));
    }
}
</script>
<style>
    #tabela {
        margin-top: 8%;
    }
</style>
