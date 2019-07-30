<template>
    <div>
        <b-button size="sm" class="mr-1" variant="info">
            <font-awesome-icon icon="pen"/>
        </b-button>
        <b-button size="sm"  variant="danger">
            <font-awesome-icon icon="trash"/>  
        </b-button>
    </div>    
</template>

<script>
export default {
    props:{
        enderecoEdicao: {
            type: String,
            required: true
        },
        enderecoExclusao: {
            type: String,
            required: true
        }
    }, 
    methods: {
        editar: function (){
            console.log('editar');
        }, 
        excluir: function (){
            console.log('excluir');
        }
    }
}
</script>

<style>

</style>
