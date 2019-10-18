<template>
  <div>
    <menu-padrao />
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>
 
<script>
import Menu from "./components/shared/menu/Menu.vue";

export default {
  components: {
    "menu-padrao": Menu
  },
  methods: {
    criaNotificacao(msg, variant) {
      this.$bvToast.toast(msg, {
        title: "Internet",
        variant: variant,
        solid: true
      });
    },
    criaNotificacaoDesktop(msg) {
      new Notification("Internet", {
        body: "Conexão estabelecida!"
      });
    }
  },
  created() {
    window.addEventListener("online", () => {
      if (process.env.IS_ELECTRON) {
        this.criaNotificacaoDesktop("Conexão estabelecida!");
      } else {
        this.criaNotificacao("Sem conexão com a Internet!", "success");
      }
    });

    window.addEventListener("offline", () => {
      if (process.env.IS_ELECTRON) {
        this.criaNotificacaoDesktop("Sem conexão com a Internet!");
      } else {
        this.criaNotificacao("Sem conexão com a Internet!", "danger");
      }
    });
  }
};
</script> 
 

 <style>
  input:invalid {
    border-color: red;
  }
</style>
 
