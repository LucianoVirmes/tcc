<template>
  <div class="menu">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <router-link
          class="text-white text-decoration-none"
          :to="rotasPadrao[0].path"
        >{{rotasPadrao[0].titulo}}</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="(rota, index) in filtraPorMenuAtivo(rotasPadrao)" :key="index" right>
            <router-link
              :to="rota.path"
              class="nav-link"
            >{{rota.titulo}}</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { rotasPadrao } from "../../../route/rotasPadrao.js";

export default {
  data() {
    return {
      rotasPadrao,
      ativo: false
    };
  },
  methods: {
    filtraPorMenuAtivo(array) {
      return array.filter(function(value) {
        return value.menu != false;
      });
    },
  }
};
</script>

<style scoped>
.menu {
  margin-bottom: 0.3%;
}
a.router-link-active {
  font-weight: 900;
}
</style>
