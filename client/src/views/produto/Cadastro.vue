<template>
    <div>
      <form class="form">
        <fieldset>
          <div class="form-group">
            <label>Nome do produto</label>
            <input type="text" class="form-control" v-model="nome"/>
          </div>  
          <div class="form-group">
            <label>Data de válidade</label>
            <input type="date" class="form-control"  v-model="dataValidade" />
          </div>
          <button class="btn btn-primary" @click="enviar">Enviar</button>
        </fieldset>
      </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nome: "",
            dataValidade: ""
        }        
    },
    methods: {
        enviar: function(event){
            event.preventDefault();

            const formData = {
                nome: this.nome,
                dataValidade: this.dataValidade,
                };   

            this.$http.post('http://localhost:3000/produto/cadastro', formData).
            then(res => {
                console.log(res);
            }, err => {
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>
