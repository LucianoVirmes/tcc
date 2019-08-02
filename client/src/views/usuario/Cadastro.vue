<template>
    <div>
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
            <select class="custom-select" v-model="permissao"> 
              
              <option v-for="permissao of permissoes" :key="permissao" v-bind:value="{permissao}">{{permissao}}</option>
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
        nome: "",
        dataNascimento: "",
        permissao: { },
        codpessoa: "",
        permissoes: []
      }
    },
    methods: {
      
      click: function (event) {
        event.preventDefault();

       const formData = {
        nome: this.nome,
        dataNascimento: this.dataNascimento,
        permissoes: this.permissao.permissao
        };   

       this.$http.post('http://localhost:3000/cadastro', formData).
       then(res => {
         console.log(res);
       }, err => {
         console.log(err);
       })
      },
      buscaDados: function (codpessoa){
          const formData = {
            codigo: codpessoa
          };
          this.$http.get('http://localhost:3000/usuario/visualizar', formData).
          then(res => {
            console.log(res);
            this.nome = res.codigo;
            this.dataNascimento = res.dataNascimento;
            this.permissoes = res.permissoes;
          }, err => console.log(err)) 
      }
    },
    created(){
      this.$http.get('http://localhost:3000/cadastro')
      .then(res => res.json())
      .then(permissoes => this.permissoes = permissoes, err => console.log(err));

      if(this.$route.params){
        this.buscaDados(this.$route.params);
      }
    }
  }
</script> 