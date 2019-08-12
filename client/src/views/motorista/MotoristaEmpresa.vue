<template>
<div class="container-fluid">
    <div class="form-group">
        <label>Motorista</label>
        <b-form-select v-model="motoristaSelecionado" :options="motoristas" class="form-control" />
    </div>
    <div class="form-group">
        <autocomplete :items="options" :placeholderInput="'Digite o nome de uma empresa'"
         class="col-sm-10 float-left" @input="setEmpresa"/>
        <b-button class="col-sm-2 form-control" variant="success" @click="adicionarEmpresa()">Adicionar</b-button>
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
            },
            motoristas: [{
                value: null,
                text: 'Selecione um motorista'
            }],
            motoristaSelecionado: null,
            empresaSelecionada: null
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
        setEmpresa(empresa){
            this.empresaSelecionada = empresa;
        },
        adicionarEmpresa(){
            console.log(this.empresaSelecionada);
        },
        buscaMotoristas(){
            this.$http.get('http://localhost:3000/motorista/lista/')
            .then(res => res.json()).then(motoristas => {
                motoristas.forEach(element => {
                    this.motoristas.push({value: element.id, text:element.pessoa.nome});
                });
            });
        }
    },
     created(){
        this.autoCompleteEmpresas();
        this.buscaMotoristas();
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
