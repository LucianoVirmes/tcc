<template>
    <div class="div container">
      <form class="form">
        <fieldset>
          <div class="form-group">
            <label>Nome de usuário</label>
            <input type="text" class="form-control" v-model="nome"/>
          </div>  
          <div class="form-group">
            <label>Nome data de nascimento</label>
            <input type="date" class="form-control"  v-model="dataNascimento" />
          </div>
          <div class="form-group">
            <label>Permissoes</label>
            <select class="custom-select">
              <option v-for="permissao of permissoes" :key="permissao">{{permissao}}</option>
            </select>
          </div>
          <button class="btn btn-primary" v-on:click="click">Enviar</button>
        </fieldset>
      </form>
    </div>
</template>

<style>

</style>
 
<script>
  export default {
    data() {
      return {
        permissoes: []
      }
    },
    methods: {
      click: function () {
       const formData = {
        nome: this.nome,
        dataNascimento: this.dataNascimento,
        permissoes: this.permissoes
        };   

       this.$http.post('http://localhost:3000/cadastro', formData).
       then(res => {
         console.log(res);
       }, err => {
         console.log(err);
       })
      }
    },
    created(){
      this.$http.get('http://localhost:3000/cadastro')
      .then(res => res.json())
      .then(permissoes => this.permissoes = permissoes, err => console.log(err));
    }
  }
</script> 