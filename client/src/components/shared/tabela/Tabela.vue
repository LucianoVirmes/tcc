<template>
    <div id="tabela clearfix">
        <b-table striped hover responsive :items="items" :fields="headers"></b-table>
         <span class="center" v-if="items.length <= 0">Ainda não há nada aqui.</span>
    </div>    
</template>
<script>
    export default {
        props:{
            items: {
                required: true,
                type: Array
            }, 
            headers: {
                required: true,
                type: Array
            }    
        }

    }
</script>

<style>

</style>
