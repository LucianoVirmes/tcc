<template>
  <div>
    <link rel="stylesheet" href="./assets/fonts/fontawesome.min.css" />
    <menu-padrao />
    <div class="container-fluid">
      <div class="pb-2 mt-4 mb-2 border-bottom">
        <h3>{{$route.meta.desc}}</h3>
      </div>
      <transition name="pagina">
        <router-view></router-view>
      </transition>
    </div>
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
 
