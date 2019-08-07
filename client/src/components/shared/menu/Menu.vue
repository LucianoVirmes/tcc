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
        <b-nav-item-dropdown text="Produtos" right>
          <b-dropdown-item v-for="(rotaProduto, index) in filtraPorMenuAtivo(rotasProduto)" :key="index" href="#">
             <router-link :to="rotaProduto.path">{{rotaProduto.titulo}}</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Balança" right>
          <b-dropdown-item v-for="(rotaPadrao, index) in filtraPorMenuAtivo(rotasPadrao)" :key="index" href="#">
             <router-link :to="rotaPadrao.path">{{rotaPadrao.titulo}}</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <template slot="button-content"><em>Usuário</em></template>
          <b-dropdown-item v-for="(rotaUsuario, index) in filtraPorMenuAtivo(rotasUsuario)" :key="index" href="#">
              <router-link :to="rotaUsuario.path">{{rotaUsuario.titulo}}</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <template slot="button-content"><em>Motorista</em></template>
          <b-dropdown-item v-for="(rotaMotorista, index) in filtraPorMenuAtivo(rotasMotorista)" :key="index" href="#">
              <router-link :to="rotaMotorista.path">{{rotaMotorista.titulo}}</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <template slot="button-content"><em>Empresa</em></template>
          <b-dropdown-item v-for="(rotaEmpresa, index) in filtraPorMenuAtivo(rotasEmpresa)" :key="index" href="#">
              <router-link :to="rotaEmpresa.path">{{rotaEmpresa.titulo}}</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>  
</template>

<script>

import {rotasUsuario} from '../../../route/rotasUsuario.js';
import {rotasPadrao} from '../../../route/rotasPadrao.js';
import {rotasProduto} from '../../../route/rotasProduto.js';
import {rotasMotorista} from '../../../route/rotasMotorista.js';
import {rotasEmpresa} from '../../../route/rotasEmpresa.js';

export default {
    data(){
      return {
        rotasUsuario,
        rotasPadrao,
        rotasProduto,
        rotasMotorista,
        rotasEmpresa
      }
    },
    methods:{
      filtraPorMenuAtivo(array){
       return array.filter(function(value){
            return value.menu != false;
        });

      }
    }
}
</script>

<style scoped>
    .menu {
      margin-bottom: 3%;
    }
   
</style>
