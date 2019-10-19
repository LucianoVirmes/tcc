<template>
  <div>
    <menuHorizontal :rotas="rotas" />
  </div>
</template>

<script>

import MenuVertical from '../../components/shared/menu/MenuVertical.vue';
import { rotasTela } from "../../route/rotasVeiculo.js";

export default {
  data() {
    return {
      rotas: [rotasTela.lista, rotasTela.cadastro]
    };
  },
  methods: {
    isAtivo(rota) {
      if (this.$route.path == rota.path) {
        return true;
      }
      return false;
    }
  },
  components: {
    menuHorizontal: MenuVertical
  }
};
</script>

<style>
</style>
