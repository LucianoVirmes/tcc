<template>
    <div> 
        <b-form @submit="onSubmit">
            <div class="form-group">
               <searchbutton placeholder="Placa" />
            </div>
            <div class="form-group">
            <label >Data</label>
            <input type="date" name="bday" max="3000-12-31" 
                    min="1000-01-01" class="form-control">
            </div>
            <div class="form-group">
                <label for="motorista">Motorista</label>
                <b-input id="motorista" class="mb-2 mr-sm-2 mb-sm-0 form-control"></b-input>
                 <b-button variant="primary form-control">Salvar</b-button>
            </div>
            
        </b-form>
    </div>
</template>

<script>
    import SearchButton from '../../components/shared/inputs/SearchButton.vue';
export default {

        data(){
            return {}
        },
        components: {
            'searchbutton':SearchButton
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
