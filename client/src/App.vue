<template>
    <div>
      <link rel="stylesheet" href="./assets/fonts/fontawesome.min.css">
      <menu-padrao/>
       <div class="container-fluid">
         <div class="pb-2 mt-4 mb-2 border-bottom">aaa</div>
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
 
