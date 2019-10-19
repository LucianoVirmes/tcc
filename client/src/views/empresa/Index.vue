<template>
    <menu-horizontal :rotas="rotas"/>
</template>

<script>
import MenuVertical from '../../components/shared/menu/MenuVertical.vue';
import {rotasEmpresaTela} from '../../route/rotasEmpresa';
export default {
    data(){
        return {
            rotas: [rotasEmpresaTela.lista, rotasEmpresaTela.cadastro, rotasEmpresaTela.empresaVeiculos]
        }
    },
    components: {
        menuHorizontal:MenuVertical
    }
}
</script>

<style>

</style>
