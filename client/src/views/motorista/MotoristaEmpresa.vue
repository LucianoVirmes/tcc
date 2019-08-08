<template>
<div class="container-fluid">
    <div class="form-group">
        <autocomplete :items="options" :placeholderInput="'Digite o nome de uma empresa'"
         class="col-10 float-left" @input="adicionarEmpresa"/>
        <b-button class="col-2 form-control" variant="success" @click="adicionarEmpresa()">Adicionar</b-button>
    </div>
    <tabela :items="empresas" :headers="headers" class="text-center tabela"/>
</div>
</template>

<script>
    import AutoComplete from '../../components/shared/inputs/AutoComplete.vue';
    import Tabela from '../../components/shared/tabela/Tabela.vue'

export default {
    data(){
        return {
            options: [],
            empresas: [],
            headers: {
                nome:{
                    label: "Nome"
                },
                cnpj: {
                    label: "CNPJ"
                },
                opcoes: {
                    label: "Opções",
                    key: "actions"
                }
            }
        }
    },
    methods: {
        autoCompleteEmpresas(){
            this.$http.get('http://localhost:3000/empresa/listar/')
            .then(res => res.json()).then(empresas => {
                
                empresas.forEach(empresa => {
                    this.options.push(empresa.nome);
                });
            })
        },
        adicionarEmpresa(empresa){
            console.log(empresa);
        }
    },
     created(){
        this.autoCompleteEmpresas();
    },
    components: {
        'autocomplete': AutoComplete,
        'tabela':Tabela
    }
}
</script>

<style scoped>
    .tabela {
        margin-top: 20%;
    }
</style>
