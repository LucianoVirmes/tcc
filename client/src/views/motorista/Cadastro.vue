<template>
    <div>
      <b-alert variant="success" :show="alertaSucess" dismissible>Motorista salvo com sucesso!</b-alert>
      <b-alert variant="danger" :show="alertaErro" dismissible>Houve um erro ao tentar submeter o formulário!</b-alert>
      <form class="form">
        <fieldset>
          <div class="form-group">
            <label>Nome do motorista</label>
            <input type="text" class="form-control" v-model="nome" />
          </div>  
          <div class="form-group">
            <label>CNH do motorista</label>
            <input type="number" class="form-control" v-model="cnh" />
          </div>
          <button class="btn btn-primary" v-on:click="enviarForm">Enviar</button>
        </fieldset>
      </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nome: "",
            cnh: "",
            alertaSucess: false,
            alertaErro: false
        }
    }, 
    methods: {
        enviarForm: function(evt){
            evt.preventDefault();

            const FormData = {
                    id: this.$route.params.id,
                    pessoa: {
                        nome: this.nome
                    },
                    cnh: this.cnh
                }
            this.$http.post('http://localhost:3000/motorista/cadastro', FormData).
            then(res => {
                this.showAlert(res);
            }, err => {
                this.showAlert(err)
                console.log(err);
            });
        },
         
         buscaDados: function (motorista){
            this.$http.get('http://localhost:3000/motorista/visualizar', {params: {id: motorista.id}}).
            then(res => res.json()).then(motorista => {
                this.nome = motorista.pessoa.nome,
                this.cnh = motorista.cnh
            });
        }, 
        
        showAlert: function(res){
            if(res.ok){
                this.alertaSucess = true;
            } else {
                this.alertaErro = true;
            }
        }
    },

    created(){
        if(this.$route.params){
            this.buscaDados(this.$route.params);
        }
    }
}
</script>

<style>

</style>
