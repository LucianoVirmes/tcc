<template>
    <div>
        <formulario id="formulario"/>
        <hr>
        <tabela/>
    </div>
</template>

<script>
    import Tabela from './Tabela.vue';
    import Formulario from './Formulario.vue';
export default {
    components: {
        'formulario': Formulario,
        'tabela': Tabela,
    }
}
</script>
<style scoped>
    #formulario {
        margin: 20px;
    }
</style>
