<template>
    <div id="tabela clearfix">
        <b-table striped hover responsive :items="items" :fields="headers"></b-table>
         <div class="text-center">
            <span v-if="items.length <= 0" class="text-center">Ainda não há nada aqui.</span>
         </div>
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
            }    
        }

    }
</script>

<style>
    
</style>
