<template>
  <div>
    <h1>Login</h1>
    <form action="/login" method="POST" @submit.prevent="logar">
      <input name="username" type="text" v-model="login"/>
      <br />
      <input name="password" type="password" v-model="senha"/>
      <br />
      <input type="submit" value="Login" />
    </form>
    <p>
      <label style="color:Red"></label>
    </p>
    <p>
      <a href="/users/forgot">Esqueceu sua senha?</a> |
      <a href="/users/signup">Não possui cadastro?</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      senha: '' 
    }
  },
    methods: {
      logar() {
        this.resource.save()
      }
    },

    created() {
      this.resource =  this.$resource('login{/id}');
    }
}
</script>

<style>
</style>