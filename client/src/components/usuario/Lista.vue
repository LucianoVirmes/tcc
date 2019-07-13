<template>
        <table class="table table-responsive col-sm-12 table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Opções</th>
                </tr> 
            </thead>
            <tbody>
                <tr v-for="usuario of usuarios" :key="usuario">
                    <td>{{usuario.codigo}}</td>
                    <td>{{usuario.nome}}</td>
                    <td>{{usuario.email}}</td>
                    <td>opcao</td>    
                </tr>
            </tbody>    
        </table>
</template>
<script>
export default {
   data (){
       return {
           usuarios: []
        }
   },
    created () {
      this.$http.get('http://localhost:3000/lista')
      .then(res => res.json())
      .then(usuarios => this.usuarios = usuarios, err => console.log(err));
    }
}
</script>
<style>

</style>
