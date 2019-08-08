<template>
    <div>
    <b-card no-body class="tabs">
    <b-tabs pills card vertical>
    <b-tab title="Dados do motorista" active>
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
          
          <button class="btn btn-primary" v-on:click="enviarForm">Salvar</button>
        </fieldset>
      </form>
    </b-tab>
    <b-tab title="Empresas">
       <motoristaEmpresa />
    </b-tab>
    </b-tabs>
    </b-card>
    </div>
</template>

<script>
    
    import MotoristaEmpresa from './MotoristaEmpresa.vue';

export default {

    data(){
        return {
            nome: "",
            cnh: "",
            alertaSucess: false,
            alertaErro: false,
            
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
                    empresa: {
                        id: this.empresaSelected
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
    },
    components: {
        'motoristaEmpresa':MotoristaEmpresa
    }
    
}
</script>

<style scoped>
    .tabs {
        min-height: 500px;
    }
</style>
