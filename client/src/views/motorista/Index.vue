<template>
    <menu-horizontal :rotas="rotas"/>
</template>

<script>

import MenuVertical from '../../components/shared/menu/MenuVertical.vue';
import {rotasMotoristaTela} from '../../route/rotasMotorista';
export default {
    data(){
        return {
            rotas: [rotasMotoristaTela.lista, 
                    rotasMotoristaTela.cadastro, 
                    rotasMotoristaTela.motoristaEmpresa]
        }
    },
    components: {
        menuHorizontal:MenuVertical
    }
}
</script>

<style>

</style>
