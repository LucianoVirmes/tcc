<template>
    <div>
        <b-alert variant="success" :show="alertaSucess" dismissible>Motorista inativado com sucesso!</b-alert>
        <tabela :items=motoristas :headers=headers :linkEditar="'/motorista/alterar'"
        :paramRowEditar="'id'" :paramRowExcluir="'id'" id="tabela" @codExcluir="getCodExcluir"/>
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
            motoristas: [],
            id: "",
            alertaSucess: false,
            modalExcluir: {
               texto: "Deseja mesmo inativar este motorista?",
               titulo: "Inativar",
               id: "modal-excluir",
               url: "http://localhost:3000/motorista/remover/",
               btnExcluir: "Inativar"
            },
            headers: {
                id: {
                    label: "Código"
                },
                nome: {
                    label: "Nome",
                    key: "pessoa.nome"
                },
                cnh: {
                    label: "CNH"
                },
                opcoes: {
                    key: 'actions',
                    label: "Opções" 
                }
            }
        }
    },

    created(){
        this.buscaMotoristas();
    },

    methods: {
        getCodExcluir: function(codExcluir){
            this.id = codExcluir
        },
        buscaMotoristas: function(){
            this.$http.get("http://localhost:3000/motorista/lista")
            .then(res => res.json())
            .then(motoristas => {
                this.motoristas = motoristas
            })
        },
        motoristaExcluido: function(msg){
                this.alertaSucess = true;
                this.buscaMotoristas();
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
