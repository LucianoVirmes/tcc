<template>
    <div>
        <formulario id="formulario"/>
        <tabela/>
    </div>
</template>

<script>
    import Tabela from './Tabela.vue';
    import Formulario from './Formulario.vue';
export default {
    components: {
        'formulario': Formulario,
        'tabela': Tabela
    }
}
</script>
<style>
    #formulario {
        margin: 20px;
    }
</style>
