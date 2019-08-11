<template>
  <div>
    <b-alert variant="success" :show="alertaSuccess" dismissible>Empresa salva com sucesso!</b-alert>
    <b-alert
      variant="danger"
      :show="alertaErro"
      dismissible
    >Houve um erro ao tentar submeter o formulário!</b-alert>
    <form class="form">
      <fieldset>
        <div class="form-group">
          <label>Nome da empresa</label>
          <input type="text" class="form-control" v-model="nome" />
        </div>
        <div class="form-group">
          <label>CNPJ da empresa</label>
          <input type="number" class="form-control" v-model="cnpj" />
        </div>
        <button class="btn btn-primary" @click="enviarForm">Enviar</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      cnpj: "",
      alertaSuccess: false,
      alertaErro: false
    };
  },
  methods: {
    enviarForm: function(evt) {
      evt.preventDefault();

      const formData = {
        id: this.$route.params.id,
        nome: this.nome,
        cnpj: this.cnpj
      };

      this.$http
        .post("http://localhost:3000/empresa/cadastrar", formData)
        .then(res => {
          this.showAlert(res);
        });
    },
    showAlert: function(res) {
      if (res.ok) {
        this.alertaSuccess = true;
      } else {
        this.alertaErro = true;
      }
    },
    buscaDados: function(id) {
      this.$http
        .get("http://localhost:3000/empresa/visualizar", { params: { id: id } })
        .then(res => res.json())
        .then(empresa => {
          (this.nome = empresa.nome), (this.cnpj = empresa.cnpj);
        });
    }
  },
  created() {
    document.title = this.$route.meta.title;
    if (this.$route.params.id) {
      this.buscaDados(this.$route.params.id);
    }
  }
};
</script>

<style>
</style>
