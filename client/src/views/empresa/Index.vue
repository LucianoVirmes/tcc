<template>
    <menu-horizontal :rotas="rotas"/>
</template>

<script>
import MenuHorizontal from '../../components/shared/menu/MenuHorizontal.vue';
import {rotasEmpresaTela} from '../../route/rotasEmpresa';
export default {
    data(){
        return {
            rotas: [rotasEmpresaTela.lista, rotasEmpresaTela.cadastro]
        }
    },
    components: {
        menuHorizontal:MenuHorizontal
    }
}
</script>

<style>

</style>
