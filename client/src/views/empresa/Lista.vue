<template>
     <div>
        <b-alert variant="success" :show="alertaSucess" dismissible>Empresa excluida com sucesso!</b-alert>
        <tabela :items=empresas :headers=headers :linkEditar="'/empresa/cadastro'"
        :paramRowEditar="'id'" :paramRowExcluir="'id'" :carregando="carregando" id="tabela" @codExcluir="getCodExcluir"/>
         <modal :id="modalExcluir.id" :urlExclusao="modalExcluir.url"
         :texto="modalExcluir.texto" :title="modalExcluir.titulo" :btnExcluir="modalExcluir.btnExcluir"
         :idExcluir="id" @success="motoristaExcluido"/>

    </div>
</template>

<script>

    import Tabela from '../../components/shared/tabela/Tabela.vue';
    import ModalExcluir from '../../components/shared/modal/ModalExcluir.vue';

export default {
    data(){
        return {
            empresas: [],
            id: "",
            alertaSucess: false,
            modalExcluir: {
               texto: "Deseja mesmo excluir esta empresa?",
               titulo: "Excluir",
               id: "modal-excluir",
               url: "http://localhost:3000/empresa/remover/",
               btnExcluir: "Excluir"
            },
            carregando: {
                type: Boolean,
                default: false
            },
            headers: {
                id: {
                    label: "Código"
                },
                nome: {
                    label: "Nome",
                },
                cnpj: {
                    label: "CNPJ"
                },
                opcoes: {
                    key: 'actions',
                    label: "Opções" 
                }
            }
        }
    },

    created(){
        this.buscaEmpresas();
    },

    methods: {
        getCodExcluir: function(codExcluir){
            this.id = codExcluir
        },
        buscaEmpresas: function(){
            this.carregando = true;
            this.$http.get("http://localhost:3000/empresa/listar")
            .then(res => res.json())
            .then(empresas => {
                this.empresas = empresas
                this.carregando = false
            })
        },
        motoristaExcluido: function(msg){
                this.alertaSucess = true;
                this.buscaEmpresas();
        }
    },
    components: {
        'tabela': Tabela,
        'modal': ModalExcluir
    }
}
</script>

<style>

</style>
