<template>
    <div class="div container">
      <link rel="stylesheet" href="./assets/fonts/fontawesome.min.css">
      <menu-padrao :rotas="routes" />
        <transition name="pagina">
          <router-view></router-view>
        </transition>
    </div>
</template>
 
<script>
    import Router from './route/router';
    import Menu from './components/shared/menu/Menu.vue';
    import { routes } from './route/routes';
    export default {
      components: {
        'menu-padrao': Menu
      },
      data(){
        return {
          routes
      }
    }
  }  
</script> 
 

 <style>
    
 </style>
 
