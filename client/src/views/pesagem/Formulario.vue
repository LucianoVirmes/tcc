<template>
    <div> 
        <b-form @submit="onSubmit">
            <div class="form-group">
               <searchbutton placeholder="Placa" class="float-left col-sm-8"/>

               <div class="float-right  col-sm-4">
                        <input type="number" class="form-control"/>
                        <b-button id="btn-pesar" class="form-control btn btn-success text-center">Pesar</b-button>
                    </div>
            </div>
            <div class="form-group col-sm-8">
            <label>Data</label>
            <input type="date" name="bday" max="3000-12-31" 
                    min="1000-01-01" class="form-control">
            </div>
            <div class="form-group col-sm-8">
                <label for="motorista">Motorista</label>
                <b-input id="motorista" class="mb-2 mr-sm-2 mb-sm-0 form-control"></b-input>
                 <b-button type="submit" variant="primary form-control btn-salvar">Salvar</b-button>
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
    #btn-pesar, .btn-salvar {
        margin-top: 3%;
    }
</style>
