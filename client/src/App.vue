<template>
    <div>
      <link rel="stylesheet" href="./assets/fonts/fontawesome.min.css">
      <menu-padrao/>
       <div class="div container-fluid">
         <transition name="pagina">
          <router-view></router-view>
        </transition>
       </div>
    </div>
</template>
 
<script>
    import Menu from './components/shared/menu/Menu.vue';
    export default {
      components: {
        'menu-padrao': Menu
      }
    }
  
</script> 
 

 <style>
    
 </style>
 
