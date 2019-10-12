<template>
  <div class="col text-right botoes">
    <b-button id="btn-cancelar" variant="danger" @click="cancelar()">Cancelar</b-button>
    <b-button id="btn-salvar" variant="primary" type="submit" @click="salvar()">Salvar</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    salvar() {
      this.$emit("salvar");
    },
    cancelar() {
        this.$emit("cancelar");
    }

  }
};
</script>

<style scoped>
.botoes > button {
  margin-left: 3px;
}
</style>
