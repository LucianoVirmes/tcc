<template>
<div>
  <ul class="nav nav justify-content-end">       
        <li v-for="rota in rotas" class="nav-item">
          <router-link :to="rota.path ? rota.path : '/'" class="nav-link">
            {{ rota.titulo }}
          </router-link>
        </li>
    </ul>
</div>    
</template>

<script>
export default {
    props: {
        rotas: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    
</style>
