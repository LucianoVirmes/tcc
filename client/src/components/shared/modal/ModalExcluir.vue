<template>
    <b-modal :id=id :title=title header-bg-variant="danger" header-text-variant="white">
            <p class="my-4">{{texto}}</p>
             <template slot="modal-footer" slot-scope="{ ok, cancel }">
      <b-button size="sm" @click="cancel()">
        {{btnVoltar}}
      </b-button>
        <b-button size="sm" variant="danger" @click="excluir($event,idExcluir)">
            {{btnExcluir}}
        </b-button>
    </template>
    </b-modal>    
</template>

<script>
export default {
    props: {
        id: {
            required: true,
            type: String
        },
        idExcluir: {
            required: true
        },
        title: {
            default: "Excluir"
        },
        texto: {
            default: "Deseja mesmo excluir?"
        },
        btnExcluir: {
            default: "Excluir"
        },
        btnVoltar: {
            default: "Voltar"
        },
        urlExclusao: ""
    },
    methods: {
        excluir: function(evt, idExcluir){
        const formData = {
                id: this.idExcluir
        }
        
        this.$emit("clickConfirm", idExcluir);
        this.$http.delete(this.urlExclusao, formData).then(success => {
           this.$emit("success", success); 
           this.$bvModal.hide(this.id);
        }, error => {
            console.log(error);
        })
            
        }
    }
}
</script>

<style>

</style>
