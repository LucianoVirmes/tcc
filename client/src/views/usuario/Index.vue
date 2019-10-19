<template>
    <menu-horizontal :rotas="rotas"/>
</template>

<script>

import MenuVertical from '../../components/shared/menu/MenuVertical.vue';
import {rotasUsuarioTela} from '../../route/rotasUsuario';
export default {
    data(){
        return {
            rotas: [rotasUsuarioTela.lista, rotasUsuarioTela.cadastro]
        }
    },
    components: {
        menuHorizontal:MenuVertical
    }
}
</script>

<style>

</style>
