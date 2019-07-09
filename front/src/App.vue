<template>
    <div class="div container">
       <menu-padrao :rotas="routes" />
        <transition name="pagina">
          <router-view></router-view>
        </transition>
    </div>
</template>
 
<script>
    import Router from './router';
    import Menu from './components/shared/menu/Menu.vue';
    import { routes } from './routes';
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
 
