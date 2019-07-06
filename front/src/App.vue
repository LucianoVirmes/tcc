<template>
    <div class="div">
      <form>
          <label>Nome de usuário</label>
          <input type="text" />
          <button v-on:click="click">Enviar</button>
      </form>
    </div>
</template>

<style>

</style>
 
<script>
  export default {
    methods: {
      click: function () {
       this.$http.post('http://localhost:3000/cadastro').
       then(res => {
         console.log(res);
       }, err => {
         console.log(err);
       })
      }
    }
  }
</script> 
 
