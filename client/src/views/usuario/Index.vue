<template>
    <menu-horizontal :rotas="rotas"/>
</template>

<script>
import MenuHorizontal from '../../components/shared/menu/MenuHorizontal.vue';
import {rotasUsuarioTela} from '../../route/rotasUsuario';
export default {
    data(){
        return {
            rotas: [rotasUsuarioTela.lista, rotasUsuarioTela.cadastro]
        }
    },
    components: {
        menuHorizontal:MenuHorizontal
    }
}
</script>

<style>

</style>
