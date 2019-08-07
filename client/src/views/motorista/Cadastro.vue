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
            <b-form-select v-model="empresaSelected" :options="options" class="mb-3">
            <template slot="first">
                <option :value="null" disabled>Selecione uma empresa</option>
            </template>
            </b-form-select>
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
            alertaErro: false,
            options: [],
            empresaSelected: null
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
        buscaEmpresas: function (){
            this.$http.get('http://localhost:3000/motorista/cadastro')
            .then(res => res.json()).then(empresas => {
                empresas.forEach(empresa => {
                    this.options.push({value: empresa.id, text:empresa.nome})
                });
            })
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
        this.buscaEmpresas();
    }
}
</script>

<style>

</style>
