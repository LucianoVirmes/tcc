<template>
    
        <b-form @submit="onSubmit" class="inline">
            <div class="row">
                <div class="col">
                    <inputsearch placeholder="Placa"/>
                </div> 

                <div class="col">
                    <input type="number" step="any" class="form-control"/>
                    <b-button id="btn-pesar" class="form-control btn btn-success text-center">Pesar</b-button>
                </div>
            </div>
            <div class="row">
            <div class="col">
                <label>Data</label>
                <input type="date" name="bday" max="3000-12-31" 
                    min="1000-01-01" class="form-control">
            </div>
                <div class="form-group col">
                    <label for="motorista">Motorista</label>
                    <b-input id="motorista" class="mb-2 mr-sm-2 mb-sm-0 form-control"></b-input>
                </div>
            </div>
            
            <div class="row col-sm-6">
                <label for="produto">Produto</label>
                <b-select id="produto" class="mb-2 mr-sm-2 mb-sm-0 form-control"></b-select>
            </div>
            <botoesform />
        </b-form>
</template>

<script>
    import InputSearch from '../../components/shared/inputs/InputSearch.vue';
    import BotoesFormulario from '../../components/shared/buttons/BotoesFormulario.vue';
export default {

        data(){
            return {}
        },
        components: {
            'inputsearch':InputSearch,
            'botoesform': BotoesFormulario
        }, 
        methods: {
            onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        }
    }
}
</script>

<style scoped>
    #btn-pesar {
        margin: 3% 0;
    }
    
</style>
