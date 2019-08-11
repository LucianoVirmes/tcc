<template>
    <menu-horizontal :rotas="rotas"/>
</template>

<script>
import MenuHorizontal from '../../components/shared/menu/MenuHorizontal.vue';
import {rotasMotoristaTela} from '../../route/rotasMotorista';
export default {
    data(){
        return {
            rotas: [rotasMotoristaTela.lista, rotasMotoristaTela.cadastro, rotasMotoristaTela.motoristaEmpresa]
        }
    },
    components: {
        menuHorizontal:MenuHorizontal
    }
}
</script>

<style>

</style>
