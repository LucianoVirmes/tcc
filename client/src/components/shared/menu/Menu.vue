<template>
<div class="menu">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
      <router-link class="text-white text-decoration-none" :to="rotasPadrao[0].path">{{rotasPadrao[0].titulo}}</router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Opcoes" right>
          <b-dropdown-item v-for="(rotaPadrao, index) in startFrom(rotasPadrao, 1)" :key="index" href="#">
             <router-link :to="rotaPadrao.path">{{rotaPadrao.titulo}}</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <template slot="button-content"><em>Usuário</em></template>
          <b-dropdown-item v-for="(rotaUsuario, index) in rotasUsuario" :key="index" href="#">
             <router-link :to="rotaUsuario.path">{{rotaUsuario.titulo}}</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>  
</template>

<script>

import {rotasUsuario} from '../../../route/rotasUsuario.js';
import {rotasPadrao} from '../../../route/rotasPadrao';

export default {
    data(){
      return {
        rotasUsuario,
        rotasPadrao
      }
    },
    methods:{
      startFrom (array, index) {
        return array.slice(index)
      }
    }
}
</script>

<style scoped>
    .menu {
      margin-bottom: 3%;
    }
   
</style>
