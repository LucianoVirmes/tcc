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
  created(){
    document.title= "Título"
  }
};
</script> 
 

 <style>
  input:invalid {
    border-color: red;
  }
 
</style>
 
