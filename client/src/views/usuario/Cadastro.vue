<template>
    <div>
      <b-alert variant="success" :show="alertaSucess" dismissible>Usuário salvo com sucesso!</b-alert>
      <b-alert variant="danger" :show="alertaErro" dismissible>Houve um erro ao tentar submeter o formulário!</b-alert>
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
            <b-form-select v-model="permissao" :options="permissoes"></b-form-select>
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
        permissoes: [],
        permissaoSelecionada: "Selecione uma permissão",
        alertaSucess: false,
        alertaErro: false
      }
    },
    methods: {
      
      click: function (event) {
        event.preventDefault();

       const formData = {
        codigo: this.$route.params.id, 
        nome: this.nome,
        dataNascimento: this.dataNascimento,
        permissoes: this.permissao
        };   

       this.$http.post('http://localhost:3000/usuario/cadastro', formData).
       then(res => {
         this.showAlert(res);
       }, err => {
         this.showAlert(err)
         console.log(err);
       })
      },
      buscaDados: function (pessoa){
          this.$http.get('http://localhost:3000/usuario/visualizar', {params: {codigo: pessoa.id}}).
          then(res => res.json()).then(usuario => {
            this.nome = usuario.pessoa.nome;
            this.dataNascimento = this.$moment(usuario.pessoa.dataNascimento).format("YYYY-MM-DD");
            this.permissao = usuario.permissoes.toUpperCase();
          });
      },
      
      showAlert: function(res){
       if(res.ok){
         this.alertaSucess = true;
      } else {
        this.alertaErro = true;
      }
    },
  },
    created(){
      this.$http.get('http://localhost:3000/usuario/cadastro')
      .then(res => res.json())
      .then(permissoes => this.permissoes = permissoes);

      if(this.$route.params){
        this.buscaDados(this.$route.params);
      }
    }
  }
</script> 