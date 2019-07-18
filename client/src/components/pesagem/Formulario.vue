<template>
    <div> 
        <b-form inline @submit="onSubmit">
            <label class="sr-only" for="placa">Placa</label>
            <b-input
            id="placa"
            class="mb-2 mr-sm-2 mb-sm-0">
            </b-input>

            <label class="sr-only" for="motorista">Motorista</label>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="motorista"></b-input>
            </b-input-group>

            <b-button variant="primary">Salvar</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
        data(){
            return {}
        }, 
        methods: {
            onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        }
    }
}
</script>

<style>

</style>
